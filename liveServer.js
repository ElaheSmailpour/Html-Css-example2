const express = require("express");
const path = require("path");

const app = express();

app.use(express.static(path.join("")))

app.listen(5000,()=>{
    console.log("app listen to port 5000")
})
