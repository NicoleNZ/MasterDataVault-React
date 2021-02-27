import React, { useEffect, useState } from "react";

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

        setProductList(newProducts); //this 'updates' the productList to contain the newly created product
        
        }
}


export { Home };