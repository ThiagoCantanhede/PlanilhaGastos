const mongoose = require('mongoose')
//const validator = require('validator')
const lSchemaUsuarios = {
    email: {
        type: String,
        required: true,
        trim: true
    },
    senha: {
        type: String,
        required: true,
        trim: true
    },
} 
const usuario = mongoose.model('usuarios', lSchemaUsuarios, 'usuarios')

module.exports = usuario