const ProductsRegister = require('./productsRegister')
const errorHandler = require('../common/errorHandler')

ProductsRegister.methods(['get','post','put','delete'])
ProductsRegister.updateOptions({new: true, runValidators: true})
ProductsRegister.after('post', errorHandler).after('put', errorHandler)

ProductsRegister.route('count', (req,res,next) => {
    ProductsRegister.count((error, value) => {
        if(error) {
            res.status(500).json({errors: [error]})
        }else {
            res.json({value})
        }
    })
})

ProductsRegister.route('summary', (req, res, next) => {
    ProductsRegister.aggregate([{
        $project: {quantify: {$sum: "$quantify"}, value: {$sum: "$value"}}
    }, {
        $group: {_id: null, quantify: {$sum: "$quantify"}, value: {$sum: "$value"}}
    }, {
        $project: {_id: 0, quantify: 1, value: 1}
    }]).exec((error, result) => {
        if(error) {
            res.status(500).json({errors: [error]})
        } else {
            res.json(result[0] || { quantify: 0, value: 0 })
        }
    })
})

module.exports = ProductsRegister