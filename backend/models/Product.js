const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  image: [{ type: String, required: true }],
  category: { type: String, required: true },
  subCategory: { type: String, required: true },
  sizes: [{ type: String, required: true }],
  bestseller: { type: Boolean, default: false },
}, { timestamps: true });

module.exports = mongoose.model('Product', productSchema);