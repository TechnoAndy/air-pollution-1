import { createAsyncThunk } from '@reduxjs/toolkit';

const key = '&appid=aff53bd7154a6d1faefb6b53deac0c16';
const urlLatLon = 'https://api.openweathermap.org/geo/1.0/direct?q=';
const urlAirData = 'https://api.openweathermap.org/data/2.5/air_pollution/forecast?lat=';
const FETCH_AIRPOLLUTION = 'FETCH_AIRPOLLUTION';

export const airpollution = createAsyncThunk(
  FETCH_AIRPOLLUTION,
  async (obj) => {
    const data = await (fetch(`${urlLatLon}${obj.cityname},${obj.countryname}&limit=1${key}`)).then((res) => res.json());
    if (data.length !== 0) {
      const pollutiondata = await (fetch(`${urlAirData}${data[0].lat}&lon=${data[0].lon}&start=1669974100&end=1669974101${key}`)).then((res) => res.json());
      return pollutiondata.list;
    }

    return data;
  },
);

const pollutionReducer = (state = [], action) => {
  switch (action.type) {
    case `${FETCH_AIRPOLLUTION}/fulfilled`: {
      return action.payload;
    }

    default:
      return state;
  }
};

export default pollutionReducer;