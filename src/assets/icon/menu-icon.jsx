import React from "react";

export const MenuIcon = () => {
    return (
        <>
            <svg
                width={40}
                height={20}
                viewBox="0 0 40 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <line
                    x1={1}
                    y1={1}
                    x2={39}
                    y2={1}
                    stroke="black"
                    strokeWidth={2}
                    strokeLinecap="round"
                />
                <line
                    x1={1}
                    y1={11}
                    x2={39}
                    y2={11}
                    stroke="black"
                    strokeWidth={2}
                    strokeLinecap="round"
                />
                <line
                    x1={1}
                    y1={21}
                    x2={39}
                    y2={21}
                    stroke="black"
                    strokeWidth={2}
                    strokeLinecap="round"
                />
            </svg>
        </>
    );
};
