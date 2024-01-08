import React, { useEffect, useState } from "react";

function ProgressBar() {
    const [progressWidth, SetProgressWidth] = useState(0);
    const handleScroll = () => {
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
        const scrollY = window.scrollY;

        const scrollPercent = (scrollY / (documentHeight - windowHeight)) * 100;
        SetProgressWidth(scrollPercent)
    }
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, [])

    return(
        <div
            className = "progress-container"
            style={{
                height: "6px"
                , width: "100%"
                , backgroundColor: "transparent"
                , position: "fixed"
                , bottom: "0"
                , left: "0"
                , right: "0"
            }}
        >
            <div
                className = "progress-fill"
                style={{
                    height: "100%"
                    , backgroundColor: "#D09B6B"
                    , width: `${progressWidth}%`
                }}
            >{" "}</div>
        </div>
    )
}

export default ProgressBar