const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const app = express();
const connectToDb = require("./db/db")
const userRoutes = require("./routes/user.routes");
const captainRoutes = require("./routes/captain.routes");
const cookieParser = require("cookie-parser");

dotenv.config();

connectToDb();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());

app.get('/',(req,res)=>{
    res.send("hello");
});

app.use('/users',userRoutes);
app.use('/captains',captainRoutes);

module.exports = app;