const productModel = require('../models/product.model')

module.exports.CreateProduct = async ({name,description,stock,price,discount,isNewProduct,sku,images,brand,category}) => {

    if(!name || !description || !stock || !price || !discount || !sku || !images || !brand || !category){
        throw new Error("All fields are required !!!");
    }

    let product = await productModel.create({name,description,stock,price,discount,isNewProduct,sku,images,brand,category})

    return product;
}

//get all products
module.exports.GetAllProducts = async () => {

return await productModel.find();
 
}

//get single product by id
module.exports.GetSingleProduct =async (id) => {

return await productModel.findOne({_id: id});


};


//update product
module.exports.UpdateProduct = async ( {productId ,name,description,stock,price,discount,isNewProduct,sku,images,brand,category
}) => {
    const updatedProduct = await productModel.findOneAndUpdate(
        {_id: productId},
        {name,description,stock,price,discount,isNewProduct,sku,images,brand,category},
        {new : true}
    )
    if(!updatedProduct){
        throw new Error("Product Not Found !!!");
    }
    return updatedProduct;
};

//delete product
module.exports.DeleteProduct = async (id) => {
    return await productModel.findOneAndDelete({_id: id});
}