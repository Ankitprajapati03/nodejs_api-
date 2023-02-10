const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
//import routes
const productRoutes = require("./routes/product");

mongoose.connect(
  process.env.DB_CONNECT,
  { useUnifiedTopology: true, useNewUrlParser: true },
  () => console.log("connected to db")
);

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());
//route middleware
app.use("/api/product", productRoutes);
app.listen(process.env.PORT, () => {
  console.log(`server up and running on port ${process.env.PORT}!`);
});
