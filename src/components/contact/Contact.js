import React from "react";

import ContactForm from "./Contactform";
import Footer from "../footer/Footer"
import Container from "react-bootstrap/Container";


function Contact() {
    return (
        <>
           <Container>
           <ContactForm />
           </Container>
            
            <Footer></Footer>
        </>
    );
}
export default Contact;
