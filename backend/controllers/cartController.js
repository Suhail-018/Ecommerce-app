import userModel from "../models/User.js";

const addToCart = async (req, res, next) => {

    try {
        const { userId, itemId, size } = req.body;
    
        // Fetch user data
        const userData = await userModel.findById(userId);
        let cartData = userData.cartData;
    
        // Check if the item already exists in the cart
        if (cartData[itemId]) {
            if (cartData[itemId][size]) {
                // Increment the quantity for the specific size
                cartData[itemId][size] += 1;
            } else {
                // Add the size if it doesn't exist yet
                cartData[itemId][size] = 1;
            }
        } else {
            // Add the item with the specified size to the cart
            cartData[itemId] = {};
            cartData[itemId][size] = 1;
        }
    
        // Update the cart data in the database
        await userModel.findByIdAndUpdate(userId, { cartData });
    
        res.json({ success: true, message: "Added To Cart" });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
    

} 

const updateCart = async (req, res) => {

    try {
        const { userId, itemId, size, quantity } = req.body;
      
        const userData = await userModel.findById(userId);
        let cartData = userData.cartData;
      
        // Update the cart item with the new quantity
        cartData[itemId][size] = quantity;
      
        // Save the updated cart data
        await userModel.findByIdAndUpdate(userId, { cartData });
      
        res.json({ success: true, message: "Cart Updated" });
      } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
      }
      
}
const getUserCart = async (req, res) => {
    try {
      const { userId } = req.body;
  
      const userData = await userModel.findById(userId);
      let cartData = userData.cartData;
  
      res.json({ success: true, cartData });
    } catch (error) {
      console.log(error);
      res.json({ success: false, message: error.message });
    }
  };
  
  export { addToCart, updateCart, getUserCart };
  
