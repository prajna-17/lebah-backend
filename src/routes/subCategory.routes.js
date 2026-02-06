const express = require("express");
const {
  createSubCategory,
  getSubCategories,
  updateSubCategory,
} = require("../controllers/subCategory.controller");

const router = express.Router();

router.post("/", createSubCategory);
router.get("/", getSubCategories);
router.put("/:id", updateSubCategory);

module.exports = router;
