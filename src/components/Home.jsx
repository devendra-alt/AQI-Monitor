import { useSelector } from 'react-redux';
import React, { useState } from 'react';
import Header from './Header';
import City from './City';

const Home = () => {
  let sortedCity = [];
  const { cityList } = useSelector((state) => state.citys);
  const [searchKey, setSearchKey] = useState('');

  function handleSearch(event) {
    setSearchKey(event.target.value.toLowerCase());
  }

  sortedCity = cityList
    .filter((data) => data.city.toLowerCase().includes(searchKey))
    .map((cityData) => (
      <City
        key={cityData.id}
        city={cityData.city}
        country={cityData.country}
        population={cityData.population}
      />
    ));

  return (
    <>
      <Header title="AQI monitor" />
      <section className="citys-state-section">
        <input
          type="text"
          name="city"
          id="city"
          className="seach-city-i"
          placeholder="Search any city"
          onChange={handleSearch}
        />
        {sortedCity.length > 0 ? (
          <ul className="city-list">{sortedCity}</ul>
        ) : (
          <h5 className="no-city-found-msg">No City Found</h5>
        )}
      </section>
    </>
  );
};
export default Home;
