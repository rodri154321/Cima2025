const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('users', {
        id: {
            type: DataTypes.UUID, 
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            unique: true
        },
        nombrePlenaria: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        cantPersonas: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    }, 
    );
}; 