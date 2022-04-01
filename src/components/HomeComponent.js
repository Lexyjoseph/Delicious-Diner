import React from "react";
import { Card, CardImg, CardTitle, CardBody } from 'reactstrap';

function RenderHighlights ({item}) {
    return (
        <Card>
            <CardImg src={item.image} alt={item.name} />
            <CardTitle>{item.name}</CardTitle>
            <CardBody>
                {item.description}
            </CardBody>
        </Card>
    );
}

function Home(props) {
    return(
        <div className="container">
            <div className="row align-items-start">
                <div className="col-12 col-md m-1">
                    <RenderHighlights item={props.dish} />
                </div>
                <div className="col-12 col-md m-1">
                    <RenderHighlights item={props.event} />
                </div>
                <div className="col-12 col-md m-1">
                    <RenderHighlights item={props.blog} />
                </div>
            </div>
        </div>
    );
}

export default Home;