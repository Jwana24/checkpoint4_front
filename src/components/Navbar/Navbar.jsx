import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import './Navbar.css';

const Navbar = ({ userConnected, checkConnected }) => {
  const [open, setOpen] = useState(false);

  let history = useHistory();

  const logout = () => {
    sessionStorage.removeItem("info-user");
    sessionStorage.removeItem("user");
    history.push('/');
    checkConnected();
  }

  return(
    <nav className="Navbar">
      <div className="ContainerTitleNavbar">
        <Link to="/home" className="TitleNavbar">
          SoGames
        </Link>
      </div>
      <div className="ContainerLinksNavbar">
        <div className="ContainerLinksElemNavbar">
          {userConnected &&
            <Link to="/profile" className="LinkElemNavbar ProfileLink">
              Profil
            </Link>
          }
          <Link to="/" className="LinkElemNavbar JeuLink">
            Accueil
          </Link>
          <Link to="/articles" className="LinkElemNavbar ArticleLink">
            Articles
          </Link>
        </div>
        <div className="ContainerConnection">
          {userConnected
            ?<h3 onClick={logout}>Déconnexion</h3>
            :<h3 onClick={() => setOpen(!open)}>Connexion</h3>
          }
          <div
            className={`ContainerConnectionElements ${open ? 'ElemDisplay' : 'ElemHide'}`}
          >
            <div>
              <Link to="/login" className="ConnectionBtn">
                Connexion
              </Link>
            </div>
            <div>
              <Link to="/register" className="ConnectionBtn">
                Inscription
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;