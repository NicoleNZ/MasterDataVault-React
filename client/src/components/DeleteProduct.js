import React, { useEffect, useState } from "react";
import { Card, Container, Row, Col, Button } from "react-bootstrap";

const DeleteProduct = (props) => {
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
        }, [props.product]); //need this to be able to render products into the delete field when clicked on the UI

    const handleDeleteSubmit = (e) => {
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
                            <h1>Delete Product</h1>
                            </Card.Title>
                            <form onSubmit={handleDeleteSubmit}>
                                <label>
                                    Product Code
                                    <input name="productCode" defaultValue={formState.productCode} ></input>
                                </label>
                                <br></br>
                                <label>
                                    Product Name
                                    <input name="productName" defaultValue={formState.productName} ></input>
                                </label>
                                <br></br>
                                <label>
                                    Net Weight
                                    <input name="netWeight" defaultValue={formState.netWeight} ></input>
                                </label>
                                <br></br>
                                <label>
                                    Units Per Case
                                    <input name="unitsPerCase" defaultValue={formState.unitsPerCase} ></input>
                                </label>
                                <br></br>
                                <label>
                                    List Price
                                    <input name="listPrice" defaultValue={formState.listPrice} ></input>
                                </label>
                                <br></br>
                                <label>
                                    Unit Barcode
                                    <input name="unitBarcode" defaultValue={formState.unitBarcode} ></input>
                                </label>
                                <br></br>
                                <label>
                                    Case Barcode
                                    <input name="caseBarcode" defaultValue={formState.caseBarcode} ></input>
                                </label>
                                <br></br>
                                <Button type="submit" style={{ background: "#ff007f" }}>Delete Product</Button>
                        </form>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    </Container>
    )
};

export { DeleteProduct };