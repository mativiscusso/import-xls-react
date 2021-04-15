const express = require("express");
const router = express.Router();

const productsController = require("../controllers/productsController");
const protectedRoute = require("../middlewares/authRoutes");

router.post("/bulk-create", protectedRoute, productsController.bulkImport);
router.post("/bulk-update", protectedRoute, productsController.bulkUpdate);

module.exports = router;
