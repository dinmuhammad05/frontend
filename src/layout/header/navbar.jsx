export const Navbar = () => {
    return (
        <div className="navbar">
            <hr className="my-4 text-[#E5E5E5]" />
            <div className="container">
                <ul className="flex py-3 gap-6">
                    <li>
                        <a href="#" className="text-primary_color font-semibold text-[16px]">Аудиокитоб</a>
                    </li>
                    <li>
                        <a href="#" className="text-primary_color font-semibold text-[16px]">Электрон китоблар</a>
                    </li>
                    <li>
                        <a href="#" className="text-primary_color font-semibold text-[16px]">Босма китоблар</a>
                    </li>
                    <li>
                        <a href="#" className="text-primary_color font-semibold text-[16px]">Контакт</a>
                    </li>
                    <li>
                        <a href="#" className="text-primary_color font-semibold text-[16px]">Биз хақимизда</a>
                    </li>
                </ul>
            </div>
            <hr className=" text-[#E5E5E5]" />
        </div>
    )
}
