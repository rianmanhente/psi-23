const DataTypes = require("sequelize");
const sequelize = require("../config/sequelize");

const Cart = sequelize.define('Cart', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    payment_method: {
        type: DataTypes.STRING,
        allowNull: false
    },
});

Cart.associate = function(models) {
    Cart.hasMany(models.Product);
};

module.exports = Cart;