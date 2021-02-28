import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import { Button, Card } from "react-bootstrap";

const BootstrapTesting = () => {
    return (
        <div>
                        <Card style={{ color: "#000" }} class="feature" />
                        <Card.Img src=""/>
                        <Card.Body>
                            <Card.Title>
                                Feature/Benefit
                            </Card.Title>
                            <Card.Text>
                                This is a Feature or benefit of LockBox
                            </Card.Text>
                            <Button style={{ background: "#ff007f" }}>Learn More</Button>
                        </Card.Body>
        </div>
    );
};

export { BootstrapTesting };