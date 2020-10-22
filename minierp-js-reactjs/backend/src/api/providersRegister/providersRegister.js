const restful = require('node-restful')
const mongoose = restful.mongoose


const providersSchema = new mongoose.Schema({
    name: { type: String, required: [true, 'Informe o nome do produto!']},
    city: { type: String, min:0, required: [true, 'Informe a cidade!']},
    district: { type: String, min:0, max: 2, required: [true, 'Informe o estado!']},
    contact: {type: String, min:0, max: 99999999999, required: [true, 'Informe o telefone!']},
    econtact: {type: String, min:0, required: [true, 'Informe o e-mail!']}
})


module.exports = restful.model('providersRegister', providersSchema)
