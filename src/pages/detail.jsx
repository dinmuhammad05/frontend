import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export const Detail = ({ isModal }) => {
    const [data, useData] = useState([]);

    const { id } = useParams();

    useEffect(() => {
        axios.get(`https://dummyjson.com/recipes/${id}`).then((res) => {
            useData(res.data);
        });
    }, []);

    if (isModal) {
    return (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center  z-[999]">

            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm pointer-events-auto"></div>

            <div className="relative bg-white p-6 rounded-lg container w-[800px] shadow-2xl z-[1000]">
                <img src={data.image} alt="product" className="rounded-2xl" />

                <div className="flex justify-between px-[50px] items-center relative">
                    <h3 className="font-bold pt-2">{data.name}</h3>

                    <Link to={-1}>
                        <button className="absolute top-4 px-[50px] right-4 text-red hover:uppercase border border-gray-300 rounded-full w-8 h-8 flex items-center justify-center bg-red-500">
                            exit
                        </button>
                    </Link>
                </div>
            </div>

        </div>
    );
}


    return (
        <div className="container w-[800px] m-5 p-6 bg-white items-center rounded-[10px] border border-gray-300">
            <img src={data.image} alt="product image" className="rounded-2xl" />
            <h3 className="font-bold pt-2">{data.name}</h3>
        </div>
    );
};
