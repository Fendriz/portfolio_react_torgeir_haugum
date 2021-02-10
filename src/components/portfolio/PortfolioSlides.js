import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Card from "react-bootstrap/Card";
import PropTypes from "prop-types";


function PortfolioSlides({imgs}) {
    
    return (
        <div>
             <Card className="about-content">
                <Carousel>
                {imgs.map((img, i) => (
                        
                        <Carousel.Item key={i}>
                            { console.log(img) }
                            <img
                            className="d-block w-100"
                            src= {img.img}
                            />
                            <Carousel.Caption>
                            </Carousel.Caption>
                        </Carousel.Item>
                       
                ))}
                  </Carousel>
            </Card>
        </div>
    );
}
PortfolioSlides.propTypes = {
	imgs: PropTypes.array.isRequired
};

export default PortfolioSlides;