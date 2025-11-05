import phoneIcon from "../assets/svg/phone-icon.svg"
export const Navbar = () => {
    return (
        <div className='bg-[#333333] flex justify-between items-center px-20 border-b'>

            <ul className='ml-[300px]  flex justify-center gap-10 py-5 font-semibold text-[#939393]'>
                <li className='text-white'>Home</li>
                <li>Shop</li>
                <li>Pages</li>
                <li>Blog</li>
                <li>About Us</li>
                <li>Contact Us</li>
            </ul>

            <div className="flex items-center">
                <img src={phoneIcon} alt="phone" />
                <h2 className='mr-[300px] font-semibold text-white ml-2'>
                    (219) 555-0114
                </h2>
            </div>

        </div>
    )
}
