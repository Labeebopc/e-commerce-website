const data = require('../data/data.js')

const getAllProduct = async (req, res) => {
   await res.send(data)
}


module.exports={getAllProduct}