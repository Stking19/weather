import axios from "axios";
import { toast } from "react-toastify";

const url = "https://weather-api-01pe.onrender.com/api/v1/weather";
export const getWeatherData = async (city, setWeatherData) => {
  try {
    const response = await axios.get(`${url}?city=${city}`);
    console.log(response);
    toast.success("Weather data fetched successfully");
    setWeatherData(response.data.data);
  } catch (error) {
    console.log(error);
    toast.error(error.response?.data?.message);
  }
};
