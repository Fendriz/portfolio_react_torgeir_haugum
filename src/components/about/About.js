import React from 'react';
import Profile from '../profile/Profile.js';
import AboutContent from './AboutContent.js'
import profilepic from '../../images/profile.jpg'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


function About() {
    return (
        <Row>
            <Col md={5}>
                <Profile image={profilepic}>

                </Profile>
              

                
               
            </Col>
            <Col md={7}>
                <AboutContent>
                </AboutContent>
            </Col>
           
        </Row>
  
        
    );
}

export default About;
