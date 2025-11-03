export const RuknCard = ({ title, img }) => {
    return (
        <div className="relative w-46.5">
            <h1 className="absolute text-[18px] text-white px-4 bottom-0 pb-4 ">{title}</h1>
            <img src={img} alt={title} />
        </div>
    )
}
