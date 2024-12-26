const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('talleres', {
        id: {
            type: DataTypes.UUID, 
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            unique: true,
        },
        nombreTaller: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        cupo: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        cantidadInscriptos: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
            allowNull: true,
        },

    }, 
    );
}; 