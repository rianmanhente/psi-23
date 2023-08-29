const DataTypes = require("sequelize");
const sequelize = require("../config/sequelize");

const Product = sequelize.define('Product', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    price: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    category: {
        type: DataTypes.STRING,
        allowNull: false
    },
    image:{
        type: DataTypes.STRING,
        allowNull:false
    }
});

Product.associate = function(models) {
    Product.belongsTo(models.User);
    Product.belongsTo(models.Cart);
};


module.exports = Product;