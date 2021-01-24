import React from 'react';
import Card from "react-bootstrap/Card";

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
            For the last two years I have also been taking web development at Noroff online studies.
            </Card.Text>
            </Card.Body>

        </Card>
   
    );
}

export default AboutContent;