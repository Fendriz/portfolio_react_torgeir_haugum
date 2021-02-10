import React from 'react'
import PortfolioSlides from './PortfolioSlides'
import design from '../../img/design.png'
import webcom from '../../img/webcom.png'


const Portefolio = () => {
    const imgs =[
        {
            img: design,
            alt: 'design'
        },
        {
            url: webcom,
            alt: 'webcom'
        }
    ]
    return (
        <div>
            <PortfolioSlides imgs={imgs}>

            </PortfolioSlides>
        </div>
    )
}

export default Portefolio
