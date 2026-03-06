const Shipment = require("../Models/shipments");
const express = require("express");
const shipmentRouter = express.Router();

shipmentRouter.post('/shipment',async(req,res)=>{
    try {
        const {id,origin,destination,date,status,driverName,orderCount} = req.body;
        const existingShipment = await Shipment.findOne({ id });
        if (existingShipment) {
         return res.status(400).json({ message: "Shipment ID already exists" });
        }
        
        const shipment = new Shipment({
            id,
            origin,
            destination,
            date,
            status,
            driverName,
            orderCount
        })
        await shipment.save();
        res.status(201).json({ message: "Shipment created successfully" });
    } catch (error) {
        console.log(error);
    }
})

module.exports=shipmentRouter;