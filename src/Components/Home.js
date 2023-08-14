import { useEffect } from 'react';
import { Button, Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { NavLink } from 'react-router-dom';
import { fetchCountries, filteredCountries } from '../Redux/Reducers/Countries';

const Home = () => {
  let countryName;

  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countryReducer);

  useEffect(() => {
    dispatch(fetchCountries());
  }, [dispatch]);

  return (
    <div className="home">
      <div className="searchBoxOuter">
        <input
          className="countrySearch"
          type="text"
          placeholder="Country Name"
          value={countryName}
          onChange={(e) => {
            countryName = e.target.value;
          }}
        />
        <Button
          type="button"
          onClick={async () => {
            await dispatch(fetchCountries());
            dispatch(filteredCountries(countryName));
          }}
        >
          Search
        </Button>
      </div>
      <div className="home-heading">
        <header>
          <div className="map-image">
            <img src="./aerial-africa.png" alt="Map Of Africa" />
          </div>
          <div className="map-heading">
            <h1>
              Quality of air in
              <br />
              Africa.
            </h1>
          </div>
        </header>
      </div>

      <Container className="home-countries">
        {countries.map((country) => (
          <div key={uuidv4()} className="countryInfo">
            <div className="card-t">
              <div className="home-card-heading">{country.name}</div>
              <div className="card-body">
{/*                 {country.countrycode}
                <br />
                {country.region} */}
              </div>
              <button type="submit">
                <NavLink
                  className="country-box "
                  to="/city"
                  state={{
                    info: country,
                  }}
                >
                  Visit Cities
                </NavLink>
              </button>
            </div>
          </div>
        ))}
      </Container>
    </div>
  );
};

export default Home;
