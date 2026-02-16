const calculateComboDiscount = (items, productDetails) => {
  let totalQty = 0;
  let subTotal = 0;

  items.forEach((item) => {
    const product = productDetails.find(
      (p) => p._id.toString() === item.product.toString(),
    );

    if (!product) return;

    totalQty += item.quantity;
    subTotal += product.price * item.quantity;
  });

  let discountPercentage = 0;

  if (totalQty === 2) discountPercentage = 5;
  else if (totalQty === 3) discountPercentage = 10;
  else if (totalQty >= 4) discountPercentage = 15;

  const discountAmount = (subTotal * discountPercentage) / 100;
  const finalTotal = Math.round(subTotal - discountAmount);

  return {
    subTotal,
    discountPercentage,
    discountAmount,
    finalTotal,
  };
};

module.exports = calculateComboDiscount;
