const Shipment = require("../Models/shipments");
const express = require("express");
const shipmentDataRouter = express.Router();

shipmentDataRouter.get('/shipments',async(req,res)=>{
    try {
        const shipments = await Shipment.find();
        const ress = res.json(shipments)
        console.log(ress)
    } catch (error) {
        console.log(error);
    }
})

module.exports=shipmentDataRouter;