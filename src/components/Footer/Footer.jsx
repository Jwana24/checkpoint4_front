// modules
import React from 'react';
import { Link } from 'react-router-dom';

// compponents
import { ReactComponent as Discord } from '../../Icons/discord.svg';
import { ReactComponent as Facebook } from '../../Icons/facebook.svg';
import { ReactComponent as Twitter } from '../../Icons/twitter.svg';
import { ReactComponent as Twitch } from '../../Icons/twitch.svg';

// css
import './Footer.scss';

const Footer = () => {
  return(
    <div className="Footer">
      <div className="FooterContainer">
        <div className="ContainerTitleNavbar ContainerContentFooter">
          <Link to="/">
            SoGames
          </Link>
          <small className="LightText">© Site réalisé par Johanna Détrieux - 2020</small>
        </div>

        <div className="ContainerUsefulLinks ContainerContentFooter">
          <h4>Liens utiles :</h4>
          <Link to="/" className="LightText">
            Mentions légales
          </Link>
          <Link to="/" className="LightText">
            Politiques de confidentialités
          </Link>
        </div>

        <div className="ContainerSocialNetworks">
          <h4>Réseaux sociaux :</h4>
          <div className="ContainerIconsNetworks">
            {/* <img className="IconNetwork twitch" src={require('../../Icons/twitch.png')} />
            <img className="IconNetwork" src={require('../../Icons/facebook.png')} />
            <img className="IconNetwork" src={require('../../Icons/twitter.png')} />
            <img className="IconNetwork" src={require('../../Icons/discord.png')} /> */}
            <Twitch className="IconNetwork twitch" />
            <Facebook className="IconNetwork facebook" />
            <Twitter className="IconNetwork twitter" />
            <Discord className="IconNetwork discord" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;