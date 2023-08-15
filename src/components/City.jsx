import React from 'react';
import PropTypes from 'prop-types';
import millify from 'millify';
import right from '../assets/right.svg';

function City({ city, country, population }) {
  return (
    <li className="city-list-item">
      <p className="city-name">
        {city}
        <br />
        <span>City</span>
      </p>
      <p className="country-name">
        {country}
        <br />
        <span>Country</span>
      </p>
      <p className="population">
        {millify(population)}
        <br />
        <span>Population</span>
      </p>
      <button className="see-more btn" type="button">
        See AQI
        <img src={right} width="20px" height="20px" alt="right arrow" />
      </button>
    </li>
  );
}

City.defaultProps = {
  city: 'no data',
  country: 'no data',
  population: 0,
};

City.propTypes = {
  city: PropTypes.string,
  country: PropTypes.string,
  population: PropTypes.number,
};

export default City;
