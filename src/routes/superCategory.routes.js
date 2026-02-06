const express = require("express");
const {
  createSuperCategory,
  getSuperCategories,
} = require("../controllers/superCategory.controller");

const router = express.Router();

router.post("/", createSuperCategory);
router.get("/", getSuperCategories);

module.exports = router;
