import React from 'react'

export const Hero = ({ img, title, desc }) => {
    return (
        <a href="#">
            <div className='flex gap-5'>
                <img src={img} alt={title} />
                <div className=''>
                    <h1 className='text-[15px] font-bold text-[#11142d]'>{title}</h1>
                    <p className='max-w-[220px] text-[11px] text-[#aaa]'>{desc}</p>
                </div>
            </div>
        </a>
    )
}
