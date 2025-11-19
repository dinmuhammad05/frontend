import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useLocation } from "react-router-dom";

export const PopularCatigories = () => {
    const [data, useData] = useState([]);
    const location = useLocation();

    useEffect(() => {
        axios.get("https://dummyjson.com/recipes?limit=12").then((res) => {
            useData(res.data.recipes); 
        });
    }, []);

    return (
        <div className="grid grid-cols-6 justify-between gap-6">
            {data.map((item) => (
                <Link
                    key={item.id}
                    to={`/detail/${item.id}`}
                    state={{ background: location }}
                >
                    <div className="w-[200px] bg-white items-center rounded-[10px] border border-gray-300">
                        <img
                            src={item.image}
                            alt=""
                            className="w-[180px] p-3"
                        />
                        {item.name}
                    </div>
                </Link>
            ))}
        </div>
    );
};
