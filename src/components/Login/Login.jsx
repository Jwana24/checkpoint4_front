import React, { useState } from 'react';

import './Login.css';

const Login = () => {
  const [formLogin, setFormLogin] = useState({
    email: '',
    password: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    setFormLogin({
      [e.target.name]: e.target.value
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
            placeholder="jean-d@gmail.com"
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