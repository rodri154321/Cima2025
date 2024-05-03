const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('users', {
        id: {
            type: DataTypes.UUID, 
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            unique: true
        },
        nombre: {
            type: DataTypes.STRING,
            allowNull: false
        },
        apellido: {
            type: DataTypes.STRING,
            allowNull: false
        },
        fechaNacimiento: {
            type: DataTypes.DATE,
            allowNull: false
        },
        sexo: {
            type: DataTypes.STRING,
            allowNull: false
        },
        documento: {
            type: DataTypes.STRING,
            allowNull: false
        },
        nacionalidad: {
            type: DataTypes.STRING,
            allowNull: false
        },
        paisResidencia: {
            type: DataTypes.STRING,
            allowNull: false
        },
        provincia: {
            type: DataTypes.STRING,
            allowNull: false
        },
        ciudad: {
            type: DataTypes.STRING,
            allowNull: false
        },
        iglesia: {
            type: DataTypes.STRING,
            allowNull: false
        },
        nombrePastor: {
            type: DataTypes.STRING,
            allowNull: false
        },
        telefonoPastor: {
            type: DataTypes.STRING,
            allowNull: false
        },
        esAlergico: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        detalleAlergia: {
            type: DataTypes.STRING,
            allowNull: false
        },
        tieneMedicacion: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        detalleMedicacion: {
            type: DataTypes.STRING,
            allowNull: false
        },
        telefono: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        alimentacion: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        participacionMovida: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        esVoluntario: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        emailGoogle: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        descubrePagos: {
            type: DataTypes.STRING,
            allowNull: false
        },
        experimentaPagos: {
            type: DataTypes.STRING,
            allowNull: false
        },
        voluntarioPagos: {
            type: DataTypes.STRING,
            allowNull: false
        },
        cartaPastoral: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        estadoInscripcion: {
            type: DataTypes.STRING,
            allowNull: false
        },
        preinscripto: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
    }, 
    );
}; 