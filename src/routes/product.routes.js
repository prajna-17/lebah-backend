const express = require("express");
// const { requireAuth, requireAdmin } = require("../middlewares/auth.middleware");

const {
  createProduct,
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct,
} = require("../controllers/product.controller");

const router = express.Router();

router.post("/", createProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

// Public (customer allowed)
router.get("/", getProducts);
router.get("/:id", getProductById);

module.exports = router;
