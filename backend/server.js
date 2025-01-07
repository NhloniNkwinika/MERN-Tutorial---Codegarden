import express from 'express';
import dotenv from "dotenv";
//import Product from './modules/products.model.js';
import { connectDB } from './config/db.js';
//import mongoose from 'mongoose';
import productRoutes from "./routes/product.route.js";
dotenv.config();

const app = express();
app.use(express.json()); // allows to use json in the body

app.use("/api/products", productRoutes)

app.listen(5000, () => {
    connectDB();
    console.log("Server started at http://localhost:5000 ");
});


//jFxxwimn5FeB6xcx
//npm install mongodb