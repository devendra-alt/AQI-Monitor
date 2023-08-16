import React, { useEffect } from 'react';
import { BallTriangle } from 'react-loader-spinner';
import millify from 'millify';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAqiData } from '../redux/features/aqi';
import Header from './Header';
import happy from '../assets/happy.svg';
import sad from '../assets/sad.svg';

function CityDetails() {
  const location = useLocation();
  const { cityData } = location.state;
  const { aqiData } = useSelector((state) => state.aqi);
  const dispatch = useDispatch();
  useEffect(() => {
    const obj = {
      lat: cityData.lat,
      lon: cityData.lng,
    };
    dispatch(fetchAqiData(obj));
  }, [cityData.lat, cityData.lng, dispatch]);

  return (
    <>
      <Header title={cityData.city} />
      <section className="city-Details">
        <article className="general-info">
          {Object.keys(aqiData).length !== 0 ? (
            <div className="general-city-info">
              <div className="general-city-info-data">
                <p className="general-city-aqi-point">
                  {aqiData.list[0].main.aqi}
                  {aqiData.list[0].main.aqi > 2 ? (
                    <img src={sad} alt="sad-emoji" width="20px" />
                  ) : (
                    <img src={happy} alt="happy-emoji" width="20px" />
                  )}
                  <span>AQI</span>
                </p>
                <p className="general-city-name">
                  {cityData.city}
                  <span>City</span>
                </p>
                <p className="general-city-country">
                  {cityData.country}
                  <span>Country</span>
                </p>
                <p className="general-city-population">
                  {millify(cityData.population)}
                  <span>population</span>
                </p>
              </div>
              <h5 className="aqi-data-title">AQI Data</h5>
              <table className="aqi-data-table">
                <tbody>
                  {Object.keys(aqiData.list[0].components).map((key) => (
                    <tr key={key}>
                      <td>{key}</td>
                      <td>{aqiData.list[0].components[key]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
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
        </article>
      </section>
    </>
  );
}

export default CityDetails;
