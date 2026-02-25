const mongoose = require("mongoose");
// require('dotenv').config;
const connected = ()=>{ mongoose.connect(process.env.DB_URI)
.then(()=> console.log("MongoDB is connected"))
.catch((error)=>console.log(error));
}
module.exports=connected;