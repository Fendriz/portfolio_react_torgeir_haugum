import React from 'react';
import Card from "react-bootstrap/Card";
import ProgressBar from "react-bootstrap/ProgressBar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function AboutContent(props) {
    const now = 60;
    return (
        <Card className="about-content">
            
            <Card.Body>
            <Card.Title>about me</Card.Title>
            <Card.Text>
            <span>10 Years Control Systems</span>   |  <span>BS Electronics</span>   |  <span>Web Developer</span>
            </Card.Text>
            <Card.Text>
            Positive, engaged and a good team player.
                Software engineer with 10 years of progressive experience in automation related to the oil & energy industry. 
                Skilled in control systems, engineering, and PLC programming. 
            </Card.Text>
            <Card.Text>
            For the last two years I have also been taking web development at Noroff online studies.
            </Card.Text>
            <Row>
                <Col>
                    <Card.Subtitle>Skills Control Systems</Card.Subtitle>
                    <ProgressBar now={now}label={`test ${now}%`} />
                </Col>
                <Col>
                    <Card.Subtitle>Skills Web Development</Card.Subtitle>
                    <ProgressBar now={now}label={`${now}%`} />
                </Col>
            </Row>
            </Card.Body>

        </Card>
   
    );
}

export default AboutContent;