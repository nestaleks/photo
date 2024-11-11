import React from 'react';
import './Footer.css';
import instagramIcon from './img/instagram.svg';
import mailIcon from './img/mail.svg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__logo">
            <p>Anyuta Mishalova</p>
        </div>
        <div className="footer__links">
            <div className="footer__link">
                <img className='footer__social' src={mailIcon} alt="" />
                <a href="toffeedress@gmail.com">toffeedress@gmail.com</a>
            </div>
            <div className="footer__link">
                <img className='footer__social' src={instagramIcon} alt="" />
                <a href="https://www.instagram.com/anyuta.mishalova" target="_blank" rel="noopener noreferrer">anyuta.mishalova</a>   
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
 