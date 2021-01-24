import React from "react";
import PropTypes from "prop-types"

function NavbarTHLinks ({title,active}){

    let classNav;

    (active) ?  classNav = "navigation__links-active" : classNav = "navigation__links-default"

    return (
		<div className={classNav}>
            {title}
		</div>
	);

}

NavbarTHLinks.propTypes = {
    title: PropTypes.string.isRequired,
    active: PropTypes.bool.isRequired,
};

export default NavbarTHLinks;