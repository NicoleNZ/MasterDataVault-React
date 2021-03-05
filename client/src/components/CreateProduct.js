import React, { useState } from "react";
import { Card, Container, Row, Col, Button } from "react-bootstrap";

const CreateProduct = (props) => {
    const [formState, setFormState] = useState({
        productCode: "",
        productName: "",
        netWeight: "",
        unitsPerCase: "",
        listPrice: "",
        unitBarcode: "",
        caseBarcode: ""
    });

    const handleFieldChange = (e) => {
        const newState = { ...formState }; //newState will therefore equal whatever is written in the fields
        newState[e.target.name] = e.target.value; 
        setFormState(newState); //updates the formState in the memory
    };

    const handleCreateSubmit = (e) => {
        e.preventDefault();
        props.submit(
            formState.productCode,
            formState.productName,
            formState.netWeight,
            formState.unitsPerCase,
            formState.listPrice,
            formState.unitBarcode,
            formState.caseBarcode
        );
    };

    return (
        <Container>
            <Row>
                <Col>
                    <Card>
                        <Card.Body>
                            <Card.Title>
                            <h1>Create Product</h1>
                            </Card.Title>
                            <form onSubmit={handleCreateSubmit}>
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
                                <Button type="submit" style={{ background: "#ff007f" }}>Create Product</Button>
                            </form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export { CreateProduct };