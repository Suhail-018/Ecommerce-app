import multer from "multer";

const storage = multer.diskStorage({

    filename: function(req, file, callback){
        callback(null, file.originalname)

    }
})
// const upload = multer({storage});
// export default upload;
// import multer from "multer";

// // Configure storage for uploaded files
// const storage = multer.diskStorage({
//     destination: function (req, file, callback) {
//         // Specify the directory where files will be stored
//         callback(null, "uploads/");
//     },
//     filename: function (req, file, callback) {
//         // Use the original file name for the uploaded file
//         callback(null, file.originalname); // Fixed typo
//     }
// });

// Define file upload middleware
const upload = multer({ storage }).fields([
    { name: "image1", maxCount: 1 },
    { name: "image2", maxCount: 1 },
    { name: "image3", maxCount: 1 },
    { name: "image4", maxCount: 1 }
]);

// Export the middleware for use in routes
export default upload;
