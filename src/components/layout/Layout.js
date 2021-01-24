import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
} from "react-router-dom";
import Container from "react-bootstrap/Container";
import NavbarTH from '../navbar/Navbar.js';
import Contact from '../contact/Contact.js';
import Portfolio from '../portfolio/Portfolio.js';
import About from '../about/About.js';

function Layout() {
    return (
        
        <Router>
            
            <NavbarTH>
                <NavLink to='/' exact>
                    about me
                </NavLink>
                <NavLink to='/portfolio'>
                    portfolio
                </NavLink>
                <NavLink to='/contact'>
                    contact
                </NavLink>

                
            </NavbarTH>

         <Container>
         <Switch>
                <Route path='/' exact component={About} />
                <Route path='/portfolio' component={Portfolio} />
                <Route path="/contact" component={Contact} />
            </Switch>
         </Container>
            
      
            
        
            
        </Router>
        
         
        
    );
}

export default Layout;
