import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
// import Product from './models/product.model.js';
// import mongoose from 'mongoose';
import productRoutes from './routes/product.route.js'

dotenv.config();
connectDB(); // Connect to MongoDB before starting the server

const app = express();
const PORT = process.env.PORT;

app.use(express.json()); // allows us to accept JSOn data int eh req.body

app.use("/api/products", productRoutes); // Middleware for parsing JSON



app.listen(PORT, () => {
    console.log("Server started at http://localhost:5002");
});
