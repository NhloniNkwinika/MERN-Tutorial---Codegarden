import express from 'express';
import dotenv from "dotenv";

import { connectDB } from './config/db.js';

dotenv.config();

const app = express();
app.use(express.json()); // allows to use json in the body

app.post("/api/products", (req,res) => {
   const product = req.body; //user will send this data

   if (!product.name || !p.approduct.price || !product.image){
    return res.status(400).json({success:false, message: "Please provide all the fields"});
   }
   const newProduct = new Product(product);

   try{
    newProduct.save();
    res.status(201).json({success:true, data:newProduct});
   }
    catch(error){
    console.error("error in create product:", error.message);
    res.status(500).json({sucess:false, message:"server error"});
    }
   

});

//console.log(process.env.MONGO_URI)


app.listen(5000, () => {
    connectDB();
    console.log("Server started at http://localhost:5000 ");
});

//jFxxwimn5FeB6xcx
//npm install mongodb