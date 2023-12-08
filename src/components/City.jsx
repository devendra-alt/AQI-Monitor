import React from 'react';
import PropTypes from 'prop-types';
import millify from 'millify';
import { Link } from 'react-router-dom';
import right from '../assets/right.svg';

const City = ({ cityData }) => (
  <li className="city-list-item" aria-label="city">
    <p className="city-name">
      {cityData.city}
      <br />
      <span>City</span>
    </p>
    <p className="country-name">
      {cityData.country}
      <br />
      <span>Country</span>
    </p>
    <p className="population">
      {millify(cityData.population)}
      <br />
      <span>Population</span>
    </p>
    <Link
      className="see-more"
      type="button"
      to="/city"
      state={{ cityData }}
      data-testid={cityData.id}
    >
      See AQI
      <img src={right} width="20px" height="20px" alt="right arrow" />
    </Link>
  </li>
);

City.defaultProps = {
  cityData: {},
};

City.propTypes = {
  cityData: PropTypes.shape({
    city: PropTypes.string,
    country: PropTypes.string,
    population: PropTypes.number,
    lat: PropTypes.number,
    lng: PropTypes.number,
    id: PropTypes.number,
  }),
};

export default City;
