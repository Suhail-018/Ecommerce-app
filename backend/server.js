// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const dotenv = require('dotenv');

// dotenv.config();

// const app = express();

// app.use(cors());
// app.use(cors({
//     origin: 'http://localhost:5174' // or whatever port your frontend is running on
//   }));
// app.use(express.json());

// mongoose.connect(process.env.MONGODB_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
// .then(() => console.log('MongoDB connected'))
// .catch(err => console.log(err));

// // Routes will be added here
// app.use('/api/auth', require('./routes/auth'));
// app.use('/api/products', require('./routes/products'));
// app.use('/api/cart', require('./routes/cart'));
// app.use('/api/orders', require('./routes/orders'));

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// new from video

import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './config/mongodb.js';
import connectCloudinary from './config/cloudinary.js';
import userRouter from './routes/userRoute.js';
import productRouter from './routes/productRoute.js';
//  a[[ cp\onfig]]
const app = express();
const PORT = process.env.PORT || 4000;
connectDB();
connectCloudinary()
// middlewares
app.use(express.json());
app.use(cors());

// api endpoint

app.get('/', (req, res) => {
  res.send("API WORKING")
}
)
app.use('/api/user', userRouter)
app.use('/api/product', productRouter)
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

