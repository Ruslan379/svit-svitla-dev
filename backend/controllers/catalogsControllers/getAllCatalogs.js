const { Catalog } = require("../../models");

const getAllCatalogs = async (req, res) => {
    const catalogs = await Catalog.find({})
    res.status(200).json({ catalogs })
};

module.exports = getAllCatalogs
