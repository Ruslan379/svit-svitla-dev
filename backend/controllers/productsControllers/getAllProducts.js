const { Product } = require("../../models");

const getAllProducts = async (req, res) => {
    const products = await Product.find({})
    res.status(200).json({ products })
};

module.exports = getAllProducts
