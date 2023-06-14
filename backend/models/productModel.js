const { Schema, model } = require("mongoose");


const productSchema = Schema({
    productName: {
        type: String,
        required: [true, 'Product Name is required'],
        // default: "User",
    },
    productCode: {
        type: String,
        required: [true, 'Product Code is required'],
        // unique: true,
    },
    price: {
        type: String,
        required: [true, 'Price is required'],
        // unique: true,
    },
    manufacturerCountry: {
        type: String,
        required: [true, 'ManufacturerCountry is required'],
    },
    // order: {
    //     type: Array,
    //     required: [true, 'Array is required'],
    // },
    // total: {
    //     type: Number,
    //     default: 0,
    // },
}, { versionKey: false, timestamps: true });

const Product = model("product", productSchema); //! DB_HOST

module.exports = {
    Product,
};

