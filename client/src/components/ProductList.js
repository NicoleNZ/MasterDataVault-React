import React from "react";

const ProductList = (props) => {
    return (
                        <ul>
                            <h2>Product List</h2>
                        {props.products.map((el, index) => ( //this props.product is related to the products={productList} in the render of Home component
                            <li key={index} onClick={() => props.handleClick(index)}>

                            {el.productName}

                            </li>
                        ))}
                        </ul>
    );
};

export { ProductList };
