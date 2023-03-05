import React from 'react';
import './Header.css';
import Nav from '../Nav/Nav';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '../i18n/LanguageSwitcher';


function Header({ isLoggedIn, handleLogout }) {
  const { t, i18n } = useTranslation();

  return (
    <header>
      <div className="top-bar animate-dropdown"></div>
      <div className="main-header">
        <div className="container">
          <h1 className="site-title">
            {t('header.siteTitle')}
          </h1>
          <LanguageSwitcher />
        </div>
      </div>
      <Nav isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
    </header>
  );
}

export default Header;