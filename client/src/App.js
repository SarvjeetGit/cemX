import React, { Fragment } from 'react';
import './App.css';
// import './App2.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Details2 from './components/Details2';
import AdminPanel from './components/AdminPanel';

import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';
const App = () => (
    <Router>
        <Fragment>
            <div className='main'>
                <Header />
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/details' component={Details2} />
                    {/* <Route
                        exact
                        path='/details'
                        render={(props) => <Details {...props} />}
                    /> */}
                    <Route exact path='/admin' component={AdminPanel} />
                </Switch>
            </div>
            <Footer />
        </Fragment>
    </Router>
);

export default App;
