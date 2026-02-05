const express = require("express");
// const { requireAuth, requireAdmin } = require("../middlewares/auth.middleware");

const {
  createCategory,
  getCategories,
  updateCategory,
  deleteCategory,
} = require("../controllers/category.controller");

const router = express.Router();

router.post("/", createCategory);
router.put("/:id", updateCategory);
router.delete("/:id", deleteCategory);

router.get("/", getCategories); // public

module.exports = router;
