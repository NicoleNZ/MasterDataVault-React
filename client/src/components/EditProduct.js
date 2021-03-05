import React, { useEffect, useState } from "react";
import { Card, Container, Row, Col, Button } from "react-bootstrap";

const EditProduct = (props) => {
    const [formState, setFormState] = useState({
        productCode: "",
        productName: "",
        netWeight: "",
        unitsPerCase: "",
        listPrice: "",
        unitBarcode: "",
        caseBarcode: ""
    });

    useEffect(() => {
        setFormState(props.product);
        }, [props.product]); //need this to be able to render products into the edit field when clicked on the UI

    const handleFieldChange = (e) => {
        const newState = { ...formState }; //newState will therefore equal whatever is written in the fields
        newState[e.target.name] = e.target.value; 
        setFormState(newState); //updates the formState in the memory
    };
    
    const handleEditSubmit = (e) => {
        e.preventDefault();
        props.submit(formState);
    };
    
    return (
            <Container>
                <Row>
                    <Col>
                        <Card>
                            <Card.Body>
                                <Card.Title>
                                <h1>Edit Product</h1>
                                </Card.Title>
                                <form onSubmit={handleEditSubmit}>
                                    <label>
                                    Product Code
                                    <input name="productCode" value={formState.productCode} onChange={handleFieldChange}></input>
                                    </label>
                                    <br></br>
                                    <label>
                                        Product Name
                                        <input name="productName" value={formState.productName} onChange={handleFieldChange}></input>
                                    </label>
                                    <br></br>
                                    <label>
                                        Net Weight
                                        <input name="netWeight" value={formState.netWeight} onChange={handleFieldChange}></input>
                                    </label>
                                    <br></br>
                                    <label>
                                        Units Per Case
                                        <input name="unitsPerCase" value={formState.unitsPerCase} onChange={handleFieldChange}></input>
                                    </label>
                                    <br></br>
                                    <label>
                                        List Price
                                        <input name="listPrice" value={formState.listPrice} onChange={handleFieldChange}></input>
                                    </label>
                                    <br></br>
                                    <label>
                                        Unit Barcode
                                        <input name="unitBarcode" value={formState.unitBarcode} onChange={handleFieldChange}></input>
                                    </label>
                                    <br></br>
                                    <label>
                                        Case Barcode
                                        <input name="caseBarcode" value={formState.caseBarcode} onChange={handleFieldChange}></input>
                                    </label>
                                    <br></br>
                                    <Button type="submit" style={{ background: "#ff007f" }}>Edit Product</Button>
                                </form>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
    )
};

export { EditProduct };