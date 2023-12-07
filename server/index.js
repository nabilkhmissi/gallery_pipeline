const express = require("express");
const cors = require("cors")
const app = express();
const config = require("./config/config")
const connect = require("./db/connection");
const { PostModel } = require("./models");
require("./db/init_db");

app.use(cors());

connect();
app.get("/posts", async (req, res) => {
    const data = await PostModel.find({});
    return res.status(200).send({ data: data });
})

const PORT = config.PORT;
app.listen(PORT, () => console.log("APP RUNNING ON PORT " + PORT));