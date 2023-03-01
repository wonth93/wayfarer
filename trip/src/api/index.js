import axios from "axios";

export const getWeatherData = async () => {
  try {
    const { data } = await axios.get(
      "https://api.openweathermap.org/data/2.5/weather?"
    );
  } catch (error) {
    console.log(error);
  }
};
