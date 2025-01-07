import express from "express";
import { deleteProduct, getProducts } from "../controllers/product.controller.js";
import { createProduct } from "../controllers/product.controller.js";
import { updateProduct } from "../controllers/product.controller.js";


const router = express.Router();

export default router;
router.get("/",getProducts);
router.post("/",createProduct);
router.delete("/:id",deleteProduct);
router.put("/:id", updateProduct);
