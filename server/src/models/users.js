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
            allowNull: true
        },
        apellido: {
            type: DataTypes.STRING,
            allowNull: true
        },
        fechaNacimiento: {
            type: DataTypes.DATE,
            allowNull: true
        },
        sexo: {
            type: DataTypes.STRING,
            allowNull: true
        },
        documento: {
            type: DataTypes.STRING,
            allowNull: true
        },
        nacionalidad: {
            type: DataTypes.STRING,
            allowNull: true
        },
        paisResidencia: {
            type: DataTypes.STRING,
            allowNull: true
        },
        provincia: {
            type: DataTypes.STRING,
            allowNull: true
        },
        ciudad: {
            type: DataTypes.STRING,
            allowNull: true
        },
        iglesia: {
            type: DataTypes.STRING,
            allowNull: true
        },
        nombrePastor: {
            type: DataTypes.STRING,
            allowNull: true
        },
        telefonoPastor: {
            type: DataTypes.STRING,
            allowNull: true
        },
        esAlergico: {
            type: DataTypes.BOOLEAN,
            allowNull: true
        },
        detalleAlergia: {
            type: DataTypes.STRING,
            allowNull: true
        },
        tieneMedicacion: {
            type: DataTypes.BOOLEAN,
            allowNull: true
        },
        detalleMedicacion: {
            type: DataTypes.STRING,
            allowNull: true
        },
        telefono: {
            type: DataTypes.STRING,
            allowNull: true
        },
        email: {
            type: DataTypes.STRING,
            allowNull: true
        },
        nombreEmergencia:{
            type: DataTypes.STRING,
            allowNull: true
        },
        telefonoEmergencia:{
            type: DataTypes.STRING,
            allowNull: true
        },
        esVoluntario: {
            type: DataTypes.BOOLEAN,
            allowNull: true
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
            allowNull: true
        },
        experimentaPagos: {
            type: DataTypes.STRING,
            allowNull: true
        },
        voluntarioPagos: {
            type: DataTypes.STRING,
            allowNull: true
        },
        cartaPastoral: {
            type: DataTypes.BOOLEAN,
            allowNull: true
        },
        estadoInscripcion: {
            type: DataTypes.STRING,
            allowNull: true
        },
        preinscripto: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        esCeliaco: {
            type: DataTypes.BOOLEAN,
            allowNull: true
        },
        esDiabetico: {
            type: DataTypes.BOOLEAN,
            allowNull: true
        },
        esVegetariano: {
            type: DataTypes.BOOLEAN,
            allowNull: true
        },
        detalleAlimentacion: {
            type: DataTypes.STRING,
            allowNull: true
        },
        participoCimaday:{
            type: DataTypes.BOOLEAN,
            allowNull: true
        },
        participoPrisma:{
            type: DataTypes.BOOLEAN,
            allowNull: true
        },
        participoEurovoluntariado:{
            type: DataTypes.BOOLEAN,
            allowNull: true
        },
        participoCima:{
            type: DataTypes.BOOLEAN,
            allowNull: true
        },
        participoSigue:{
            type: DataTypes.BOOLEAN,
            allowNull: true
        },
        montoPagado: {
            type: DataTypes.DECIMAL,
            allowNull: true
        },
        montoAPagar: {
            type: DataTypes.DECIMAL,
            allowNull: true
        },
        pagoCompletado: {
            type: DataTypes.BOOLEAN,
            allowNull: true
        },
        detalleSalud: {
            type: DataTypes.STRING,
            allowNull: true
        },
        ocupacion: {
            type: DataTypes.STRING,
            allowNull: true
        },
        areaMinisterio: {
            type: DataTypes.STRING,
            allowNull: true
        },
        fechaAlta: {
            type: DataTypes.DATE,
            allowNull: true
        },
        experimenta:{
            type: DataTypes.STRING,
            allowNull: true
        },
        otroExperimenta:{
            type: DataTypes.BOOLEAN,
            allowNull: true
        },
        añoOtroExperimenta:{
            type: DataTypes.DATE,
            allowNull: true
        },
        altaExperimenta:{
            type: DataTypes.DATE,
            allowNull: true
        },
    }, 
    );
}; 