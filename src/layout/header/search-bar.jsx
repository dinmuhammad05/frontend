import { Search } from '../../assets/icons/search'

export const SearchBar = () => {
    return (
        <div className="relative flex items-center border border-[#e1e1e1] rounded-r-[14px] pr-10">
            <input
                type="text"
                className=" h-12 px-3 outline-none text-[16px] flex w-[430px] "
                placeholder="Қидириш"
            />

            <span className=''>
                <svg width={1} height={48} viewBox="0 0 1 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.25" y="0.25" width="0.5" height="47.5" fill="#E1E1E1" stroke="#E1E1E1" strokeWidth="0.5" />
                </svg>
            </span>

            <span className="absolute right-2.5 ml-5">
                <a href="#">
                    <Search />
                </a>
            </span>
        </div>
    )
}
