const express = require("express");

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
const { requireAuth } = require("../middleware/requireAuth");

const router = express.Router();

// CUSTOMER
router.post("/", createOrder);
router.post("/create-pending", requireAuth, createPendingOrder);
router.post("/create-cod", requireAuth, createCODOrder);
router.patch("/cancel/:orderId", requireAuth, cancelOrder);

router.get("/order-details/:orderId", fetchOrderDetails);
router.get("/:userId", fetchUserAllOrders);

// ADMIN (TEMP OPEN)
router.get("/", fetchAllOrders);
router.patch("/:orderId", orderCompleted);

module.exports = router;
