import React, { useEffect, useState } from "react";
import axios from "axios";
import { Skeleton } from "./ui/skeleton";

// Rasm uchun skeleton component
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
                style={{ display: imageLoading ? "none" : "block" }}
            />
        </div>
    );
};

export const PopularProduct = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        axios
            .get("https://dummyjson.com/recipes?limit=10&skip=12")
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
        <div className="grid grid-cols-5 justify-between gap-6">
            {data.length === 0
                ? 
                  Array.from({ length: 10 }).map((_, index) => (
                      <div key={index} className="flex flex-col space-y-3">
                          <Skeleton className="w-[264px] h-[280px] rounded-[10px]" />
                          <Skeleton className="h-4 w-[200px]" />
                      </div>
                  ))
                : // Ma'lumotlar
                  data.map((item) => (
                      <div
                          key={item.id}
                          className="w-[264px] h-[327px] bg-white items-center rounded-[10px] border border-gray-300 overflow-hidden"
                      >
                          <div className="h-[280px]">
                              <ImageWithSkeleton
                                  src={item.image}
                                  alt={item.name}
                                  className="w-full h-full object-cover"
                              />
                          </div>
                          <p className="p-3">{item.name}</p>
                      </div>
                  ))}
        </div>
    );
};
