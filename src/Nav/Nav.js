import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Nav.css';

function Nav({ isLoggedIn, handleLogout }) {
  const { t } = useTranslation();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    // Допустим, здесь происходит отправка данных для авторизации
    // После успешной авторизации устанавливаем состояние isAuthenticated в true
    setIsAuthenticated(true);
  };

  const handleLogoutClick = () => {
    // Здесь происходит выход из аккаунта
    // После выхода устанавливаем состояние isAuthenticated в false
    setIsAuthenticated(false);
    handleLogout(); // вызываем переданную в props функцию для выполнения дополнительных действий
  };

  return (
    <div className="header-nav">
      <div className="container">
        <nav>
          <ul>
            <li><NavLink exact={'true'} to="/">{t('nav.home')}</NavLink></li>
            <li><NavLink to="/news">{t('nav.news')}</NavLink></li>
            <li><NavLink to="/about">{t('nav.contacts')}</NavLink></li>
            {isLoggedIn ? (
              <>
                <li><NavLink to="/profile">{t('nav.profile')}</NavLink></li>
                <li><button onClick={handleLogoutClick}>{t('nav.logout')}</button></li>
              </>
            ) : (
              <li><NavLink to="/login">{t('nav.login')}</NavLink></li>
            )}
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Nav;