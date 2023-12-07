const mongoose = require("mongoose");
const config = require("../config/config")

module.exports = connect_db = () => {
    mongoose.connect(config.DB_URL)
        .then(() => console.log("DB CONNECTED..."))
        .catch((err) => console.log(err));
}