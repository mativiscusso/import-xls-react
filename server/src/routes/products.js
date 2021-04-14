const express = require("express");
const router = express.Router();

const productsController = require("../controllers/productsController");

router.get("/", productsController.listAll);
router.post("/bulk-create", productsController.bulkImport);
router.post("/bulk-update", productsController.bulkUpdate);

module.exports = router;
