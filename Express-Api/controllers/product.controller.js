const productModel = require('../models/product.model');
const productService = require('../services/product.service');

//createb product
module.exports.CreateProduct = async (req, res) => {

    try {

const {name,description,stock,price,discount,isNewProduct,sku,images,brand,category} = req.body;

const isExist = await productModel.findOne({sku : sku})
if(isExist){
   return res.status(400).json({message : "Product already Registered !!!"});
    
}
const product = await productService.CreateProduct({name,description,stock,price,discount,
    isNewProduct,sku,images,brand,category})
    return res.status(200).json({msg : "Product Added successfully !!!", product})

    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
};

//get all products
module.exports.GetAllProducts = async (req, res) => {

try{
  const products = await productService.GetAllProducts();
if(!products){
    return res.status(404).json({message : "No products found !!!"});
}

return res.status(200).json({message: "Fetch All Products:", products});


}catch(error){
  return res.status(400).json({ message: error.message });

}
}

//get single product by id
module.exports.GetSingleProduct =async (req,res) => {
try{

    const id =req.params.id;
const product = await productService.GetSingleProduct(id);
if(!product){
    return res.status(404).json({message : "Product Not Found !!!"});
}
return res.status(200).json({message: "Fetch Single Product successfully:", product});
}catch(error){
  return res.status(400).json({ message: error.message });

}
};
//update product
module.exports.UpdateProduct = async (req, res) => {
    try {
        const productId = req.params.id;
        const {name,description,stock,price,discount,isNewProduct,sku,images,brand,category} = req.body;
        const updatedProduct = await productService.UpdateProduct(
            { productId ,name,description,stock,price,
             discount,isNewProduct,sku,
             images,brand,category
        });
        return res.status(200).json({message: "Product Updated successfully !!!", updatedProduct});
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }


};

//delete product
module.exports.DeleteProduct = async (req, res) => {
try{
const productId = req.params.id;
const product = await productService.DeleteProduct(productId);
if(!product){
    return res.status(404).json({message : "Product Not Found !!!"});
}
return res.status(200).json({message: "Product Deleted successfully !!!", product});

}catch(error){
    return res.status(400).json({ message: error.message });


}


}