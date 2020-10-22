const ProvidersRegister = require('./providersRegister')
const errorHandler = require('../common/errorHandler')

ProvidersRegister.methods(['get','post','put','delete'])
ProvidersRegister.updateOptions({new: true, runValidators: true})
ProvidersRegister.after('post', errorHandler).after('put', errorHandler)

ProvidersRegister.route('count', (req,res,next) => {
    ProvidersRegister.count((error, value) => {
        if(error) {
            res.status(500).json({errors: [error]})
        }else {
            res.json({value})
        }
    })
})

module.exports = ProvidersRegister