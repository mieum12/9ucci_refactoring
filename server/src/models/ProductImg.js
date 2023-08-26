const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductImgSchema = mongoose.Schema(
    {
    product_id:{
        type: String,
        required: true,

    },

    }
);


const ProductImg = mongoose.model("ProductImg", ProductImgSchema);

module.exports = { ProductImg };
