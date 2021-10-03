const app = require("./app");
const dotenv = require("dotenv");

dotenv.config({ path: "backend/config/config.env" });

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server started at http://localhost:${PORT}`);
});
