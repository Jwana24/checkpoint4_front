// modules
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// components
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Article from './components/Article/Article';
import Game from './components/Game/Game';

// css
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/articles" component={Article} />
          <Route path="/games" component={Game} />
          <Footer />
        </div>
      </Switch>
    </Router>
  );
}

export default App;
