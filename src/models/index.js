const db = require('../config/database')

db.user = require('../models/user.model')(db.sequelize, db.Sequalize)
db.category = require('../models/category.model')(db.sequelize, db.Sequalize)
db.product = require('../models/product.model')(db.sequelize, db.Sequalize)
db.image = require('../models/image.model')(db.sequelize, db.Sequalize)

module.exports = db