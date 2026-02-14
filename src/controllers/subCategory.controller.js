const SubCategory = require("../models/subCategory.model");
const Product = require("../models/product.model");

const createSubCategory = async (req, res) => {
  try {
    const { name, category } = req.body;

    // Check if same name already exists in the same category
    const existing = await SubCategory.findOne({
      name: name.trim().toLowerCase(),
      category,
    });

    if (existing) {
      return res.status(400).json({
        message: "SubCategory already exists in this category",
      });
    }

    const sub = await SubCategory.create({
      name: name.trim().toLowerCase(),
      category,
    });

    res.status(201).json(sub);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getSubCategories = async (req, res) => {
  const { category } = req.query;
  const filter = category ? { category } : {};
  const data = await SubCategory.find(filter);
  res.json(data);
};

const updateSubCategory = async (req, res) => {
  try {
    const updated = await SubCategory.findByIdAndUpdate(
      req.params.id,
      { name: req.body.name },
      { new: true },
    );

    if (!updated)
      return res.status(404).json({ message: "SubCategory not found" });

    res.json(updated);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
const deleteSubCategory = async (req, res) => {
  try {
    const { id } = req.params;

    // 1️⃣ Delete products belonging to this subcategory
    await Product.deleteMany({ subCategory: id });

    // 2️⃣ Delete subcategory
    const deleted = await SubCategory.findByIdAndDelete(id);

    if (!deleted) {
      return res.status(404).json({ message: "SubCategory not found" });
    }

    res.json({ message: "SubCategory and related products deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createSubCategory,
  getSubCategories,
  updateSubCategory,
  deleteSubCategory,
};
