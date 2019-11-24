const mongoose = require("mongoose");
const secret = require('./secret');


const uri = secret.MONGO_URI;

const client = new mongoose.connect(uri, { useUnifiedTopology: true, useNewUrlParser:true })
.then(() => console.log("🚀 MongoDB connected"))
.catch(err => console.log(err))

module.exports = client;
