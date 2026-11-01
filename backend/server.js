console.log("Current file:", __filename);


const express = require("express");
const cors = require("cors");
const uploadRoutes = require("./routes/uploadRoutes");
const scanRoutes = require("./routes/scanRoutes");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/upload", uploadRoutes);
app.use("/api/scans", scanRoutes);

app.get("/", (req, res) => {
    res.send("VerifyRx Backend Running 🚀");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
});