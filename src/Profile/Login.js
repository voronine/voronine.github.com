import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Profile.css';
import { useTranslation } from 'react-i18next';

const Login = ({ onLogin }) => {
    const { t, i18n } = useTranslation();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();

        if (username === 'admin' && password === '12345') {
            onLogin(username, navigate('/profile'));
        } else {
            alert('Ой Лишенько! Ввод невiрний! /Input is invalid!');
        }
    };

    return (
        <div className="Profile">
            <h1> {t('login.h1')}</h1>
            <form onSubmit={handleLogin}>
                <label>
                    {t('login.user')}
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                </label>
                <label>
                    {t('login.password')}
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </label>
                <button type="submit">  {t('login.authorization')}</button>
            </form>
        </div>
    );
};

export default Login;