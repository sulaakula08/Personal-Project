import React from "react";
import "./NewsCard.css"; // Стилевой файл для карточки

const NewsCard = ({ article }) => {
    const { title, description, url, urlToImage, source } = article;

    return (
        <div className="news-card">
            {urlToImage && (
                <img src={urlToImage} alt={title} className="news-card-image" />
            )}
            <div className="news-card-content">
                <h3 className="news-card-title">{title}</h3>
                <p className="news-card-description">{description}</p>
                <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="news-card-link"
                >
                    Read more
                </a>
                <p className="news-card-source">Source: {source.name}</p>
            </div>
        </div>
    );
};

export default NewsCard;
