const Joi = require("joi");
const mongoose = require("mongoose");

var productSchema = mongoose.Schema({
    name: {
        type: String,
        uppercase: true,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    soldQty: {
        type: Number,
        required: true,
    },
    pimg: {
        type: String,
    },
});
productSchema.statics.validateProduct = (data) => {
    const joischema = Joi.object({
        name: Joi.string().min(3).max(10),
        price: Joi.number().min(0),
        soldQty: Joi.number().min(0),
    });
    return joischema.validate(data, { abortEarly: false });
};

var Product = mongoose.model("Product", productSchema);

module.exports = Product;
// module.exports.validateProduct = validateProduct;