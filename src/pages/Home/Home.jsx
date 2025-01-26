import React, { useState } from "react";
import "./Home.css";
import Header from "../../components/header/Header";
import Search from "../../components/search/Search";
import Weather from "../../components/weather/Weather";
import Intro from "../../components/intro/Intro";
import WeatherAPI from "../../services/WeatherAPI";

const Home = () => {
    const [city, setCity] = useState("");
    const [weatherData, setWeatherData] = useState(null);

    const handleSearch = (cityName) => {
        setCity(cityName);
        setWeatherData(null);
    };
    return (
        <div className="home">
            <Search onSearch={handleSearch} />
            <Intro />
            <Weather weatherData={weatherData} />
            <WeatherAPI city={city} setWeatherData={setWeatherData} />
        </div>
    );
};

export default Home;
