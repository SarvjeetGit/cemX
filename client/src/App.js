import React, { Fragment } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Details from './components/Details';

import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';
const App = () => (
    <Router>
        <Fragment>
            <Header />
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/details' component={Details} />
            </Switch>

            <Footer />
        </Fragment>
    </Router>
);

export default App;
