import React, { useState } from 'react';

import './Register.css';

const Register = () => {
  const [formRegister, setFormRegister] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    setFormRegister({
      [e.target.name]: e.target.value
    });
  };

  return(
    <div className="Register">
      <h1>Inscription</h1>
      <form onSubmit={handleSubmit} noValidate>
        <div className="ContainerNames">
          <div className="ContainerFormElem">
            <label
              htmlFor="firstname"
            >
              Nom
            </label>
            <input
              id="firstname"
              name="firstname"
              type="text"
              value={formRegister.firstname}
              placeholder="DUPONT"
              onChange={handleChange}
              required
            />
          </div>

          <div className="ContainerFormElem">
            <label
              htmlFor="lastname"
            >
              Prénom
            </label>
            <input
              id="lastname"
              name="lastname"
              type="text"
              value={formRegister.lastname}
              placeholder="Jean"
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="ContainerIdentifiers">
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
              value={formRegister.email}
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
              value={formRegister.password}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <input
          className="ConnectionBtn"
          id="submit"
          type="submit"
          value="M'inscrire"
        />
      </form>
    </div>
  )
}

export default Register;