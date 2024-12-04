import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    image:{
        type: String,
        required: true
    },

}, 
{ timestamps:true // shows created at and updated at time
});

const Product = mongoose.model('Product', productSchema);
export default Product;