module.exports = (sequelize, Sequelize) => {
    const Image = sequelize.define('images', {
        product_id: {
            type: Sequelize.INTEGER,
            allownull: false
        },
        file: {
            type: Sequelize.STRING,
            allownull: false
        }
    })

    return Image
}