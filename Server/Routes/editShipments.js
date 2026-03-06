const Shipment = require("../Models/shipments");
const express = require("express");
const editShipmentRouter = express.Router();

editShipmentRouter.put("/shipments/:id", async (req,res)=>{
    try {
        const shipmentId = req.params.id;
        const updatedData = req.body;
        const shipment = await Shipment.findByIdAndUpdate(
            shipmentId,
            updatedData,
            {new : true}
        )
        if(!shipment){
            return res.status(404).json({message : "Shipment not found 🤔"});
        }
        res.json({message : "Shipment updated successfully ✅"})
    } catch (error) {
        res.status(500).json({message : error.message})
    }
})
module.exports=editShipmentRouter;