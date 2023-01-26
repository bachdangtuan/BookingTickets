const {users} = require("../models/");
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const {Trips, Stations, Ticket} = require('../models')
const nodemailer = require('nodemailer');


const STATUS = require("../core/constant/status.constant")
const EMAIL_CONFIG = require("../core/constant/email-config.constant")
// Hàm tạo user
const createUser = async (req, res) => {
    // console.log('req', req.body)
    const {name, email, password, username, numberPhone} = req.body
    try {
        // tạo ra chuỗi ngẫu nhiên
        const salt = bcrypt.genSaltSync(15)
        // mã hóa chuỗi
        const hashPass = bcrypt.hashSync(password, salt)
        const newStations = await users.create({
            name, email, password: hashPass, numberPhone, username
        })
        res.status(STATUS.STATUS_201).send(newStations)
    } catch (err) {
        res.status(STATUS.STATUS_500).send(err)
    }
}

// Hàm login
const loginUser = async (req, res) => {
    const {username, password} = req.body
    // tìm user tồn tại
    const user = await users.findOne({
        where: {username}
    })
    if (user) {
        const isAuth = bcrypt.compareSync(password, user.password)
        if (isAuth) {
            const accessToken = jwt.sign({username: user.username, type: user.type}, "12345678", {
                expiresIn: 60 * 60
            });
            res.status(STATUS.STATUS_200).send({
                user,
                accessToken,
                message: "Người dùng đăng nhập thành công !"
            })
        } else {
            return res.status(STATUS.STATUS_400).send({
                message: "Tài khoản mật khẩu không đúng !"
            })
        }
    } else {
        return res.status(STATUS.STATUS_404).send({
            message: "Không có tài khoản"
        })
    }
    // kiểm tra mật khẩu
}

// Hàm lấy dữ liệu
const getAllUser = async (req, res) => {
    try {
        const newUser = await users.findAll(
            {
                include: [
                    {
                        model: Trips,
                        as: 'trip',
                        through: {attributes: []},
                        attributes: {exclude: ['createdAt', 'updatedAt', 'fromStation', 'toStation']},
                        include: [
                            {
                                model: Stations,
                                as: "from",
                                attributes: {exclude: ['createdAt', 'updatedAt']},
                            },
                            {
                                model: Stations,
                                as: "to",
                                attributes: {exclude: ['createdAt', 'updatedAt']},
                            },
                        ]
                    },
                ],
                attributes: {exclude: ['createdAt', 'updatedAt', 'password']}
            }
        )
        res.status(STATUS.STATUS_201).send(newUser)
    } catch (err) {
        res.status(STATUS.STATUS_500).send(err)
    }
}

// Hàm xe chi tiết một user
const getUserDetail = async (req, res) => {
    const {id} = req.params
    try {
        // tìm trong DB có id không
        const user = await users.findOne({
            where: {id},
            include: [
                {
                    model: Trips,
                    as: 'trip',
                    through: {attributes: []},
                    attributes: {exclude: ['createdAt', 'updatedAt', 'fromStation', 'toStation']},
                    include: [
                        {
                            model: Stations,
                            as: "from",
                            attributes: {exclude: ['createdAt', 'updatedAt']},
                        },
                        {
                            model: Stations,
                            as: "to",
                            attributes: {exclude: ['createdAt', 'updatedAt']},
                        },
                    ]
                },
            ],
        })
        res.status(STATUS.STATUS_200).send(user)
    } catch (err) {
        res.status(STATUS.STATUS_500).send(err)
    }
}

// Hàm upload avatar
const uploadAvatar = async (req, res) => {
    const {firebaseUrl} = req.file
    const {user} = req
    // tìm kiếm User trong bảng DB
    const userFound = await users.findOne({
        username: user.username
    })
    userFound.avatar = firebaseUrl
    await userFound.save()

    res.status(STATUS.STATUS_200).send(userFound)


}

// Hàm lấy lại mật khẩu
const resetPassword = async (req, res) => {
    /* Logic Check email xem có trong db hay không, nếu có thì gửi 1 đường link chọ để họ lấy lại mật khẩu*/
    const {email} = req.body
    try {
        const user = await users.findOne({
            where: {email}
        })
        if (user) {
            const defaultPassword = '12345678'

            const salt = bcrypt.genSaltSync(15)
            // mã hóa chuỗi
            user.password = bcrypt.hashSync(defaultPassword, salt)
            await user.save()
            console.log('user', user)
            let transporter = nodemailer.createTransport(EMAIL_CONFIG);
            let mailOptions = {
                from: '"Lấy lại mật khẩu" <dangtunguyen_hr@outlook.com.vn>', // sender address
                to: `${email}`, // list of receivers
                subject: 'Shreyu - Lấy lại mật khẩu ', // Subject line
                html: `
                    <div>
                        <h4>Xin chào <b style="color: red">${user.name}</b> 
                            <br>đã được reset về mật khẩu mặc định<br>
                       </h4> 
                          <span>Username: ${user.username}</span><br>
                          <p>Password: ${defaultPassword} </p>
                       <i>Để đổi lại mật khẩu vui lòng đăng nhập trang quản trị để thực hiện ,Cảm ơn đã sử dụng dịch vụ của chúng tôi !</i>
                    </div>`
                // attachments: [
                //     {   // utf-8 string as an attachment
                //         filename: 'text1.txt',
                //         content: 'hello world!'
                //     },
                //     {   // binary buffer as an attachment
                //         filename: 'image.jpg',
                //         content: new Buffer.from('iVBORw0KGg....', 'base64')
                //     }
                // ],
            };


            await transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    return console.log(error);
                }
                console.log('Message sent: %s', info.messageId);
            });
            res.status(STATUS.STATUS_200).send({
                user,
                message: 'Thành công'
            })

        } else {
            res.status(STATUS.STATUS_404).send({
                message: `Không có user nào với email ${email}`
            })
        }

    } catch (e) {
        res.status(STATUS.STATUS_500).send({
            message: 'Lỗi server'
        })
    }


}


module.exports = {
    createUser, getAllUser, getUserDetail, loginUser, uploadAvatar, resetPassword
}
