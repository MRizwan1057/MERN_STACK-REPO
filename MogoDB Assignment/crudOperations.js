const Product = require("./products.js");

const createProduct = async(name, price) => {
    let myProduct = new Product({
        name: name,
        price: price,
    });

    await myProduct.save();
    return myProduct;
}


const updateProduct = async(_id, name, price) => {
    let myProduct = await Team.findById(_id);
    myProduct.name = name;
    myProduct.price = price;
    await myProduct.save();
    return myProduct;
}


const getAllProducts = async() => {
    let products = await Product.find();
    return products;
}

const removeProduct = async(_id) => {
    let products = await Product.findByIdAndDelete(_id);
    return products;
}


module.exports = {
    createProduct,
    getAllProducts,
    updateProduct,
    updateProduct
};