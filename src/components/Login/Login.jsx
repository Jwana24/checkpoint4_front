// modules
import React, { useState } from 'react';
import axios from 'axios';
import jwt from 'jsonwebtoken';
import { useHistory } from 'react-router-dom';

// css
import './Login.scss';

const Login = (props) => {
  const [formLogin, setFormLogin] = useState({
    email: '',
    password: ''
  });

  let history = useHistory();

  const handleChange = (e) => {
    setFormLogin({
      ...formLogin,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/api/users/login', formLogin, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then(res => {
      const decoded = jwt.decode(res.data.token);
      const dataUser = decoded.user[0];

      if(res.data.token){
        sessionStorage.setItem("user", res.data.token);
        sessionStorage.setItem("info-user", JSON.stringify(dataUser));
        history.push('/');
        props.checkConnected();
      }

      setFormLogin({
        email: '',
        password: ''
      });
    });
  };

  return(
    <div className="Login">
      <h1>Connexion</h1>
      <form onSubmit={handleSubmit} noValidate>
        <div className="ContainerFormElem">
          <label
            htmlFor="email"
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={formLogin.email}
            placeholder="jean-dupont@gmail.com"
            onChange={handleChange}
            required
          />
        </div>

        <div className="ContainerFormElem">
          <label
            htmlFor="password"
          >
            Mot de passe
          </label>
          <input
            id="password"
            name="password"
            type="password"
            value={formLogin.password}
            onChange={handleChange}
            required
          />
        </div>

        <input
          className="ConnectionBtn"
          id="submit"
          type="submit"
          value="Me connecter"
        />
      </form>
    </div>
  )
}

export default Login;