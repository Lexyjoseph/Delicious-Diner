import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';

import { LEADERS } from '../shared/leaders';

import { Switch, Route, Redirect } from 'react-router-dom';


class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
          leaders: LEADERS
        };
      }

    
    render() {
        
        return (
            <div>
                <Header />
                <Switch>
                <Route path="/home" component={Home} />
                <Route exact path='/about' component={()=> <About leaders={this.state.leaders}/>}/>                <Route exact path='/contactus' component={Contact} />
                <Redirect to="/home" />       
                </Switch>
                <Footer /> 
            </div>
        );
    }
}

export default Main;
