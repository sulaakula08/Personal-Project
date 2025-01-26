import React, { useState } from "react";
import "./Weather.css";
import clouds from "../../assets/clouds.png";
import arrow from "../../assets/right-down.png";
import rain from "../../assets/rain.png";
import snowy from "../../assets/snowy.png";
import sunny from "../../assets/sunny.png";
import storm from "../../assets/storm.png";

const Weather = ({ weatherData }) => {
    const [showDetails, setShowDetails] = useState(false);

    if (!weatherData) {
        return (
            <div className="loading">
                <div className="lds-roller">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <p>Loading...</p>
            </div>
        );
    }

    const { name, main, weather, wind } = weatherData;

    // Определение изображения погоды на основе типа погоды
    const getWeatherIcon = (description) => {
        switch (description) {
            case "Clear":
                return sunny;
            case "Clouds":
                return clouds;
            case "Rain":
                return rain;
            case "Snow":
                return snowy;
            case "Storm":
                return storm;
            default:
                return clouds;
        }
    };

    return (
        <div className="weather">
            <div className="weather-header">
                <h2>{name}</h2>
                <div className="weather-info">
                    <img
                        src={getWeatherIcon(weather[0]?.main)}
                        alt={weather[0]?.description || "weather icon"}
                        className="weather-icon"
                    />
                    <p>
                        {weather[0]?.description || "No description available"}
                    </p>
                </div>
            </div>
            <div className="weather-details">
                <p className="temperature">{Math.round(main.temp)}°C</p>
                <button
                    className="more-btn"
                    onClick={() => setShowDetails((prev) => !prev)}
                >
                    More{" "}
                    <img
                        src={arrow}
                        alt="Toggle details"
                        className={`arrow-icon ${showDetails ? "rotated" : ""}`}
                    />
                </button>
                {showDetails && (
                    <div className="additional-info">
                        <div className="info-item">
                            <p>Wind: {Math.round(wind.speed)} m/s</p>
                        </div>
                        <div className="info-item">
                            <p>Humidity: {main.humidity}%</p>
                        </div>
                        <div className="info-item">
                            <p>Pressure: {main.pressure} hPa</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Weather;
