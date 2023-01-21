'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        /**
         * Add seed commands here.
         *
         * Example:
         * await queryInterface.bulkInsert('People', [{
         *   name: 'John Doe',
         *   isBetaMember: false
         * }], {});
         */
        await queryInterface.bulkInsert('vehicles', [
            {
                name: 'Mitsubishi Xpander',
                images: 'https://images.autofun.vn/file1/da12deac380c479ba6ffd7e59a38ad08_456x258.jpg',
                createdAt: "2022-12-26 07:06:14",
                driver: '2',
                description: 'The 2023 - 2024 Mitsubishi Xpander is offered in 3 variants - which are priced from 555 Triệu to 650 Triệu, the base model of xpander is 2021 Mitsubishi Xpander 1.5 MT which is at a price of 555 Triệu',
                status: true,
                type: 'SUV',
                updatedAt: "2022-12-28 07:06:16",
            },
            {
                name: 'Toyota Innova',
                images: 'https://images.autofun.vn/file1/45d5239ce7fe4960b1c2593bb0ddbb51_456x258.jpg',
                createdAt: "2022-12-26 07:06:14",
                driver: '1',
                description: 'The 2023 - 2024 Toyota Innova is offered in 4 variants - which are priced from 750 Triệu to 989 Triệu',
                status: true,
                type: 'SUV',
                updatedAt: "2022-12-28 07:06:16",
            },
            {
                name: 'Kia Carens',
                images: 'https://images.autofun.vn/file1/317b45bbbef54ae7ac2b2103a8aaf0dc_456x258.jpg',
                createdAt: "2022-12-26 07:06:14",
                driver: '3',
                description: 'The 2023 - 2024 Kia Carens is offered in 7 variants - which are priced from 619 Triệu to 859 Triệu, the base model of carens is Kia Carens 1.5G MT Deluxe 2023 which is at a price of 619 Triệu',
                status: true,
                type: 'SUV',
                updatedAt: "2022-12-28 07:06:16",
            },
            {
                name: 'Hyundai Starex 2023',
                images: 'https://images.autofun.vn/file1/f8a05e1dfd2545fa946e2b08a3335b49_456x258.jpg',
                createdAt: "2022-12-26 07:06:14",
                driver: '3',
                description: 'Hyundai Starex 2023 có 16 hình ảnh, trong đó có 3 hình ảnh nội thất, 10 hình ảnh ngoại thất, 3 ảnh động cơ Hyundai Starex và các ảnh khác. Cùng xem đa góc nhìn phía trước, phía sau, bên hông và đầu xe của Hyundai Starex 2023 mới tại đây.',
                status: true,
                type: 'SUV',
                updatedAt: "2022-12-28 07:06:16",
            },
            {
                name: 'Ford Tourneo 2023',
                images: 'https://images.autofun.vn/file1/8da0dfb1c8694243aa55a62a580492e4_456x258.jpg',
                createdAt: "2022-12-26 07:06:14",
                driver: '3',
                description: 'Ford Tourneo 2023 có 28 hình ảnh, trong đó có 11 hình ảnh nội thất, 9 hình ảnh ngoại thất, 8 ảnh động cơ Ford Tourneo và các ảnh khác. Cùng xem đa góc nhìn phía trước, phía sau, bên hông và đầu xe của Ford Tourneo 2023 mới tại đây.',
                status: true,
                type: 'SUV',
                updatedAt: "2022-12-28 07:06:16",
            },
            {
                name: 'KIA Seltos',
                images: 'https://images.autofun.vn/file1/eb11f728519b4c52b5cd889e27852a98_456x258.jpg',
                createdAt: "2022-12-26 07:06:14",
                driver: '3',
                description: 'KIA Seltos 2023 có 28 hình ảnh, trong đó có 9 hình ảnh nội thất, 10 hình ảnh ngoại thất, 9 ảnh động cơ KIA Seltos và các ảnh khác. Cùng xem đa góc nhìn phía trước, phía sau, bên hông và đầu xe của KIA Seltos 2023 mới tại đây.',
                status: true,
                type: 'SUV',
                updatedAt: "2022-12-28 07:06:16",
            },
            {
                name: 'KIA Seltos',
                images: 'https://images.autofun.vn/file1/eb11f728519b4c52b5cd889e27852a98_456x258.jpg',
                createdAt: "2022-12-26 07:06:14",
                driver: '3',
                description: 'KIA Seltos 2023 có 28 hình ảnh, trong đó có 9 hình ảnh nội thất, 10 hình ảnh ngoại thất, 9 ảnh động cơ KIA Seltos và các ảnh khác. Cùng xem đa góc nhìn phía trước, phía sau, bên hông và đầu xe của KIA Seltos 2023 mới tại đây.',
                status: true,
                type: 'SUV',
                updatedAt: "2022-12-28 07:06:16",
            },
            {
                name: 'KIA Seltos',
                images: 'https://images.autofun.vn/file1/eb11f728519b4c52b5cd889e27852a98_456x258.jpg',
                createdAt: "2022-12-26 07:06:14",
                driver: '3',
                description: 'KIA Seltos 2023 có 28 hình ảnh, trong đó có 9 hình ảnh nội thất, 10 hình ảnh ngoại thất, 9 ảnh động cơ KIA Seltos và các ảnh khác. Cùng xem đa góc nhìn phía trước, phía sau, bên hông và đầu xe của KIA Seltos 2023 mới tại đây.',
                status: true,
                type: 'SUV',
                updatedAt: "2022-12-28 07:06:16",
            },
            {
                name: 'KIA Seltos',
                images: 'https://images.autofun.vn/file1/eb11f728519b4c52b5cd889e27852a98_456x258.jpg',
                createdAt: "2022-12-26 07:06:14",
                driver: '3',
                description: 'KIA Seltos 2023 có 28 hình ảnh, trong đó có 9 hình ảnh nội thất, 10 hình ảnh ngoại thất, 9 ảnh động cơ KIA Seltos và các ảnh khác. Cùng xem đa góc nhìn phía trước, phía sau, bên hông và đầu xe của KIA Seltos 2023 mới tại đây.',
                status: true,
                type: 'SUV',
                updatedAt: "2022-12-28 07:06:16",
            },
            {
                name: 'KIA Seltos',
                images: 'https://images.autofun.vn/file1/eb11f728519b4c52b5cd889e27852a98_456x258.jpg',
                createdAt: "2022-12-26 07:06:14",
                driver: '3',
                description: 'KIA Seltos 2023 có 28 hình ảnh, trong đó có 9 hình ảnh nội thất, 10 hình ảnh ngoại thất, 9 ảnh động cơ KIA Seltos và các ảnh khác. Cùng xem đa góc nhìn phía trước, phía sau, bên hông và đầu xe của KIA Seltos 2023 mới tại đây.',
                status: true,
                type: 'SUV',
                updatedAt: "2022-12-28 07:06:16",
            },
            {
                name: 'KIA Seltos',
                images: 'https://images.autofun.vn/file1/eb11f728519b4c52b5cd889e27852a98_456x258.jpg',
                createdAt: "2022-12-26 07:06:14",
                driver: '3',
                description: 'KIA Seltos 2023 có 28 hình ảnh, trong đó có 9 hình ảnh nội thất, 10 hình ảnh ngoại thất, 9 ảnh động cơ KIA Seltos và các ảnh khác. Cùng xem đa góc nhìn phía trước, phía sau, bên hông và đầu xe của KIA Seltos 2023 mới tại đây.',
                status: true,
                type: 'SUV',
                updatedAt: "2022-12-28 07:06:16",
            },
            {
                name: 'KIA Seltos',
                images: 'https://images.autofun.vn/file1/eb11f728519b4c52b5cd889e27852a98_456x258.jpg',
                createdAt: "2022-12-26 07:06:14",
                driver: '3',
                description: 'KIA Seltos 2023 có 28 hình ảnh, trong đó có 9 hình ảnh nội thất, 10 hình ảnh ngoại thất, 9 ảnh động cơ KIA Seltos và các ảnh khác. Cùng xem đa góc nhìn phía trước, phía sau, bên hông và đầu xe của KIA Seltos 2023 mới tại đây.',
                status: true,
                type: 'SEDAN',
                updatedAt: "2022-12-28 07:06:16",
            },
            {
                name: 'KIA Seltos',
                images: 'https://images.autofun.vn/file1/eb11f728519b4c52b5cd889e27852a98_456x258.jpg',
                createdAt: "2022-12-26 07:06:14",
                driver: '3',
                description: 'KIA Seltos 2023 có 28 hình ảnh, trong đó có 9 hình ảnh nội thất, 10 hình ảnh ngoại thất, 9 ảnh động cơ KIA Seltos và các ảnh khác. Cùng xem đa góc nhìn phía trước, phía sau, bên hông và đầu xe của KIA Seltos 2023 mới tại đây.',
                status: true,
                type: 'SEDAN',
                updatedAt: "2022-12-28 07:06:16",
            },
            {
                name: 'KIA Seltos',
                images: 'https://images.autofun.vn/file1/eb11f728519b4c52b5cd889e27852a98_456x258.jpg',
                createdAt: "2022-12-26 07:06:14",
                driver: '3',
                description: 'KIA Seltos 2023 có 28 hình ảnh, trong đó có 9 hình ảnh nội thất, 10 hình ảnh ngoại thất, 9 ảnh động cơ KIA Seltos và các ảnh khác. Cùng xem đa góc nhìn phía trước, phía sau, bên hông và đầu xe của KIA Seltos 2023 mới tại đây.',
                status: true,
                type: 'SEDAN',
                updatedAt: "2022-12-28 07:06:16",
            },
            {
                name: 'KIA Seltos',
                images: 'https://images.autofun.vn/file1/eb11f728519b4c52b5cd889e27852a98_456x258.jpg',
                createdAt: "2022-12-26 07:06:14",
                driver: '3',
                description: 'KIA Seltos 2023 có 28 hình ảnh, trong đó có 9 hình ảnh nội thất, 10 hình ảnh ngoại thất, 9 ảnh động cơ KIA Seltos và các ảnh khác. Cùng xem đa góc nhìn phía trước, phía sau, bên hông và đầu xe của KIA Seltos 2023 mới tại đây.',
                status: true,
                type: 'SEDAN',
                updatedAt: "2022-12-28 07:06:16",
            },
            {
                name: 'KIA Seltos',
                images: 'https://images.autofun.vn/file1/eb11f728519b4c52b5cd889e27852a98_456x258.jpg',
                createdAt: "2022-12-26 07:06:14",
                driver: '3',
                description: 'KIA Seltos 2023 có 28 hình ảnh, trong đó có 9 hình ảnh nội thất, 10 hình ảnh ngoại thất, 9 ảnh động cơ KIA Seltos và các ảnh khác. Cùng xem đa góc nhìn phía trước, phía sau, bên hông và đầu xe của KIA Seltos 2023 mới tại đây.',
                status: true,
                type: 'SEDAN',
                updatedAt: "2022-12-28 07:06:16",
            },
            {
                name: 'KIA Seltos',
                images: 'https://images.autofun.vn/file1/eb11f728519b4c52b5cd889e27852a98_456x258.jpg',
                createdAt: "2022-12-26 07:06:14",
                driver: '3',
                description: 'KIA Seltos 2023 có 28 hình ảnh, trong đó có 9 hình ảnh nội thất, 10 hình ảnh ngoại thất, 9 ảnh động cơ KIA Seltos và các ảnh khác. Cùng xem đa góc nhìn phía trước, phía sau, bên hông và đầu xe của KIA Seltos 2023 mới tại đây.',
                status: true,
                type: 'SUV',
                updatedAt: "2022-12-28 07:06:16",
            },
            {
                name: 'KIA Seltos',
                images: 'https://images.autofun.vn/file1/eb11f728519b4c52b5cd889e27852a98_456x258.jpg',
                createdAt: "2022-12-26 07:06:14",
                driver: '3',
                description: 'KIA Seltos 2023 có 28 hình ảnh, trong đó có 9 hình ảnh nội thất, 10 hình ảnh ngoại thất, 9 ảnh động cơ KIA Seltos và các ảnh khác. Cùng xem đa góc nhìn phía trước, phía sau, bên hông và đầu xe của KIA Seltos 2023 mới tại đây.',
                status: true,
                type: 'SUV',
                updatedAt: "2022-12-28 07:06:16",
            },
            {
                name: 'KIA Seltos',
                images: 'https://images.autofun.vn/file1/eb11f728519b4c52b5cd889e27852a98_456x258.jpg',
                createdAt: "2022-12-26 07:06:14",
                driver: '3',
                description: 'KIA Seltos 2023 có 28 hình ảnh, trong đó có 9 hình ảnh nội thất, 10 hình ảnh ngoại thất, 9 ảnh động cơ KIA Seltos và các ảnh khác. Cùng xem đa góc nhìn phía trước, phía sau, bên hông và đầu xe của KIA Seltos 2023 mới tại đây.',
                status: true,
                type: 'SUV',
                updatedAt: "2022-12-28 07:06:16",
            },
        ], {});
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
        await queryInterface.bulkDelete('vehicles', null, {});
    }
};
