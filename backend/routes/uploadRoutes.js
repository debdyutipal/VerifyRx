console.log("✅ uploadRoutes.js loaded");

const express = require("express");
const router = express.Router();

const upload = require("../middleware/uploadMiddleware");
console.log(upload);
const { uploadPrescription } = require("../controllers/uploadController");

router.get("/", (req, res) => {
    res.json({
        success: true,
        message: "Upload API Working ✅",
    });
});

router.post("/", upload.single("prescription"), uploadPrescription);

module.exports = router;