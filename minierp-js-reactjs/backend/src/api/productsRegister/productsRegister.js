const { Schema } = require('mongoose')
const restful = require('node-restful')
const mongoose = restful.mongoose


 /* TODO: quantity e price parecem que são reservados pelo mongo! */

const productsSchema = new mongoose.Schema({
    name: { type: String, required: [true, 'Informe o nome do produto!']},
    quantify: {type: Number, min:0, required: [true, 'Informe a quantidade de produtos!']},
    value: {type: Number, min:0, required: [true, 'Informe o preço unitário!']},
    providerSelected: {type: Schema.Types.String,min: 0, required: [true, 'Marque um fornecedor!']}
})


module.exports = restful.model('productsRegister', productsSchema)


