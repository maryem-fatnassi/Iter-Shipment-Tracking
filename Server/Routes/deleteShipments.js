const Shipment = require("../Models/shipments");
const express = require("express");
const deleteShipmentRouter = express.Router();

deleteShipmentRouter.delete("/shipment/:id", async (req,res)=>{
    try {
        const shipmentId = req.params.id;
        const shipment = await Shipment.findByIdAndDelete(shipmentId);
        if(!shipment){
            return res.status(404).json({message : "Shipment not found 🤔"});
        }
        res.json({message : "Shipment deleted successfully ✅"}) 

    } catch (error) {
        res.status(500).json({message : error.message})
    }
})

module.exports = deleteShipmentRouter;