const express = require("express");
const {
  createSubCategory,
  getSubCategories,
  updateSubCategory,
  deleteSubCategory,
} = require("../controllers/subCategory.controller");

const router = express.Router();

router.post("/", createSubCategory);
router.get("/", getSubCategories);
router.put("/:id", updateSubCategory);
router.delete("/:id", deleteSubCategory);

module.exports = router;
