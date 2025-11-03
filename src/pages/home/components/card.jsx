export const Card = ({ img, title }) => {
    return (
        <div className="flex flex-col items-center">
            <img src={img} alt={title} className="w-[190px]" />
            <p>{title}</p>
        </div>
    )
}
