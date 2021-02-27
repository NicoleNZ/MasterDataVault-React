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
        activeProduct: ""
    }); // this will be used to edit products
    const [productDelete, setProductDelete] = useState ({
        productCode: "",
        productName: "",
        netWeight: "",
        unitsPerCase: "",
        listPrice: "",
        unitBarcode: "",
        caseBarcode: "",
        activeProduct: ""
    }); //this will be used to delete products

    const handleCreateProductSubmit = (
        productCode,
        productName,
        netWeight,
        unitsPerCase,
        listPrice,
        unitBarcode,
        caseBarcode,
        activeProduct) => {
            const newProduct = { 
                productCode: productCode,
                productName: productName,
                netWeight: netWeight,
                unitsPerCase: unitsPerCase,
                listPrice: listPrice,
                unitBarcode: unitBarcode,
                caseBarcode: caseBarcode,
                activeProduct: activeProduct
            };
        const newProducts = [...productList];
        newProducts.push(newProduct); //this is pushing the newly created product into the array of product objects
        setProductList(newProducts); //this 'updates' the productList in the memory to contain the newly created product
        
        fetch("mongodb://localhost:27017/masterDataVault-React", { //this is going to POST the newly created product to the MongoDB database
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
    fetch("mongodb://localhost:27017/masterDataVault-React", { //this is going to GET the list of products from the MongoDB database, including the new one just added
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
        setProductList(productData.data); //is this incase data is added to the databse from elsewhere?  Otherwise, how is this not a repeat of setProductList(newProducts);
    });
    }, []);  
    
    return (
        <div>
        <ProductList products={productList} />
        <CreateProduct submit={handleCreateProductSubmit}/>
        <EditProduct />
        <DeleteProduct />
        </div>
    );

};



export { Home };