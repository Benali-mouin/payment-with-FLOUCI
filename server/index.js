const express = require("express");
const cors = require("cors");
var path= require('path')
const cookieParser = require("cookie-parser");
var logger= require('morgan')

const PORT = 5000;


const paymentRouter = require("./routes/payment");

require("dotenv").config();

const app = express();
app.use(cors('cors'))
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(cookieParser())
app.use(express.static(path.join(__dirname,'public')))


app.use("/api", paymentRouter)

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

  module.exports= app;