import React from "react";
import "./loader.css"

function Icon({ width = "40", height = "40" }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
            preserveAspectRatio="xMidYMid"
            viewBox="0 0 100 100"
            className="loader"
        >
            <circle cx="84" cy="50" r="0" fill="currentColor">
                <animate
                    attributeName="r"
                    begin="0s"
                    calcMode="spline"
                    dur="2s"
                    keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
                    keyTimes="0;0.25;0.5;0.75;1"
                    repeatCount="indefinite"
                    values="10;0;0;0;0"
                ></animate>
                <animate
                    attributeName="cx"
                    begin="0s"
                    calcMode="spline"
                    dur="2s"
                    keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
                    keyTimes="0;0.25;0.5;0.75;1"
                    repeatCount="indefinite"
                    values="84;84;84;84;84"
                ></animate>
            </circle>
            <circle cx="84" cy="50" r="0.709" fill="currentColor">
                <animate
                    attributeName="r"
                    begin="-1s"
                    calcMode="spline"
                    dur="2s"
                    keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
                    keyTimes="0;0.25;0.5;0.75;1"
                    repeatCount="indefinite"
                    values="0;10;10;10;0"
                ></animate>
                <animate
                    attributeName="cx"
                    begin="-1s"
                    calcMode="spline"
                    dur="2s"
                    keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
                    keyTimes="0;0.25;0.5;0.75;1"
                    repeatCount="indefinite"
                    values="16;16;50;84;84"
                ></animate>
            </circle>
            <circle cx="81.59" cy="50" r="10" fill="currentColor">
                <animate
                    attributeName="r"
                    begin="-0.5s"
                    calcMode="spline"
                    dur="2s"
                    keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
                    keyTimes="0;0.25;0.5;0.75;1"
                    repeatCount="indefinite"
                    values="0;10;10;10;0"
                ></animate>
                <animate
                    attributeName="cx"
                    begin="-0.5s"
                    calcMode="spline"
                    dur="2s"
                    keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
                    keyTimes="0;0.25;0.5;0.75;1"
                    repeatCount="indefinite"
                    values="16;16;50;84;84"
                ></animate>
            </circle>
            <circle cx="47.59" cy="50" r="10" fill="currentColor">
                <animate
                    attributeName="r"
                    begin="0s"
                    calcMode="spline"
                    dur="2s"
                    keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
                    keyTimes="0;0.25;0.5;0.75;1"
                    repeatCount="indefinite"
                    values="0;10;10;10;0"
                ></animate>
                <animate
                    attributeName="cx"
                    begin="0s"
                    calcMode="spline"
                    dur="2s"
                    keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
                    keyTimes="0;0.25;0.5;0.75;1"
                    repeatCount="indefinite"
                    values="16;16;50;84;84"
                ></animate>
            </circle>
            <circle cx="16" cy="50" r="9.291" fill="currentColor">
                <animate
                    attributeName="r"
                    begin="0s"
                    calcMode="spline"
                    dur="2s"
                    keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
                    keyTimes="0;0.25;0.5;0.75;1"
                    repeatCount="indefinite"
                    values="0;0;10;10;10"
                ></animate>
                <animate
                    attributeName="cx"
                    begin="0s"
                    calcMode="spline"
                    dur="2s"
                    keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
                    keyTimes="0;0.25;0.5;0.75;1"
                    repeatCount="indefinite"
                    values="16;16;16;50;84"
                ></animate>
            </circle>
        </svg>
    );
}

export default Icon;
