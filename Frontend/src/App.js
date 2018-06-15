import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';

import Navbar from './components/layouts/Navbar';
import Footer from './components/layouts/Footer';

import FirstPage from './components/layouts/FirstPage';

import Login from './components/auth/Login';

import AddUser from './components/users/AddUser';

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <Navbar />
                    
                    <Route exact path="/" component={ FirstPage } />

                    <div className="container">

                        <Route exact path="/login" component={ Login }/>

                        <Route exact path="/user/add" component={ AddUser }/>

                    </div>

                    <Footer />
                </div>
            </Router>
        );
    }
}

export default App;
