import React, { useState} from "react";
import NavbarTHLinks from "./navbarTHLinks.js"

const classNames = require("classnames");

function NavbarTH(props) {
    const [navigationClass, setNavigationClass] = useState({
        down: false,
        up: false,
        hamburger: false,
        responsive: false,
    });

    const [close, addClose] = useState(false);

    const hamburger = () => {
        console.log("hamburger");
        if (navigationClass.down === false) {
            console.log("down");
            setNavigationClass({
                down: true,
                up: false,
                hamburger: true,
                responive: true,
            });
        } else if (navigationClass.up === false) {
            console.log("up");
            setNavigationClass({
                down: false,
                up: true,
                hamburger: true,
                responive: true,
            });
        }
    };
    const hamburgerEnd = () => {
        setNavigationClass({ ...navigationClass, hamburger: false });
        if (navigationClass.down === true) {
            addClose(true);
        } else addClose(false);
    };
    const responsiveEnd = () => {
        if (navigationClass.up === true) {
            setNavigationClass({ ...navigationClass, responive: false });
        }
    };

    return (
        <header>
           
            <nav className='navigation'>
      
                <div className='hamburger' onClick={hamburger}>
                    <i
                        className={classNames(
                            "fas",
                            { "fa-window-close": close },
                            { "fa-bars": !close },
                            { animation: navigationClass.hamburger }
                        )}
                        onAnimationEnd={hamburgerEnd}
                    ></i>
                </div>
                <div
                    className={classNames("navigation__links", {
                        responsive: navigationClass.responive,
                        animationTopDown: navigationClass.down,
                        animationDownUp: navigationClass.up,
                    })}
                    onAnimationEnd={responsiveEnd}
                >
                    
                    {props.children}
                   
                </div>
          
            </nav>
           
            
        </header>
    );
}
NavbarTH.Links = NavbarTHLinks;
export default NavbarTH;
