import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams, useLocation } from "react-router-dom";

export const Recipes = () => {
    const { data } = useParams();
    const location = useLocation();
    const [datas, setDatas] = useState([]);

    useEffect(() => {
        axios.get(`https://dummyjson.com/recipes/search?q=${data}`).then((res) => {
            setDatas(res.data.recipes);
        });
    }, [data]);

    // const filteredData = datas.filter((item) =>
    //     item.name.toLowerCase().includes(data.toLowerCase())
    // );

    return (
        <div className="flex gap-6 flex-wrap p-6 justify-center">
            {datas.length > 0 ? (
                datas.map((item) => (
                    <Link
                        key={item.id}
                        to={`/detail/${item.id}`}
                        state={{ background: location }}
                    >
                        <div className="w-[300px] bg-white rounded-[10px] border border-gray-300 cursor-pointer hover:shadow-lg transition">
                            <img
                                src={item.image}
                                alt={item.name}
                                className="w-full p-3 rounded-lg"
                            />
                            <p className="p-3">{item.name}</p>
                        </div>
                    </Link>
                ))
            ) : (
                <h2 className="text-xl font-bold text-center w-full">
                    No results found
                </h2>
            )}
        </div>
    );
};
