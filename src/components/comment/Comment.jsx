import React from "react";
import "./Comment.css";

const Comment = ({ comment, onDelete }) => {
    const timeAgo = (timestamp) => {
        if (!timestamp || isNaN(timestamp)) return "Invalid time";
        const now = Date.now();
        const diffInSeconds = Math.floor((now - timestamp) / 1000);

        if (diffInSeconds < 60) return `${diffInSeconds} sec ago`;
        const diffInMinutes = Math.floor(diffInSeconds / 60);
        if (diffInMinutes < 60) return `${diffInMinutes} min ago`;
        const diffInHours = Math.floor(diffInMinutes / 60);
        if (diffInHours < 24) return `${diffInHours} h ago`;
        const diffInDays = Math.floor(diffInHours / 24);
        return `${diffInDays} days ago`;
    };

    return (
        <div className="published-comment">
            <div className="avatar"></div>

            <div className="content">
                <div className="header">
                    <span className="name">{comment.name}</span>
                    <span className="time">{timeAgo(comment.timestamp)}</span>
                </div>
                <p className="text">{comment.text}</p>
                <button
                    className="delete-btn"
                    onClick={() => onDelete(comment.id)}
                >
                    Delete
                </button>
            </div>
        </div>
    );
};

export default Comment;
