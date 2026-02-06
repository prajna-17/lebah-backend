const express = require("express");
const {
  createSubCategory,
  getSubCategories,
} = require("../controllers/subCategory.controller");

const router = express.Router();

router.post("/", createSubCategory);
router.get("/", getSubCategories);

module.exports = router;
