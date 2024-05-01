const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('users', {
        id: {
            type: DataTypes.UUID, // genera un id mas largo, ocupa mas espacio en la BDD pero es mas seguro, sin colisiones
            defaultValue: DataTypes.UUIDV4, // Genera automáticamente un UUID único
            primaryKey: true,
            unique: true
        },
        emailGoogle: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        pagoARealizar: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        monto: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        estadoInscripcion: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        voluntario: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        preinscripto: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
    }, 
    );
}; 