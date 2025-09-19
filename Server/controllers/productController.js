import { v2 as cloudinary } from "cloudinary"
import productModel from "../models/ProductModel.js"

const addProduct = async (req, res) => {
    try {
        const { name, description, price, category,
            subCategory, sizes, bestseller, date } = req.body;

        const image1 = req.files.image1?.[0];
        const image2 = req.files.image2?.[0];
        const image3 = req.files.image3?.[0];
        const image4 = req.files.image4?.[0];

        const images = [image1, image2, image3, image4].filter((item) => item !== undefined);

        const imagesUrl = await Promise.all(
            images.map(async (item) => {
                let result = await cloudinary.uploader.upload(item.path, { resource_type: 'image' });
                return result.secure_url;
            })
        );

        let parsedSizes;
        try {
            parsedSizes = JSON.parse(sizes);
            if (!Array.isArray(parsedSizes)) parsedSizes = [];
        } catch {
            parsedSizes = [];
        }

        if (!parsedSizes.length) {
            console.warn("Sizes not provided or invalid, defaulting to empty array.");
        }

        const productDate = {
            name,
            description,
            price: Number(price),
            sizes: parsedSizes,
            bestseller: bestseller === "true" ? true : false,
            category,
            subCategory,
            image: imagesUrl,
            date: Date.now(),
        }

        console.log(productDate);

        const product = new productModel(productDate);

        await product.save();

        return res.status(200).json({
            success: true,
            message: "Product added",
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
}

const listProducts = async (req, res) => {
    try {
        const products = await productModel.find({});
        res.status(200).json({ message: "All products are Fetched", success: true, products });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Failed to Fetch Products", success: false });
    }
}

const removeProduct = async (req, res) => {
    try {
        const id = req.body.id;
        await productModel.findByIdAndDelete(id);
        res.status(200).json({ message: "Product Deleted", success: true });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Failed to Delete Product", success: false });
    }
}

const SingleProductinfo = async (req, res) => {
    try {
        const id = req.body.id;
        const product = await productModel.findById(id);
        if (!product) {
            return res.status(404).json({ success: false, message: "Product not found" });
        }

        res.status(200).json({ message: "Product Fetched", product });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Failed to Fetch Product", success: false });
    }
}

export { SingleProductinfo, removeProduct, listProducts, addProduct }