import { useSelector } from 'react-redux';
import React, { useState } from 'react';
import { BallTriangle } from 'react-loader-spinner';
import Header from './Header';
import City from './City';

const Home = () => {
  let sortedCity = [];
  const { cityList, loading } = useSelector((state) => state.citys);
  const [searchKey, setSearchKey] = useState('');

  function handleSearch(event) {
    setSearchKey(event.target.value.toLowerCase());
  }

  sortedCity = cityList
    .filter((data) => data.city.toLowerCase().includes(searchKey))
    .map((cityData) => <City key={cityData.id} cityData={cityData} />)
    .sort((a, b) => (a.population > b.population ? -1 : 1));
  return (
    <>
      <Header title="AQI monitor" />
      <section className="citys-state-section">
        {loading === 'fulfilled' ? (
          <>
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
          </>
        ) : (
          <article className="ball-triangle-loading">
            <BallTriangle
              height={100}
              width={100}
              radius={5}
              color="#fff"
              ariaLabel="ball-triangle-loading"
              className="ball-triangle-loading"
              visible
            />
          </article>
        )}
      </section>
    </>
  );
};
export default Home;
