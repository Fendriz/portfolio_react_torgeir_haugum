import React from 'react';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";


function Profile({image}) {
    return (
        <Card className="profile">
            <Card.Img variant="top" src={image} />
            <Card.Body>
				
				<Card.Title><span>I'm </span><span className="highlight">Torgeir</span></Card.Title>
				<Card.Text>A Software Engineer</Card.Text>

				<Link to={"../portfolio" }>
					<Button block>
						Portfolio Noroff
					</Button>
				</Link>
			</Card.Body>
        </Card>
    );
}
Profile.propTypes = {
	image: PropTypes.string.isRequired
};

export default Profile;