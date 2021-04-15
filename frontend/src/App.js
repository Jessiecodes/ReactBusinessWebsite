import React, {useState} from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/HomePage/Home';
import Services from './components/pages/Services/Services';
import Apply from './components/pages/Apply/Apply';
import Contact from './components/pages/Contact/Contact';
import Imagery from './components/Imagery/Images';
import Footer from './components/Footer/Footer';
import axios from 'axios';



function App() {
  
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/services' component={Services} />
        <Route path='/contact' component={Contact} />
        <Route path='/apply' component={Apply} />
        <Route path='/gallery' component={Imagery} />
    
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
