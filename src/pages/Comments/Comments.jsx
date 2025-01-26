import React, { useState } from "react";
import "./Comments.css";
import Comment from "../../components/comment/Comment";
import Header from "../../components/header/Header";

const Comments = () => {
    const [userName, setUserName] = useState("");
    const [userText, setUserText] = useState("");
    const [comments, setComments] = useState([]);
    const [error, setError] = useState(false);

    const handlePublish = () => {
        if (userName && userText) {
            const newComment = {
                id: Date.now(),
                name: userName,
                text: userText,
                timestamp: Date.now(),
            };

            setUserName("");
            setUserText("");
            setComments([...comments, newComment]);
        } else {
            setError(true);
        }
    };

    const handleDelete = (id) => {
        setComments(comments.filter((comment) => comment.id !== id));
    };

    const handleError = () => [setError(false)];

    return (
        <>
            <div className="comments-page">
                {error && (
                    <div className="error-message">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="error-icon"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M12 9v2m0 4h.01M21 12c0 4.418-3.582 8-8 8H11c-4.418 0-8-3.582-8-8s3.582-8 8-8h2c4.418 0 8 3.582 8 8z"
                            />
                        </svg>
                        <p>
                            Please, fill both <span>Username</span> and{" "}
                            <span>Comment</span>...
                        </p>
                        <button onClick={handleError}>OK</button>
                    </div>
                )}

                <div className="comment-create">
                    <h1>Have an idea? Feel Free to write it here:</h1>
                    <input
                        type="text"
                        value={userName}
                        placeholder="Your name..."
                        onChange={(e) => setUserName(e.target.value)}
                    />
                    <textarea
                        name=""
                        id=""
                        value={userText}
                        placeholder="Your comment..."
                        onChange={(e) => setUserText(e.target.value)}
                    ></textarea>
                    <button className="publish-btn" onClick={handlePublish}>
                        Publish
                    </button>
                </div>

                <div className="comment-list">
                    {comments.map((comment) => {
                        return (
                            <Comment
                                key={comment.id}
                                comment={comment}
                                onDelete={handleDelete}
                            />
                        );
                    })}
                </div>
            </div>
        </>
    );
};

export default Comments;
