import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './Navbar.css';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  

  return(
    <nav className="Navbar">
      <div className="ContainerTitleNavbar">
        <Link to="/home" className="TitleNavbar">
          SoGames
        </Link>
      </div>
      <div className="ContainerLinksNavbar">
        <div className="ContainerLinksElemNavbar">
          <Link to="/articles" className="LinkElemNavbar ArticleLink">
            Articles
          </Link>
          <Link to="/games" className="LinkElemNavbar JeuLink">
            Jeux
          </Link>
        </div>
        <div className="ContainerConnection">
          <h3 onClick={() => setOpen(!open)}>Connexion</h3>
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