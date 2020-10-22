const {Schema} = require('mongoose')
const restful = require('node-restful')
const mongoose = restful.mongoose

const clientsSchema = new mongoose.Schema({
    name: {type: String, required: [true, 'Informe o nome do cliente!']},
    address: {type: String, required: [true,'Informe o endereço do cliente!']},
    mail: {type: String, required: [true, 'Informe o e-mail do cliente!']},
    contact: {type: Number, required: [true, 'Informe o contato do cliente!']}
})
module.exports = restful.model('clientsRegister', clientsSchema)