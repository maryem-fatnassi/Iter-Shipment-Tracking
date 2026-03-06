require('dotenv').config();
console.log("PORT",process.env.PORT)
const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());

const connectDB= require("../Server/Config/db");
connectDB();
// login sign Up
app.use("/api/users",require("./Routes/signUp"));
app.use("/api/users",require("./Routes/login"));
// Shipments managements
app.use("/add",require("./Routes/shipments"));
app.use("/get",require("./Routes/getShipments"));
app.use("/edit",require("./Routes/editShipments"));
app.use("/delete",require("./Routes/deleteShipments"));

app.listen(process.env.PORT,"0.0.0.0",()=>console.log("Server is running"));

