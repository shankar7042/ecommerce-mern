const app = require("./app");
const dotenv = require("dotenv");
const connectDatabase = require("./config/database");

dotenv.config({ path: "backend/config/config.env" });

// Connect to the database
connectDatabase(process.env.DB_URI);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server started at http://localhost:${PORT}`);
});
