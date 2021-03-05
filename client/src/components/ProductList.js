import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const ProductList = (props) => {
    return (
        <Container>
            <Row>
                <Col>
                    <Card style={{ color: "#000", width: '500px' }} >
                    <Card.Body>
                        <Card.Title>
                            Product List
                        </Card.Title>
                        <ul>
                        {props.products.map((el, index) => ( //this props.product is related to the products={productList} in the render of Home component
                            <li key={index} onClick={() => props.handleClick(index)}>
                            {/* Product Code: {el.productCode}       */}
                            Product Name: {el.productName}
                            {/* Net Weight: {el.netWeight}
                            Units per Case: {el.unitsPerCase}
                            List Price: {el.listPrice}
                            Unit Barcode: {el.unitBarcode}
                            Case Barcode: {el.caseBarcode} */}
                            </li>
                        ))}
                        </ul>
                    </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
        
        

    );
};

export { ProductList }