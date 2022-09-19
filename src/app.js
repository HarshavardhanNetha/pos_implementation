const express = require("express")
const bodyParser = require('body-parser');
const mongoose = require("mongoose")
const app = express()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const userRoutes = require("./apis/users/userRoutes")

const dburl = "mongodb://localhost:27017/pos"
mongoose.connect(dburl)
    .then((res) => {
        app.listen(3000)
        console.log("Conneceted to db");
    })
    .catch((err) => console.log("Error connecting to db"))
// app.listen(3000)

app.use("/user", userRoutes)