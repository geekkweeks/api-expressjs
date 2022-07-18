module.exports = (sequelize, Sequalize) => {
    const User = sequelize.define('users', {
        name: {
            type: Sequalize.STRING,
            allownull: false
        },
        phone: {
            type: Sequalize.STRING,
            allownull: false
        },
        email: {
            type: Sequalize.STRING,
            allownull: false
        },
        password: {
            type: Sequalize.STRING,
            allownull: false
        }
    })

    return User
}
