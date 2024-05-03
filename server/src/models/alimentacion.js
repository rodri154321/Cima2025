const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('alimentacion', {
        id: {
            type: DataTypes.UUID, 
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            unique: true
        },
        nombreAlimentacion: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        detalleAlimentacion: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    }, 
    );
}; 