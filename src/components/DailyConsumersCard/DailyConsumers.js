import React, {useEffect, useState}  from "react";
import {Card, CardBody, CardFooter, CardTitle, Col, Row} from "reactstrap";

let intervalId = null;

function DailyConsumers(props){
    const [consumers, setConsumers] = useState(0);
    // useEffect(() => {
    //   // GET request using fetch inside useEffect React hook
    //   fetch('http://ec2-18-168-221-214.eu-west-2.compute.amazonaws.com/consumers')
    //       .then(response => response.json()).then(response => setConsumers(response.consumers));
    // }, []);
    if (!intervalId) {
        intervalId = setInterval(async () => {
            fetch('http://ec2-18-168-221-214.eu-west-2.compute.amazonaws.com/consumers')
                .then(response => response.json()).then(response => setConsumers(response.consumers));
        }, 1000);
    }
    return(
        <Card className="card-stats">
        <CardBody>
            <Row>
                <Col md="4" xs="5">
                    <div className="icon-big text-center icon-warning">

                        <i className="nc-icon nc-single-02 text-warning" />
                    </div>
                </Col>
                <Col md="8" xs="7">
                    <div className="numbers">
                        <p className="card-category">Daily Consumers</p>
                        <CardTitle tag="p">
                            {consumers}
                        </CardTitle>
                        <p />
                    </div>
                </Col>
            </Row>
        </CardBody>
        <CardFooter>
            <hr />
            <div className="stats">
                <i className="fas fa-sync-alt" /> Update Now
            </div>
        </CardFooter>
    </Card>
    );
}
export default DailyConsumers;
