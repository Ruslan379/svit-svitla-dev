const { Schema, model } = require("mongoose");


const catalogSchema = Schema({
    name: {
        type: String,
        required: [true, 'Set shop type'],
    },
    // pizzas: {
    //     type: Array,
    //     required: [true, 'Set pizzas type'],
    // },
}, { versionKey: false, timestamps: true });


const Catalog = model("catalog", catalogSchema);


module.exports = {
    Catalog,
};

