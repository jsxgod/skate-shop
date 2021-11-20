require("dotenv").config();
const express = require("express");
const connectToDatabase = require("./config/db");

connectToDatabase();

const app = express();

app.use(express.json())

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server running on port ${PORT}`))