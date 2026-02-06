const SubCategory = require("../models/subCategory.model");

const createSubCategory = async (req, res) => {
  const sub = await SubCategory.create(req.body);
  res.status(201).json(sub);
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

module.exports = { createSubCategory, getSubCategories, updateSubCategory };
