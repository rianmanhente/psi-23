const DataTypes = require("sequelize");
const sequelize = require("../config/sequelize");

const Adress = sequelize.define('Adress', {
    cep: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

Adress.associate = function(models) {
    Adress.belongsTo(models.User);
};

module.exports = Adress;