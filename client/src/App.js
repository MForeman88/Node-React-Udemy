import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from './actions';

import Header from './components/Header';
const Home = () => <h2>Home</h2>;
const Reminder = () => <h2>Reminders</h2>;

class App extends Component {
    componentDidMount() {
        this.props.fetchUser();
    }
    render() {
        return (
            <div className="container">
                <BrowserRouter>
                    <div>
                    <Header />
                    <Route exact path="/"  component={Home}/>
                    <Route exact path="/reminders" component={Reminder} />
                    </div>
                </BrowserRouter>
            </div>
        );
    }
};


export default connect(null, actions)(App);