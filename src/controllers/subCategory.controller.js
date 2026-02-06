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

module.exports = { createSubCategory, getSubCategories };
