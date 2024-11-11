import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'; // Импортируем стили
import instagramIcon from './img/instagram.svg';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // закрывание мобильного меню при клике на пункт меню
  const toggleMenu = () => setIsMenuOpen((isMenuOpen) => !isMenuOpen);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
    return (
      <div>
      <header className="header">
        <div className='menu'>
          <NavLink to="/" className="menu__logo">
            <p>Anyuta Mishalova</p>
          </NavLink>
        <div className="menu__toggle" onClick={handleMenuToggle}>
          ☰
        </div>
        <nav className={`menu__items ${isMenuOpen ? 'menu__items--open' : ''}`}>
          <ul className="menu__list">
            <NavLink/>
            <li className="menu__item"><NavLink to="/" onClick={toggleMenu}>Home</NavLink></li>
            <li className="menu__item"><NavLink to="/gallery" onClick={toggleMenu}>Gallery</NavLink></li>
            <li className="menu__item"><NavLink to="/streetstyle" onClick={toggleMenu}>Street style</NavLink></li>
            <li className="menu__item"><NavLink to="/nature" onClick={toggleMenu}>Nature</NavLink></li>
            <li className="menu__item"><NavLink to="/milkbath" onClick={toggleMenu}>Milkbath</NavLink></li>
            <li className="menu__item"><NavLink to="/studio" onClick={toggleMenu}>Studio photos</NavLink></li>
            <li className="menu__item"><NavLink to="/restaurants" onClick={toggleMenu}>Restaurants</NavLink></li>
            <li className="menu__item"><NavLink to="/contacts" onClick={toggleMenu}>Contacts</NavLink></li>
          </ul>
          <div className="menu__socials">
            <a href="https://www.instagram.com/anyuta.mishalova" target="_blank" rel="noopener noreferrer">
                <img src={instagramIcon} alt="" />
            </a>
          </div>
        </nav>
        </div>
      </header>
      </div>
    );
  };
  
  export default Header;
