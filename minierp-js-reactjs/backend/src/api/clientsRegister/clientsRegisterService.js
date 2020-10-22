const ClientsRegister = require('./clientsRegister')
const errorHandler = require('../common/errorHandler')

ClientsRegister.methods(['get','post','put','delete'])
ClientsRegister.updateOptions({new: true, runValidators: true})
ClientsRegister.after('post', errorHandler).after('put', errorHandler)

ClientsRegister.route('count', (req,res,next) => {
    ClientsRegister.count((error, value) => {
        if(error) {
            res.status(500).json({errors: [error]})
        }else {
            res.json({value})
        }
    })
})
module.exports = ClientsRegister