import React, { Component } from "react";
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron,
    Button, Modal, ModalHeader, ModalBody,
    Row, Col, Label, NavLink} from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';



//For Form Validation:
const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);
const isNumber = (val) => !isNaN(Number(val));
const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);


class Header extends Component {

    constructor(props) {
        super(props);
        this.state={
            isNavOpen: false,
            isLoginModalOpen: false,
            isSignupModalOpen: false,
            isBookingModalOpen: false
        }
        this.toggleNav = this.toggleNav.bind(this);
        this.toggleLoginModal = this.toggleLoginModal.bind(this);
        this.toggleSignupModal = this.toggleSignupModal.bind(this);
        this.toggleBookingModal = this.toggleBookingModal.bind(this);
        this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
        this.handleSignupSubmit = this.handleSignupSubmit.bind(this);
        this.handleBookingFormSubmit = this.handleBookingFormSubmit.bind(this);

   
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

    toggleSignupModal() {
        this.setState({
            isSignupModalOpen: !this.state.isSignupModalOpen
        });
    }

    toggleBookingModal() {
        this.setState({
            isBookingModalOpen: !this.state.isBookingModalOpen
        });
    }


    handleLoginSubmit(values) {
        console.log('Current State is: ' + JSON.stringify(values));
        alert('Current State is: ' + JSON.stringify(values));
    }

    handleSignupSubmit(values) {
        console.log('Current State is: ' + JSON.stringify(values));
        alert('Current State is: ' + JSON.stringify(values));
    }

    handleBookingFormSubmit(values){
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
                                <NavLink className="nav-link" to="/home"> &nbsp; &nbsp; &nbsp;
                                    Home
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link"  to='/menu'> &nbsp; &nbsp; &nbsp;
                                    Menu
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                    <NavLink className="nav-link" to='/aboutus'> &nbsp; &nbsp; &nbsp;
                                        About
                                    </NavLink>
                                </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to='/contactus'>&nbsp; &nbsp; &nbsp;
                                    Contact
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
                                <Button outline onClick={this.toggleSignupModal}> 
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
                                <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat".</p><br/>
                                <Button outline onClick={this.toggleBookingModal}>
                                    Reserve Table 
                                </Button>
                            </div>
                        </div>
                    </div>
                </Jumbotron>

                {/* LOGIN MODAL: */}

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
                            className="form-control"
                            validators={{
                                required, validEmail
                            }}>
                            </Control.text>
                            <Errors
                                className="text-danger"
                                model=".email"
                                show="touched"
                                messages={{
                                required: 'Required ',
                                validEmail: 'Invalid Email Address'
                                }}
                            />
                        </Col>
                        </Row>
                        <Row className="form-group">
                        <Label htmlFor="password" md={12}>Password:</Label>
                        <Col md={12}>
                            <Control.password model=".password" id="passowrd" name="password"
                            placeholder="Password"
                            className="form-control"
                            validators={{
                                required
                            }}>
                            </Control.password>
                            <Errors
                                className="text-danger"
                                model=".password"
                                show="touched"
                                messages={{
                                required: 'Required '
                                }}
                            />
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

                {/* SIGNUP MODAL: */}

                <Modal isOpen={this.state.isSignupModalOpen}
                toggle={this.toggleSignupModal}>
                    <ModalHeader toggle={this.toggleSignupModal}>Sign Up
                    </ModalHeader>
                    <ModalBody>
                        <LocalForm onSubmit={(values) => this.handleSignupSubmit(values)}>
                        <Row className="form-group">
                        <Label htmlFor="firstname" md={12}>First Name</Label>
                        <Col md={12}>
                            <Control.text model=".firstname" id="firstname" name="firstname"
                            placeholder="First Name"
                            className="form-control"
                            validators={{
                                required, minLength: minLength(3), maxLength:maxLength(15)
                            }}>
                            </Control.text>
                            <Errors
                                className="text-danger"
                                model=".firstname"
                                show="touched"
                                messages={{
                                    required: 'Required ',
                                    minLength:'Must be greater than 2 characters',
                                    maxLength: 'Must be 15 characters or less'
                                }}
                            />
                        </Col>
                        </Row>
                        <Row className="form-group">
                        <Label htmlFor="lastname" md={12}>Last Name</Label>
                        <Col md={12}>
                            <Control.text model=".lastname" id="lastname" name="lastname"
                            placeholder="Last Name"
                            className="form-control"
                            validators={{
                                required, minLength: minLength(3), maxLength:maxLength(15)
                            }}>
                            </Control.text>
                            <Errors
                                className="text-danger"
                                model=".lastname"
                                show="touched"
                                messages={{
                                    required: 'Required ',
                                    minLength:'Must be greater than 2 characters',
                                    maxLength: 'Must be 15 characters or less'
                                }}
                            />
                        </Col>
                        </Row>
                        <Row className="form-group">
                                <Label htmlFor="telnum" md={12}>Contact Number:</Label>
                                <Col md={12}>
                                    <Control.text model=".telnum" id="telnum" name="telnum"
                                        placeholder="Tel. Number"
                                        className="form-control"
                                        validators={{
                                            required, isNumber
                                        }}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".telnum"
                                        show="touched"
                                        messages={{
                                            required: 'Required ',
                                            isNumber: 'Must be a number'
                                        }}
                                     />
                                </Col>
                        </Row>
                        <Row className="form-group">
                        <Label htmlFor="email" md={12}>Email:</Label>
                        <Col md={12}>
                            <Control.text model=".email" id="email" name="email"
                            placeholder="E-mail"
                            className="form-control"
                            validators={{
                                required, validEmail
                            }} >
                            </Control.text>
                            <Errors
                                className="text-danger"
                                model=".email"
                                show="touched"
                                messages={{
                                    required: 'Required ',
                                    validEmail: 'Invalid Email Address'
                                }}
                            /> 
                        </Col>
                        </Row>
                        <Row className="form-group">
                        <Label htmlFor="password" md={12}>Password:</Label>
                        <Col md={12}>
                            <Control.password model=".password" id="passowrd" name="password"
                            placeholder="Password"
                            className="form-control" 
                            validators={{
                                required
                            }} >
                            </Control.password>
                            <Errors
                                className="text-danger"
                                model=".password"
                                show="touched"
                                messages={{
                                required: 'Required ',
                                }}
                            /> 
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

                {/* Booking Table MODAL: */}
                <Modal isOpen={this.state.isBookingModalOpen}
                toggle={this.toggleBookingModal}>
                    <ModalHeader toggle={this.toggleBookingModal}>
                        Reservation Form:
                    </ModalHeader>
                    <ModalBody>
                        <LocalForm onSubmit={(values) => this.handleBookingFormSubmit(values)} >
                        <Row className="form-group">
                        <Label htmlFor="fullname" md={12}>Enter your Full Name:</Label>
                        <Col md={12}>
                            <Control.text model=".fullname" id="fullname" name="fullname"
                            placeholder="Full Name"
                            className="form-control"
                            validators={{
                                required, minLength: minLength(3), maxLength:maxLength(15)
                            }}>
                            </Control.text>
                            <Errors
                                className="text-danger"
                                model=".fullname"
                                show="touched"
                                messages={{
                                    required: 'Required ',
                                    minLength:'Must be greater than 2 characters',
                                    maxLength: 'Must be 15 characters or less'
                                }}
                            />
                        </Col>
                        </Row>

                        <Row className="form-group">
                            <Label htmlFor="guestsnumber" md={12}>Number of Guests:</Label>

                                    <Col md={12}>
                                        <Control.select model=".guestsnumber" name="guestsnumber" id="guestsnumber"
                                            className="form-control"
                                            validators={{
                                                required
                                            }}>
                                            <option>Select</option>
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                            <option>6</option>
                                        </Control.select>
                                        <Errors
                                            className="text-danger"
                                            model=".guestsnumber"
                                            show="touched"
                                            messages={{
                                                required: 'Required ',                                            
                                            }} >
                                        </Errors>
                                    </Col>
                        </Row>

                        <Row className="form-group">
                                <Label htmlFor="date" md={12}>Select the date(dd-mm-yyyy):</Label>
                                <Col md={12}>
                                    <Control.text model=".date" id="date" name="date"
                                        placeholder="Enter the date"
                                        className="form-control"
                                        validators={{
                                            required
                                        }}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".date"
                                        show="touched"
                                        messages={{
                                            required: 'Required '
                                        }}
                                     />
                                </Col>
                        </Row>
                        
                        <Row className="form-group">
                                <Label htmlFor="telnum" md={12}>Contact Number:</Label>
                                <Col md={12}>
                                    <Control.text model=".telnum" id="telnum" name="telnum"
                                        placeholder="Tel. Number"
                                        className="form-control"
                                        validators={{
                                            required, isNumber
                                        }}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".telnum"
                                        show="touched"
                                        messages={{
                                            required: 'Required ',
                                            isNumber: 'Must be a number'
                                        }}
                                     />
                                </Col>
                        </Row>

                        <Row className="form-group">
                        <Label htmlFor="email" md={12}>Email:</Label>
                        <Col md={12}>
                            <Control.text model=".email" id="email" name="email"
                            placeholder="E-mail"
                            className="form-control"
                            validators={{
                                required, validEmail
                            }} >
                            </Control.text>
                            <Errors
                                className="text-danger"
                                model=".email"
                                show="touched"
                                messages={{
                                    required: 'Required ',
                                    validEmail: 'Invalid Email Address'
                                }}
                            /> 
                        </Col>
                        </Row>

                        <Row className="form-group">
                                <Col md={{size:10}}>
                                    <Button type="submit" color="primary">
                                    Reserve
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