import express from "express";

const app = express();
const port = 3000;

app.listen(port, (req, res)=>{
    console.log("the server is up and running on the " + port);
});