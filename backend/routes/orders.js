const express = require('express');
const auth = require('../middleware/auth');
const Order = require('../models/Order');
const Cart = require('../models/Cart');

const router = express.Router();

router.post('/', auth, async (req, res) => {
  try {
    const { shippingAddress, totalAmount } = req.body;
    const cart = await Cart.findOne({ user: req.user.id });
    if (!cart) {
      return res.status(404).json({ msg: 'Cart not found' });
    }
    const order = new Order({
      user: req.user.id,
      items: cart.items,
      totalAmount,
      shippingAddress,
    });
    await order.save();
    // Clear the cart after placing the order
    cart.items = [];
    await cart.save();
    res.json(order);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

router.get('/', auth, async (req, res) => {
  try {
    const orders = await Order.find({ user: req.user.id }).populate('items.product');
    res.json(orders);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

router.get('/:id', auth, async (req, res) => {
  try {
    const order = await Order.findOne({ _id: req.params.id, user: req.user.id }).populate('items.product');
    if (!order) {
      return res.status(404).json({ msg: 'Order not found' });
    }
    res.json(order);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;