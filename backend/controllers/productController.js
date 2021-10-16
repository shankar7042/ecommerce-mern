const Product = require("../models/product");
const ErrorHandler = require("../utils/errorHandler");
// get all products
exports.getAllProduct = async (req, res) => {
    try {
        const products = await Product.find();

        res.status(200).json({ success: true, products });
    } catch (error) {
        console.log(error);
    }
};

exports.createProduct = async (req, res, next) => {
    try {
        const product = await Product.create(req.body);

        res.status(201).json({
            success: true,
            product,
        });
    } catch (error) {
        console.log(error);
    }
};

exports.updateProduct = async (req, res, next) => {
    try {
        let product = await Product.findById(req.params.id);
        if (!product) {
            return next(new ErrorHandler("Product not found", 404));
        }

        product = await Product.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
            useFindAndModify: false,
        });

        return res.status(200).json({ success: true, product });
    } catch (error) {
        console.log(error);
    }
};

exports.deleteProduct = async (req, res, next) => {
    try {
        const product = await Product.findById(req.params.id);

        if (!product) {
            return next(new ErrorHandler("Product not found", 404));
        }

        await product.remove();

        return res
            .status(200)
            .json({ success: true, message: "Product deleted successfully" });
    } catch (error) {
        console.log(error);
    }
};

exports.getProductDetails = async (req, res, next) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) {
            return next(new ErrorHandler("Product not found", 404));
        }

        return res.status(200).json({ success: true, product });
    } catch (error) {
        console.log(error);
    }
};
