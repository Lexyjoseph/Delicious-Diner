import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

const Home = (props) => {
    return(
        <div className="container">
            <div className="row align-items-start">
                <div className="col-12 col-md m-1">
                    <Card>
                        <CardImg src="/assets/images/burger.jpg" alt="Burger"/>
                        <CardBody>
                            <CardTitle>Mexican Burger</CardTitle>
                            <CardSubtitle>The iconic one</CardSubtitle>
                            <CardText>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</CardText>
                            <Button>See details</Button>
                        </CardBody>
                    </Card>
                </div>

                <div className="col-12 col-md m-1">
                    <Card>
                        <CardImg src="/assets/images/blog1.jpg" alt="Burger"/>
                        <CardBody>
                            <CardTitle>Weekend Buffet</CardTitle>
                            <CardSubtitle>Enjoy our weekend fest</CardSubtitle>
                            <CardText>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</CardText>
                            <Button>Know more</Button>
                        </CardBody>
                    </Card>
                </div>

                <div className="col-12 col-md m-1">
                    <Card>
                        <CardImg src="/assets/images/blog1.jpg" alt="Burger"/>
                        <CardBody>
                            <CardTitle>Blog</CardTitle>
                            <CardSubtitle>Read our Blog</CardSubtitle>
                            <CardText>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</CardText>
                            <Button>Read More</Button>
                        </CardBody>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default Home;