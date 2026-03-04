const Shipment = require("../Models/shipments");
const express = require("express");
const shipmentRouter = express.Router();

shipmentRouter.post('/shipment',async(req,res)=>{
    try {
        const {id,origin,destination,date,status,driverName,orderCount} = req.body;
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