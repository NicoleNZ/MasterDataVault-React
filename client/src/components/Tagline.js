import React from "react";
import { Container, Row, Col, Jumbotron, Image, Button } from "react-bootstrap";


const Tagline = () => {
    return (
        <Container>
            <Row>
                <Col>
                    <Jumbotron className="text-center">
                        <h1>Your product data under lock and key</h1>
                        <p>
                            Store important data such as barcodes, article numbers, SAP codes, list prices, weights, dimensions and more.
                        </p>
                    </Jumbotron>
                </Col>
            </Row>
        </Container>
    );
};

const Companies = () => {
    return (
        <Container>
            <Row>
                <Col>
                    <Jumbotron className="text-center">
                        <h1>We're trusted by brands worldwide</h1>
                        <Image className="m-4" width="70px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUdukgTSK7fGVFhCT3BSVLbukqlea-1L39Zg&usqp=CAU"/>
                        <Image className="m-4" width="70px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUdukgTSK7fGVFhCT3BSVLbukqlea-1L39Zg&usqp=CAU"/>
                        <Image className="m-4" width="70px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUdukgTSK7fGVFhCT3BSVLbukqlea-1L39Zg&usqp=CAU"/>
                        <Image className="m-4" width="70px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUdukgTSK7fGVFhCT3BSVLbukqlea-1L39Zg&usqp=CAU"/>
                        <Image className="m-4" width="70px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUdukgTSK7fGVFhCT3BSVLbukqlea-1L39Zg&usqp=CAU"/>
                        <Image className="m-4" width="70px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUdukgTSK7fGVFhCT3BSVLbukqlea-1L39Zg&usqp=CAU"/>
                        <Button style={{ background: "#ff007f" }}>Learn More</Button>
                    </Jumbotron>
                </Col>
            </Row>
        </Container>
    );
};

export { Tagline };
export { Companies };