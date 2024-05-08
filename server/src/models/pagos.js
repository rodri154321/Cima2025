const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('pagos', {
        id: {
            type: DataTypes.UUID, 
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            unique: true
        },
        comprobante: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        esDescubre: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        fechaPago: {
            type: DataTypes.DATE,
            allowNull: false,
        },
    }, 
    );
}; 