import React, { useState } from 'react';
import axios from 'axios';

import './Register.scss';

const Register = () => {
  const [formRegister, setFormRegister] = useState({
    firstname: '',
    lastname: '',
    nickname: '',
    description: '',
    email: '',
    password: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/api/users', formRegister)
    .then(res => res.data)
    .then(res => alert('Votre inscription a été validé. Bienvenue !'))
    .catch(error => {
      if(!formRegister.firstname || !formRegister.lastname || !formRegister.nickname || !formRegister.description || !formRegister.email || !formRegister.password){
          console.log(error);
          alert(`Erreur lors de votre inscription : ${error.message}`);
      }
    });
    setFormRegister({
      firstname: '',
      lastname: '',
      nickname: '',
      description: '',
      email: '',
      password: ''
    })
  };

  const handleChange = (e) => {
    setFormRegister({
      ...formRegister,
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
              Prénom
            </label>
            <input
              id="firstname"
              name="firstname"
              type="text"
              value={formRegister.firstname}
              placeholder="Alexis"
              onChange={handleChange}
              required
            />
          </div>

          <div className="ContainerFormElem">
            <label
              htmlFor="lastname"
            >
              Nom
            </label>
            <input
              id="lastname"
              name="lastname"
              type="text"
              value={formRegister.lastname}
              placeholder="DUPONT"
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

        <div className="ContainerInfoMiscellanous">
          <div className="ContainerFormElem">
            <label
              htmlFor="nickname"
            >
              Nickname
            </label>
            <input
              id="nickname"
              name="nickname"
              type="text"
              value={formRegister.nickname}
              placeholder="Jeandu33"
              onChange={handleChange}
              required
            />
          </div>

          <div className="ContainerFormElem">
            <label
              htmlFor="description"
            >
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={formRegister.description}
              placeholder="Votre texte..."
              onChange={handleChange}
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