import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import settings from '../assets/settings.svg';
import back from '../assets/back.svg';

function Header({ title }) {
  return (
    <header className="main-header">
      <div className="main-left-back-area">
        {title !== 'AQI monitor' && (
          <Link className="back-btn btn" type="button" to="/">
            <img
              src={back}
              width="20px"
              height="20px"
              alt="back icon"
              className="back-img"
            />
          </Link>
        )}
      </div>
      <h1 className="main-title">{title}</h1>
      <div className="main-utils">
        <button className="settings btn" type="button">
          <img
            src={settings}
            width="20px"
            height="20px"
            alt="settings icon"
            className="setting-img"
          />
        </button>
      </div>
    </header>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
