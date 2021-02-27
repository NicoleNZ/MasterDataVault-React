import React from "react";

const ProductList = (props) => {
    return (
        <ul>
            {props.products.map((el, index) => ( //this props.product is related to the products={productList} in the render of Home component
                <li key={index} onClick={() => props.handleClick(index)}>
                    Product Code: {el.productCode}
                    Product Name: {el.productName}
                    Net Weight: {el.netWeight}
                    Units per Case: {el.unitsPerCase}
                    List Price: {el.listPrice}
                    Unit Barcode: {el.unitBarcode}
                    Case Barcode: {el.caseBarcode}
                    Active Product: {el.activeProduct}
                </li>
            ))}
        </ul>
    );
};

export { ProductList }