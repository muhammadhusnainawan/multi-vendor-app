const ErrorHandler = require("../utils/ErrorHandler");
module.exports = (err,req,res,next)=>{
    err.statusCode = err.statusCode || 500;
    err.message = err.message || "Internal Server error"

    // wrong mongodb id error
    if (err.name === "CasteError") {
        
    }
}