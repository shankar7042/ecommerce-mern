const express = require("express");
const morgan = require("morgan");
const errorMiddleware = require("./middleware/error");
const app = express();

app.use(express.json());
app.use(morgan("short"));

const productsRoute = require("./routes/productRoute");

app.use("/api/v1", productsRoute);

app.use(errorMiddleware);

module.exports = app;
