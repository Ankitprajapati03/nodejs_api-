const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config();

//connect to db    mongodb://localhost:27017

mongoose.connect(
    process.env.DB_CONNECT,
     {useUnifiedTopology: true, useNewUrlParser: true },
    () => console.log("connected to db")
    );

    //import routes
    const productRoutes = require("./routes/product");

    //route middleware
    app.use("/api/product",productRoutes);

app.listen(4000,()=>{
    console.log("server up and running on port 4000!")
});