const Product = require("../model/Product");

const saveData = async (req, res) => {
  //   return res.json(req.body);
  try {
    const data = req.body;
    const product = new Product(data);
    await product.save();
    return res.json(product);
  } catch (error) {
    console.log(error);
    res.json({ message: error.message });
  }
};
//get all product
const product_all = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    console.log(error);
    res.json({ message: error.message });
  }
};
//sindle  product
const product_details = async (req, res) => {
  try {
    const product = await Product.findById(req.params.productId);
    res.json(product);
  } catch (error) {
    res.json({ message: error });
  }
};
//add new  product
const product_create = async (req, res) => {};
//update product
const product_update = async (req, res) => {};
//delete product
const product_delete = async (req, res) => {};

module.exports = {
  saveData,
  product_all,
  product_details,
  product_create,
  product_update,
  product_delete,
};
