import React from 'react';
import './Profile.css';
import { useTranslation } from 'react-i18next';

const Profile = ({ user }) => {
    const { t, i18n } = useTranslation();
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    const username = isLoggedIn ? user.name : '';


    return (
        <div className="Profile">
            <h1>{t('profile.h1')}</h1>
            <p>{t('profile.user')}: {username}</p>

        </div>
    );
};

export default Profile;