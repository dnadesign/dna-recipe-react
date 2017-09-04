import React, { Component } from 'react';
import { Route } from 'react-router-dom';

// React-helmet handles document head modifications
import { Helmet } from 'react-helmet';

// Constant elements
import Header from '../_header/Header';
import Footer from '../_footer/Footer';

// Pages
import Home from '../__views/home/Home';
import Contact from '../__views/contact/Contact';

// Style imports
import './App.scss';

class App extends Component {

    /**
    * This is the base document head configuration and will
    * get overridden by helmet calls in child components
    * @return {HTMLElement} Document Header
    */
    getHeader() {
        return (
            <Helmet>
                <meta charSet="utf-8" />
                <title>DNA React Recipe</title>
            </Helmet>
        );
    }

    render() {
        return (
            <div className="App">
                { this.getHeader }
                <Header />
                <main>
                    <Route exact path="/" component={ Home } />
                    <Route exact path="/contact" component={ Contact } />
                </main>
                <Footer />
            </div>
        );
    }
}

export default App;
