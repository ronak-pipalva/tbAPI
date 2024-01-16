const express = require("express");
const router = express.Router();
const {
  getAllProducts,
  getAllTestingProducts,
} = require("../controllers/products");

router.route("/").get(getAllProducts);
router.route("/testing").get(getAllTestingProducts);

module.exports = router;
