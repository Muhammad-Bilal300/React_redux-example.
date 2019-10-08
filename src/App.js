import React from 'react';
import './App.css';
import Home from './Componets/Home/home';
import About from './Componets/About/about';
import Contacts from './Componets/Contacts/contacts';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends React.Component {


  render() {

    return (
      <Router>
        <div className="container-fluid">
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/contacts" exact component={Contacts} />

        </div>
      </Router>
    )
  }
}

export default App;
