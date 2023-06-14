
const { Product } = require("../../models");


const addProduct = async (req, res, next) => {
    // console.log("addOrder-->req.body:".bgYellow.red); //?
    // console.log(req.body);
    const product = await Product.create(req.body);

    //! С добавлением _id Пользователя, который сделал заказ
    // const order = await Product.create({ ...req.body, owner: userId }); //?

    res.status(201).json({ product });
};

module.exports = addProduct;