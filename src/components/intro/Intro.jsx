import React, { useState } from "react";
import "./Intro.css";

const Intro = () => {
    const [isVisible, setIsVisible] = useState(true);

    const handleClose = () => {
        setIsVisible(false);
    };

    return (
        <>
            {isVisible && (
                <div className="intro">
                    <div className="background-info">
                        <h1>
                            Is it <span> Sunny</span> Tomorrow?
                        </h1>
                        <p>
                            This is a Weather Website. My site provides basic
                            weather viewing capabilities, and additional data
                            related to it. In addition, it provides the ability
                            to view current news related to climate around the
                            world, and gives the function to customers to leave
                            their various reviews on my site.
                        </p>
                        <div class="hot">
                            <span class="sun"></span>
                            <span class="sunx"></span>
                        </div>
                    </div>

                    <button onClick={handleClose} className="news-button">
                        Close
                    </button>
                </div>
            )}
        </>
    );
};

export default Intro;
