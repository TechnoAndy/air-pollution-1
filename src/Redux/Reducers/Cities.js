import { createAsyncThunk } from '@reduxjs/toolkit';

const url = 'https://countriesnow.space/api/v0.1/countries/cities';
const FETCH_CITY = 'FETCH_CITY';

export const fetchCities = createAsyncThunk(
  FETCH_CITY,
  async (city) => {
    const data = await (fetch(url, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify({
        country: city,
      }),
    }).then((res) => res.json())
      .then((output) => output));
    return data;
  },
);

const citiesReducer = (state = [], action) => {
  switch (action.type) {
    case `${FETCH_CITY}/fulfilled`: {
      return action.payload;
    }

    default:
      return state;
  }
};

export default citiesReducer;