module.exports = (sequelize, Sequelize) => {
    const Product = sequelize.define('products', {
        user_id: {
            type: Sequelize.INTEGER,
            allownull: false
        },
        category_id: {
            type: Sequelize.INTEGER,
            allownull: false
        },
        title: {
            type: Sequelize.STRING,
            allownull: false
        },
        brand: {
            type: Sequelize.STRING,
            allownull: false
        },
        model: {
            type: Sequelize.STRING,
            allownull: false
        },
        year: {
            type: Sequelize.STRING,
            allownull: false
        },
        condition: {
            type: Sequelize.BOOLEAN,
            allownull: false,
            defaultValue: true
        },
        description: {
            type: Sequelize.TEXT,
            allownull: false,
        },
        address: {
            type: Sequelize.TEXT,
            allownull: false,
        },
        loc_latitude: {
            type: Sequelize.STRING,
            allownull: false,
        },
        loc_longtitude: {
            type: Sequelize.STRING,
            allownull: false,
        },
        sold: {
            type: Sequelize.BOOLEAN,
            allownull: false,
            defaultValue: false
        },
    })

    return Product
}