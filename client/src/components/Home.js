import React, { useEffect, useState } from "react";
import { CreateProduct } from "./CreateProduct";
import { EditProduct } from "./EditProduct";
import { DeleteProduct } from "./DeleteProduct";
import { ProductList } from "./ProductList";

const Home = () => {
    
    const [productList, setProductList] = useState([]); //this will be used to render a list of products on the UI when someone is logged in
    const [productEdit, setProductEdit] = useState ({
        productCode: "",
        productName: "",
        netWeight: "",
        unitsPerCase: "",
        listPrice: "",
        unitBarcode: "",
        caseBarcode: "",
    }); // this will be used to edit products
    const [productDelete, setProductDelete] = useState ({
        productCode: "",
        productName: "",
        netWeight: "",
        unitsPerCase: "",
        listPrice: "",
        unitBarcode: "",
        caseBarcode: "",
    }); //this will be used to delete products

    const handleCreateProductSubmit = (
        productCode,
        productName,
        netWeight,
        unitsPerCase,
        listPrice,
        unitBarcode,
        caseBarcode) => {
            const newProduct = { 
                productCode: productCode,
                productName: productName,
                netWeight: netWeight,
                unitsPerCase: unitsPerCase,
                listPrice: listPrice,
                unitBarcode: unitBarcode,
                caseBarcode: caseBarcode
            };
            console.log(typeof productList);
        const newProducts = [...productList];
        newProducts.push(newProduct); //this is pushing the newly created product into the array of product objects
        setProductList(newProducts); //this 'updates' the productList in the memory to contain the newly created product
        
        fetch("http://localhost:4000/api/vault/new-product", { //this is going to POST the newly created product to the MongoDB database
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newProduct),
        })
        .then((response) => {
        console.log("MongoDB response: ", response);
        });   
    };

    //next we are getting the latest data from MongoDB and updating the product list that is rendered on the UI
    useEffect(() => {
    fetch("http://localhost:4000/api/vault/welcome", { //this is going to GET the list of products from the MongoDB database, including the new one just added
    method: "GET",
    headers: {
        "Content-Type": "application/json",
    }
    })
    .then((response) => {
        console.log("MongoDB product list response: ", response);
        return response.json();
    })
    .then((productData) => {
        console.log("Current productData is: ", productData);
        setProductList(productData); //is this incase data is added to the databse from elsewhere?  Otherwise, how is this not a repeat of setProductList(newProducts);

    });
    }, []);  
    
    const handleProductClick = (productIndex) => {
        console.log("productIndex: ", productIndex);        
        const product = productList[productIndex];
        console.log("product: ", product);
        setProductEdit(product);
    }

    const handleEditProductButtonClick = (product) => {
        console.log("handleEditProductButtonClick: ", handleEditProductButtonClick);
        const foundProduct = productList.findIndex((productEl) => {
            console.log("productEl: ", productEl);
            console.log("productEl._id: ", productEl._id)
            return productEl._id
        });
        console.log("foundProduct: ", foundProduct);
        const newProducts = [...productList];
        newProducts[foundProduct] = product;
        setProductList(newProducts);
        fetch(`http://localhost:4000/api/vault/update-product/${product._id}`, {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(product)
        })
        .then((response) => {
            console.log('PUT response:', response);
        })        
    };



    return (
        <div>
        <ProductList products={productList} handleClick={handleProductClick} />
        <CreateProduct submit={handleCreateProductSubmit}/>
        <EditProduct submit={handleEditProductButtonClick} product={productEdit} />
        {/* <DeleteProduct /> */}
        </div>
    );

};



export { Home };