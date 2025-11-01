export const CategoryCard = ({ title, img }) => {
    return (
        <div>
            <img src={img} alt="img" />
            <h3>{title}</h3>
        </div>
    );
};
