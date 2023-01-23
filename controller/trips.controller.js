const {Trips, Stations, Users, Ticket, passengerCarCompanies, Vehicles} = require('../models')

const createTrip = async (req, res) => {
    const {fromStation, toStation, startTime, price} = req.body

    const newTrip = await Trips.create({
        fromStation,
        toStation,
        startTime,
        price,
        status: '1'
    })

    res.status(201).send({
        message: 'Tạo thành công',
        newTrip
    })
}

const getAllTrip = async (req, res) => {
    try {
        let limit = parseInt(req.query.limit)
        let page = parseInt(req.query.page)
        let start = (page - 1) * limit;
        const listTrips = await Trips.findAndCountAll({
                limit: limit,
                offset: start,
                include: [
                    {
                        model: Stations,
                        as: "from",
                        attributes: {exclude: ['createdAt', 'updatedAt']}
                    },
                    {
                        model: Stations,
                        as: "to",
                        attributes: {exclude: ['createdAt', 'updatedAt']}
                    },
                    // {
                    //     model: passengerCarCompanies,
                    //     as: "company",
                    //     through: {attributes: []},
                    //     attributes: {exclude: ['createdAt', 'updatedAt']}
                    // },
                    // {
                    //     model: Users,
                    //     as: 'user',
                    //     through: {attributes: []},
                    //     attributes: {exclude: ['createdAt', 'updatedAt', 'password']}
                    // },
                ],
                attributes: {exclude: ['fromStation', 'toStation', 'createdAt', 'updatedAt']}
            }
        )
        res.status(200).send({
            message: 'Lấy thành công',
            thisPage: page,
            limit: limit,
            data: listTrips.rows,
            totalItems: listTrips.count,
        })
    } catch (e) {
        console.log('e', e)
    }

}
// Hàm xe chi tiết một chuyến đi
const getTripsDetail = async (req, res) => {
    const {id} = req.params
    try {
        // tìm trong DB có id không
        const trip = await Trips.findOne({
            attributes: {exclude: ['fromStation', 'toStation', 'createdAt', 'updatedAt']},
            include: [
                {
                    model: Stations,
                    as: "from",
                    attributes: {exclude: ['createdAt', 'updatedAt']}
                },
                {
                    model: Stations,
                    as: "to",
                    attributes: {exclude: ['createdAt', 'updatedAt']}
                },
                {
                    model: passengerCarCompanies,
                    as: "company",
                    through: {attributes: []},
                    attributes: {exclude: ['createdAt', 'updatedAt']},
                    include: [
                        {
                            model: Vehicles,
                            as: "vehicle",
                        }
                    ]
                },
                {
                    model: Users,
                    as: 'user',
                    through: {attributes: []},
                    attributes: {exclude: ['createdAt', 'updatedAt', 'password']}
                },
            ],

            where: {id}
        })
        res.status(200).send(trip)
    } catch (err) {
        res.status(500).send(err)
    }
}

module.exports = {createTrip, getAllTrip, getTripsDetail}
