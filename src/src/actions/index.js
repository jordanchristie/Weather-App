import axios from 'axios';

const API_KEY = '5f3d81a47e6a505b0554326902a8c807';
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?&appid=${API_KEY}`


export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`

  const request = axios.get(url);

  return {
      type: FETCH_WEATHER,
      payload: request
  }
}