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
  fetchUnreadOrders,
  markOrderAsNotified,
} = require("../controllers/order.controller");
const { requireAuth } = require("../middlewares/auth.middleware");

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
router.get("/unread", fetchUnreadOrders);
router.patch("/mark-notified/:orderId", markOrderAsNotified);
module.exports = router;
