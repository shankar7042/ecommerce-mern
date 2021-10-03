const Product = require("../models/product");

exports.getAllProduct = (req, res) => {
    res.status(200).json({ message: "Success" });
};
