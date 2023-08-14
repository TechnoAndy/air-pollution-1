import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useLocation } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { fetchCities } from '../Redux/Reducers/Cities';
import '../App.css';

const Cities = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const countryInfo = location.state.info;
  useEffect(() => {
    dispatch(fetchCities(countryInfo.name));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);
  const cities = useSelector((state) => state.citiesReducer);

  return (
    <section>
      <div className="countryInfoContainer">
        <div>
          <div className="countryInfo">
            <h5 className="card-heading">{countryInfo.name}</h5>
            <p className="card-t">
              Capital:
              {countryInfo.capital[0]}
              <br />
              Cities:
              {cities.data?.length}
              <br />
            </p>
            <p className="card-text">
              Region:
              {countryInfo.region}
            </p>
          </div>
        </div>
        {cities.data?.map((city) => (
          <div className="cityBlockContainer" key={uuidv4()}>
            <div className="cityBlock">
              <div className="city-headline">{city}</div>
            </div>
            <div className="load-data-btn">
              <button type="submit">
                <NavLink
                  className="nav-link"
                  to="/pollutiondata"
                  state={{
                    cityname: city,
                    countryname: countryInfo.countrycode,
                  }}
                >
                  Load Data
                </NavLink>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Cities;
