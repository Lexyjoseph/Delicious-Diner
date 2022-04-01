import React, { Component } from "react";
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron,
    Button, Modal, ModalHeader, ModalBody,
    Row, Col, Label, NavLink} from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';

class Header extends Component {

    constructor(props) {
        super(props);
        this.state={
            isNavOpen: false,
            isLoginModalOpen: false
        }
        this.toggleNav = this.toggleNav.bind(this);
        this.toggleLoginModal = this.toggleLoginModal.bind(this);
        this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
        
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    toggleLoginModal() {
        this.setState({
            isLoginModalOpen: !this.state.isLoginModalOpen
        });
    }
    handleLoginSubmit(values) {
        console.log('Current State is: ' + JSON.stringify(values));
        alert('Current State is: ' + JSON.stringify(values));
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
                                <Button outline onClick={this.toggleLoginModal}>
                                <span className="fa fa-sign-in"></span>{' '}
                                    Login 
                                </Button>
                                {' '}
                                <Button>
                                <span className="fa fa-user"></span>{' '}
                                    Sign Up 
                                </Button>
                            </NavItem>
                        </Nav>
                        </Collapse>
                    </div>
                </Navbar>

                <Jumbotron>
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12 col-sm-5">
                                <h1>DELICIOUS DINER</h1> <br/>
                                <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat".</p>
                                <Button>
                                    Book a Table 
                                </Button>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
                <Modal isOpen={this.state.isLoginModalOpen}
                toggle={this.toggleLoginModal}>
                    <ModalHeader toggle={this.toggleLoginModal}>Login
                    </ModalHeader>
                    <ModalBody>
                        <LocalForm onSubmit={(values) => this.handleLoginSubmit(values)}>
                        <Row className="form-group">
                        <Label htmlFor="email" md={12}>Email:</Label>
                        <Col md={12}>
                            <Control.text model=".email" id="email" name="email"
                            placeholder="E-mail"
                            className="form-control">
                            </Control.text>
                        </Col>
                        </Row>

                        <Row className="form-group">
                        <Label htmlFor="password" md={12}>Password:</Label>
                        <Col md={12}>
                            <Control.password model=".password" id="passowrd" name="password"
                            placeholder="Password"
                            className="form-control">
                            </Control.password>
                        </Col>
                        </Row>

                        <Row className="form-group">
                                <Col md={{size:10}}>
                                    <Button type="submit" color="primary">
                                    Submit
                                    </Button>
                                </Col>
                            </Row>

                        </LocalForm>
                    </ModalBody>

                </Modal>
            </React.Fragment>
        );
    }
}

export default Header;