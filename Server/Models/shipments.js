const mongoose = require("mongoose");

const shipmentSchema = new mongoose.Schema({
    id : Number,
    origin : String,
    destination : String,
    date : Number,
    status : 'Pending',
    driverName : String,
    orderCount : Number
},{timestamps:true});

const Shipment = mongoose.model("Shipment", shipmentSchema);

module.exports=Shipment;