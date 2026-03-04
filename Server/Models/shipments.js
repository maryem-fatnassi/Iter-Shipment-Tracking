const mongoose = require("mongoose");

const shipmentSchema = new mongoose.Schema({
    id :{
        type :String,
        required:true,
        unique :true
    },
    origin : String,
    destination : String,
    date : Date,
    status : String,
    driverName : String,
    orderCount : Number
},{timestamps:true});

const Shipment = mongoose.model("Shipment", shipmentSchema);

module.exports=Shipment;