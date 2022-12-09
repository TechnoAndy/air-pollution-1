import { useEffect } from "react";
import { Button, Container } from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { NavLink } from "react-router-dom";
import { fetchCountries, filteredCountries } from "../Redux/Reducers/Countries";

const Home = () => {
  let countryName;

  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countryReducer);

  useEffect(() => {
    dispatch(fetchCountries());
  }, [dispatch]);

  return (
    <div className="home">
      <div className="countrySearchBox">
        <input className="countrySearch" type="text" placeholder="Country Name" value={countryName} onChange={(e) => { countryName = (e.target.value); }} />
        <Button
          variant="secondary"
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
            <img src="./africa.png" alt="Map Of Africa" />
          </div>
          <h1>
            Quality of air in<br></br> Africa.
          </h1>
        </header>
      </div>

      <Container className="home-countries">
        {countries.map((country) => (
          <div key={uuidv4()} className="countryInfo">
              <div className="card-text">
                <div className="home-card-heading">{country.name}</div>
                <div className="card-body">
                  {country.countrycode} <br />
                  {country.region}
                </div>
                <button>
                  <NavLink
                    className="nav-link "
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
