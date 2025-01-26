import userModel from "../models/User.js";
import validator from "validator"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

const createToken =  (id) => {
return jwt.sign({id}, process.env.JWT_SECRET) 
}

// Route for user login
const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body; // Fixed destructuring syntax
    
        const user = await userModel.findOne({ email });
    
        if (!user) {
          return res.json({ success: false, message: "User doesn't exist" });
        }
    
        const isMatch = await bcrypt.compare(password, user.password);
    
        if (isMatch) {
          const token = createToken(user._id);
          return res.json({ success: true, token });
        } else {
          return res.json({ success: false, message: "Invalid password" });
        }
    
      } catch (error) {
        console.log( error); // Logs error for debugging
        res.status(500).json({ success: false, message: error.message });
      }

};

// Route for user register
const registerUser = async (req, res) => {
     try {
        const { name, email, password } = req.body;
        // console.log({
        //   name,
        //   email,
        //   password,
        // });
        let exists = await userModel.findOne({ email });
        if (exists) {
          return res.status(400).json({ msg: 'User already exists' });
        }
        
        if (!validator.isEmail(email)){
            return res.status(400).json({ msg: 'Please enter a valid email' });

        }
        if (password.length < 8){
            return res.status(400).json({ msg: 'Please enter a strong password' });

        }
          const salt = await bcrypt.genSalt(10);
        const hashedpassword = await bcrypt.hash(password, salt);
        const newUser = new userModel({ name, email, password:hashedpassword });
            const user = await newUser.save();
            const token = createToken(user._id)
            res.json({success:true, token})


        
    
    }
        catch(error){

            console.log(error);
            res.json({success:false, message:error.message})
        }

};

// Route for admin login
const adminLogin = async (req, res) => {
    try {
        const { email, password } = req.body;
        console.log(req);
        
      
        if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
          const token = jwt.sign(email + password, process.env.JWT_SECRET);
      
          res.json({ success: true, token });
        } else {
          res.json({ success: false, message: "Invalid credentials" });
        }
      } catch (error) {
        console.log(error);
      
        res.json({ success: false, message: error.message });
      }
      


};

export { loginUser, registerUser, adminLogin };
