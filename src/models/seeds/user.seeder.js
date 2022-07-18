const db = require('../index')
const user = db.user

exports.userSeed = () => {
    user.create({
        name: 'Alfan',
        email:'alfanzah@gmail.com',
        phone:'09303',
        password: 'sdadasd'
    })
}