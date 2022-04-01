import React, { Component } from "react";
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron,
    Button, Modal, ModalHeader, ModalBody,
    Form, FormGroup, Input, Label, Container, NavLink} from 'reactstrap';

class Header extends Component {

    constructor(props) {
        super(props);
        this.state={
            isNavOpen: false,
        }
        this.toggleNav = this.toggleNav.bind(this);
        
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    render() {
        return(
            <React.Fragment>
                <Navbar dark expand="md">
                    <div className="container">
                    <NavbarToggler onClick={this.toggleNav} />
                        <NavbarBrand className="mr-auto" href="/">
                            <img src="/assets/images/logo.png" height="30" width="41" alt="Ristornate Con Fusion" />
                        </NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                        <Nav navbar>
                            <NavItem>
                                <NavLink className="nav-link" to="/home">
                                    <span className="fa fa-home fa-lg"></span>{' '}Home
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link"  to='/menu'>
                                    <span className="fa fa-list fa-lg"></span>{' '} Menu
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                    <NavLink className="nav-link" to='/aboutus'>
                                        <span className="fa fa-info fa-lg"></span>{' '} About Us
                                    </NavLink>
                                </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to='/contactus'>
                                    <span className="fa fa-address-card fa-lg"></span>{' '} Contact Us
                                </NavLink>
                            </NavItem>
                        </Nav>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <Button>
                                <span className="fa fa-sign-in"></span>{' '}
                                    Login 
                                </Button>
                                {' '}
                                <Button>
                                <span className="fa fa-user"></span>{' '}
                                    Sign Up 
                                </Button>
                            </NavItem>
                            <NavItem>
                                
                            </NavItem>

                        </Nav>
                        </Collapse>
                    </div>
                </Navbar>
            </React.Fragment>
        );
    }
}

export default Header;