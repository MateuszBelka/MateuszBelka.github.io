import React, { Component } from 'react';
import {
    HashRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom'; // Using HashRouter due to lack of pushState support on GH pages

import Header from "../components/Header/Header";
import Home from '../components/Home/Home';
import Projects from '../components/Projects/Projects';
import About from '../components/About/About';
import Resume from '../components/Resume/Resume';
import Footer from '../components/Footer/Footer';

import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

/*
  Implement HashRouting to allow subdirectories on gh pages
  https://levelup.gitconnected.com/deploying-a-create-react-app-with-routing-to-github-pages-f386b6ce84c2
  https://reacttraining.com/react-router/
*/

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <Switch>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route exact path="/projects/">
                            <Header />
                            <div className="horizontal-margin-large"><Projects /></div>
                            <Footer />
                        </Route>
                        <Route exact path="/resume/">
                            <Header />
                            <div className="horizontal-margin-large"><Resume /></div>
                            <Footer />
                        </Route>
                        <Route exact path="/about/">
                            <Header />
                            <div className="horizontal-margin-large"><About /></div>
                            <Footer />
                        </Route>
                        <Redirect from='*' to='/' />
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;
