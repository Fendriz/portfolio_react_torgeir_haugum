import React from 'react';
import Card from "react-bootstrap/Card";
import ProgressBar from "react-bootstrap/ProgressBar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";


function AboutContent(props) {
 

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
                For the last two years I have also been taking front end development at Noroff online studies.
            </Card.Text>

            <Button>Curriculum Vitae PDF</Button>
            <Row className="skills">
                <Col>
                    <Card.Subtitle>Skills Web Development</Card.Subtitle>
                    <Card.Text>HTML</Card.Text>
                    <ProgressBar now={95}label={`${95}%`} />
                    <Card.Text>CSS</Card.Text>
                    <ProgressBar now={92}label={`${92}%`} />
                    <Card.Text>Javascript</Card.Text>
                    <ProgressBar now={90}label={`${90}%`} />
                    <Card.Text>React</Card.Text>
                    <ProgressBar now={75}label={`${75}%`} />
                    <Card.Text>Jquerry</Card.Text>
                    <ProgressBar now={78}label={`${78}%`} />
                    <Card.Text>Bootstrap</Card.Text>
                    <ProgressBar now={75}label={`${75}%`} />
                    <Card.Text>Adobe Illustrator</Card.Text>
                    <ProgressBar now={80}label={`${80}%`} />
                    <Card.Text>Adobe XD</Card.Text>
                    <ProgressBar now={85}label={`${85}%`} />
                  
                   
                </Col>
                <Col>
                    <Card.Subtitle>Skills Control Systems</Card.Subtitle>
                    <Card.Text>TIA portal</Card.Text>
                    <ProgressBar now={90}label={`
                    ${90}%`} />
                    <Card.Text>Step 7</Card.Text>
                    <ProgressBar now={95}label={`
                    ${95}%`} />
                    <Card.Text>InTouch HMI</Card.Text>
                    <ProgressBar now={60}label={`
                    ${60}%`} />
                    <Card.Text>Intrumentation</Card.Text>
                    <ProgressBar now={80}label={`
                    ${80}%`} />

                   
                </Col>
              
               
            </Row>
            </Card.Body>

        </Card>
        
   
    );
}

export default AboutContent;