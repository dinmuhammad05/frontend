import React, { useEffect, useState } from 'react'
import axios from 'axios'

export const PopularProduct = () => {
    const [data, useData] = useState([])

    useEffect(() => {
        axios.get('https://dummyjson.com/recipes?limit=10&skip=12')
            .then((res) => {
                useData(res.data.recipes)
            })
    }, [])

    return (
        <div className='grid grid-cols-5 justify-between'>
            {
                data.map((item) => (
                    <div key={item.id} className='w-[264px] h-[327px] bg-white items-center rounded-[10px] border border-gray-300 outline-hidden overflow-hidden'>
                        <img src={item.image} alt="" className='' />
                        {item.name}
                    </div>
                ))
            }
        </div>
    )
}
