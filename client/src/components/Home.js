import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import { CreateProduct } from "./CreateProduct";
import { EditProduct } from "./EditProduct";
import { DeleteProduct } from "./DeleteProduct";
import { ProductList } from "./ProductList";
import { Logout } from "./Login"
import { LandingPage } from "./Landing";
import  Nav  from "react-bootstrap/Nav";
import Navbar from 'react-bootstrap/Navbar';

const Home = () => {
    
    const [isLoggedIn, setIsLoggedIn] = useState(false);
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
        setProductList(productData); 
    });
    }, []);  
    
    const handleProductClick = (productIndex) => {
        console.log("productIndex: ", productIndex);        
        const product = productList[productIndex];
        console.log("product: ", product);
        setProductEdit(product);
        setProductDelete(product);
    }

    const handleEditProductButtonClick = (product) => {
        console.log("handleEditProductButtonClick: ", product);
        const foundProduct = productList.findIndex((productEl) => {
            return productEl._id === product._id
        });
            const allProducts = [...productList];
            allProducts[foundProduct] = product;
            console.log("product: ", product)
            console.log("product._id: ", product._id);
        fetch(`http://localhost:4000/api/vault/update-product/${product._id}`, {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(product)
        })
        .then((response) => {
            console.log('Patch response:', response);
        });

        fetch("http://localhost:4000/api/vault/welcome", { //this is going to GET the list of products from the MongoDB database, minus the one just deleted
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
                setProductList(productData); 
            });    
    };

    const handleDeleteProductButtonClick = (product) => {
        console.log("handleDeleteProductButtonClick: ", product);
        const foundProduct = productList.findIndex((productEl) => {
            return productEl._id === product._id
        });
            const allProducts = [...productList];
            allProducts[foundProduct] = product;
            console.log("product: ", product)
            console.log("product._id: ", product._id);
        fetch(`http://localhost:4000/api/vault/delete-product/${product._id}`, {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json",
            },
        })
        .then((response) => {
            console.log('Delete response:', response);
        });  
        
        fetch("http://localhost:4000/api/vault/welcome", { //this is going to GET the list of products from the MongoDB database, minus the one just deleted
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
                setProductList(productData); 
            });
    };          

    return (
        <Router>
            {isLoggedIn && <div>
            <Navbar bg="primary" variant="dark" expand="lg">
            <Navbar.Brand href="#home">LOCKBOX</Navbar.Brand>
            <Nav className="w-100 nav-justified">   
                <Nav.Item>
                    <Link className="nav-link" to="/create">Create Product</Link>    
                </Nav.Item>
                <Nav.Item>
                    <Link className="nav-link" to="/edit">Edit Product</Link>    
                </Nav.Item> 
                <Nav.Item>
                    <Link className="nav-link" to="/delete">Delete Product</Link>    
                </Nav.Item> 
                <Nav.Item>
                    <Link className="nav-link" to="/logout">Logout</Link>    
                </Nav.Item>  
            </Nav>
            </Navbar>
            
            <div>
                <ProductList products={productList} handleClick={handleProductClick} />
            </div>
            </div>  
            } 

            <Switch>
                <Route path="/create">
                    <CreateProduct submit={handleCreateProductSubmit}/>
                </Route>
                <Route path="/edit">
                    <EditProduct submit={handleEditProductButtonClick} product={productEdit} />
                </Route>
                <Route path="/delete">
                    <DeleteProduct submit={handleDeleteProductButtonClick} product={productDelete} />
                </Route>
                <Route path="/logout">
                    <Logout />
                </Route>
            </Switch>

            {!isLoggedIn && <LandingPage setIsLoggedIn={setIsLoggedIn}/>}
    </Router>
    );
};



export { Home };