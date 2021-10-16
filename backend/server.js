const app = require("./app");
const dotenv = require("dotenv");
const connectDatabase = require("./config/database");

process.on("uncaughtException", (err) => {
    console.log(`Error : ${err.message}`);
    console.log("Shutting down the server due to Uncaught Exception");

    process.exit();
});

dotenv.config({ path: "backend/config/config.env" });

// Connect to the database
connectDatabase(process.env.DB_URI);

const PORT = process.env.PORT || 8000;
const server = app.listen(PORT, () => {
    console.log(`Server started at http://localhost:${PORT}`);
});

process.on("unhandledRejection", (err) => {
    console.log(`Error : ${err.message}`);
    console.log("shutting down the server due to unhandled Promise rejection");

    server.close(() => {
        process.exit();
    });
});
