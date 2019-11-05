const mongoose = require('mongoose')
//const validator = require('validator')
const lSchemaContasAPagar = {
    nome: {
        type: String,
        required: true,
        trim: true
    },
     valor: {
         type: Number,
         required: true,
     },
     inicio: {
         type: Date,
         required: true,
     },
     quantidadeParcelas: {
         type: Number,
         required: true
     },
     usuario: {
        type: String,
        required: true,
        trim: true
     }
} 
const Conta = mongoose.model('contas_a_pagar', lSchemaContasAPagar, 'contas_a_pagar')

module.exports = Conta