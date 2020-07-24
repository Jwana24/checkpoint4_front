// modules
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// components
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Article from './components/Article/Article';
import FilterGame from './components/FilterGame/FilterGame';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import PrivateRoute from './components/Private/PrivateRoute';
import Profile from './components/Private/Profile/Profile';

// css
import './App.css';

const App = () => {
  const [userConnected, setUserConnected] = useState(false);

  useEffect(() => {
    checkConnected();
  }, [])

  const checkConnected = () => {
    if(sessionStorage.getItem('info-user')){
      setUserConnected(true);
    }
    else{
      setUserConnected(false);
    }
  }

  return (
    <Router>
      <Switch>
        <div className="App">
          <Navbar userConnected={userConnected} checkConnected={checkConnected} />
          <Route exact path="/" component={FilterGame} />
          <Route path="/articles" component={Article} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={() => <Login checkConnected={checkConnected} />} />
          <PrivateRoute path="/profile">
            <Profile />
          </PrivateRoute>
          <Footer />
        </div>
      </Switch>
    </Router>
  );
}

export default App;
