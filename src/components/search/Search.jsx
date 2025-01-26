import React, { useState } from "react";
import "./Search.css";

const Search = ({ onSearch }) => {``
    const [input, setInput] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const trimmedInput = input.trim();
        if (trimmedInput) {
            onSearch(trimmedInput);
            setInput(""); 
        }
    };

    return (
        <div className="search">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Enter city name..."
                />
            </form>
        </div>
    );
};

export default Search;
