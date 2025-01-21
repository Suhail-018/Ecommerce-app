import { v2 as cloudinary } from "cloudinary";

// Define a function to configure Cloudinary
const connectCloudinary = async () => {
  // Configure Cloudinary with the credentials from environment variables
  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_SECRET_KEY,
  });
};

// Export the function for use in other parts of the application
export default connectCloudinary;
