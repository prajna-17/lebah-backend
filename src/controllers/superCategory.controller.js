const SuperCategory = require("../models/superCategory.model");

const createSuperCategory = async (req, res) => {
  try {
    const { name } = req.body;
    if (!name) return res.status(400).json({ message: "Name required" });

    const exists = await SuperCategory.findOne({ name });
    if (exists) return res.status(400).json({ message: "Already exists" });

    const superCategory = await SuperCategory.create({ name });
    res.status(201).json(superCategory);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getSuperCategories = async (req, res) => {
  const data = await SuperCategory.find();
  res.json(data);
};

module.exports = { createSuperCategory, getSuperCategories };
