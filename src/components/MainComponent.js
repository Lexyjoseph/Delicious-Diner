import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { EVENTS } from '../shared/events';
import { DISHES } from '../shared/dishes';
import { BLOGS } from '../shared/blogs';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './HomeComponent';

class Main extends Component {
    constructor (props) {
        super (props);

        this.state = {
            dishes: DISHES,
            events: EVENTS,
            blogs: BLOGS
        };
    }
    render() {
        
        const HomePage =() => {
            return(
                <Home>
                    dish = {this.state.dishes.filter((dish) => dish.featured)[0]}
                    event = {this.state.events.filter((even) => even.featured)[0]}
                    blog = {this.state.blogs.filter((blo) => blo.featured)[0]}
                </Home>
            )
        }

        return (
            <div>
                <Header />
                <Routes>
                    <Route path="/home" element={HomePage} />
                </Routes>
                <Footer /> 
            </div>
        );
    }
}

export default Main;
