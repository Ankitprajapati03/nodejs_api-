const Product = require("../model/Product");

const product = require("../routes/product");

//get all product
const product_all = async (req, res)=>{
try{
const products = await Product.find();
res.json(products)//,()=>console.log(products)
//);
//console.log(products);
}
catch(error){
    res.json({message:error});

}

};
//sindle  product
const product_details = async(req, res)=>{
try
{
const product = await Product.findById(req.params.productId);
res.json(product);

}
catch(error)
{
res.json({message:error});

}

};
//add new  product
const product_create = async(req, res)=>{};
//update product
const product_update = async(req, res)=>{};
//delete product
const product_delete = async(req, res)=>{};

module.exports ={
    product_all,
    product_details,
    product_create,
    product_update,
    product_delete
}