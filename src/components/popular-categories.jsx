import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useLocation } from "react-router-dom";
import { Skeleton } from "./ui/skeleton";

// Alohida ImageWithSkeleton component
const ImageWithSkeleton = ({ src, alt, className }) => {
    const [imageLoading, setImageLoading] = useState(true);

    return (
        <div className="relative w-full h-full">
            {imageLoading && (
                <Skeleton className="absolute inset-0 w-full h-full bg-gray-400" />
            )}
            <img
                src={src}
                alt={alt}
                className={className}
                onLoad={() => setImageLoading(false)}
                onError={() => setImageLoading(false)}
                style={{ display: imageLoading ? 'none' : 'block' }}
            />
        </div>
    );
};

export const PopularCatigories = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const location = useLocation();

    useEffect(() => {
        setLoading(true);
        axios
            .get("https://dummyjson.com/recipes?limit=12")
            .then((res) => {
                setData(res.data.recipes);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error:", error);
                setLoading(false);
            });
    }, []);

    return (
        <div className="grid grid-cols-6 justify-between gap-6">
            {data.length === 0
                ? Array.from({ length: 12 }).map((_, index) => (
                      <div key={index} className="flex flex-col space-y-3">
                          <Skeleton className="h-[180px] w-[200px] rounded-[10px]" />
                          <Skeleton className="h-4 w-[200px]" />
                      </div>
                  ))
                : data.map((item) => (
                      <Link
                          key={item.id}
                          to={`/detail/${item.id}`}
                          state={{ background: location }}
                      >
                          <div className="w-[200px] h-[260px] mx-auto bg-white items-center rounded-[10px] border border-gray-300">
                              <div className="h-[200px] p-3">
                                  <ImageWithSkeleton
                                      src={item.image}
                                      alt={item.name}
                                      className="w-full h-full object-cover"
                                  />
                              </div>
                              <p className="p-3">{item.name}</p>
                          </div>
                      </Link>
                  ))}
        </div>
    );
};