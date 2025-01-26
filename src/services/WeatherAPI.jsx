// services/WeatherAndNewsAPI.js
import React, { useEffect } from "react";

// API для погоды
const WEATHER_API_KEY = "aa19d1150d20cf9e3c8b325b7ee43937";
const WEATHER_BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

// API для новостей
const NEWS_API_KEY = "YOUR_NEWS_API_KEY"; // Замените на свой ключ
const NEWS_BASE_URL = "https://newsapi.org/v2/top-headlines";

const getWeatherByCity = async (city) => {
    try {
        const response = await fetch(
            `${WEATHER_BASE_URL}?q=${city}&appid=${WEATHER_API_KEY}&units=metric`
        );
        if (!response.ok) {
            throw new Error(`Ошибка: ${response.statusText}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Ошибка при получении данных о погоде:", error);
        return null;
    }
};

const getNewsByCategory = async (category) => {
    try {
        const response = await fetch(
            `${NEWS_BASE_URL}?category=${category}&apiKey=${NEWS_API_KEY}`
        );
        if (!response.ok) {
            throw new Error(`Ошибка: ${response.statusText}`);
        }
        const data = await response.json();
        return data.articles;
    } catch (error) {
        console.error("Ошибка при получении новостей:", error);
        return [];
    }
};

const WeatherAndNewsAPI = ({ city, category, setWeatherData, setArticles }) => {
    useEffect(() => {
        if (city) {
            getWeatherByCity(city).then((data) => {
                if (data) {
                    setWeatherData(data); // Обновляем данные о погоде
                }
            });
        }

        if (category) {
            getNewsByCategory(category).then((articles) => {
                setArticles(articles); // Обновляем список новостей
            });
        }
    }, [city, category, setWeatherData, setArticles]);

    return null;
};

export default WeatherAndNewsAPI;
