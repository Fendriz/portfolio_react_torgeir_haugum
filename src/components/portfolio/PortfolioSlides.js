import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import AwesomeSliderStyles from 'react-awesome-slider/src/styles';
import PropTypes from "prop-types";
import boardgame from "../../img/boardgame.png"
import design from "../../img/design.png"
import museum from "../../img/museum.png"
import recycle from "../../img/recycle.png"
import webcom from "../../img/webcom.png"
import spaceX from "../../img/spaceX.png"
import Link from 'react';

function PortfolioSlides({imgs}) {
    return (
        <AwesomeSlider cssModule={AwesomeSliderStyles} >
            <div data-src={spaceX } />
            <div data-src={museum} />
            <div data-src={boardgame} />
           
            <div data-src={design}/>
            <div data-src={recycle} />
            <div data-src={webcom} />
        </AwesomeSlider>
    )
}
PortfolioSlides.propTypes = {
	imgs: PropTypes.array.isRequired
};
export default PortfolioSlides;