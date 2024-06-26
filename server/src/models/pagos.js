const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('pagos', {
        id: {
            type: DataTypes.UUID, 
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            unique: true
        },
        esDescubre: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        fechaPago: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        montoPago: {
            type: DataTypes.DECIMAL,
            allowNull: true,
        },
    }, 
    );
}; 