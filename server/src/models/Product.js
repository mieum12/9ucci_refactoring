const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductSchema = mongoose.Schema(
    {
        product_no:{
            type: Number,
            unique: true //상품고유번호
        },
        title: {
            type: String,
            //default: "test title"
            required: true
        },
        description: {
            type: String,
            //default:"test description"
            required: true
        },
        category:{
            type: String,
            required: true
            //default:"default"
        },
        price: {
            type: Number,
            required: true
            //default:"10000000"
        },
        company:{
            type: String,
            required: false
        },
        imgUrl:{
            type: String,
            default : "https://www.google.com/url?sa=i&url=http%3A%2F%2Fm.tojayun.cafe24.com%2Fproduct%2F%25EC%2583%2598%25ED%2594%258C%25EC%2583%2581%25ED%2592%2588-5%2F13%2F&psig=AOvVaw2a2lq3yBcNQmikJ5RtleK9&ust=1676002221840000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCPidpvrIh_0CFQAAAAAdAAAAABAE"
            // required : true
        },
      
        create_At: {
            type: Date,
            default: Date.now
        },
    }
);


const Product = mongoose.model("Product", ProductSchema);

module.exports = { Product };
