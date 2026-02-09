const express = require("express");
const { requireAuth, requireAdmin } = require("../middlewares/auth.middleware");

const {
  createOrder,
  createPendingOrder,
  createCODOrder,
  fetchAllOrders,
  fetchOrderDetails,
  fetchUserAllOrders,
  orderCompleted,
  cancelOrder,
} = require("../controllers/order.controller");

const router = express.Router();

// CUSTOMER
router.post("/", requireAuth, createOrder);
router.post("/create-pending", requireAuth, createPendingOrder);
router.post("/create-cod", requireAuth, createCODOrder);

// ADMIN — MUST COME BEFORE :userId
router.get("/", requireAuth, requireAdmin, fetchAllOrders);
router.patch("/:orderId", requireAuth, requireAdmin, orderCompleted);

// CUSTOMER
router.patch("/cancel/:orderId", requireAuth, cancelOrder);
router.get("/order-details/:orderId", requireAuth, fetchOrderDetails);

// ⚠️ ALWAYS KEEP DYNAMIC ROUTES LAST
router.get("/:userId", requireAuth, fetchUserAllOrders);

// BOTH (logged-in)

module.exports = router;
