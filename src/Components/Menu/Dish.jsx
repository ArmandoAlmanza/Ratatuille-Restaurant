export const Dish = ({ title, imageUrl, description, color }) => {
    return (
        <div className={`card ${color}`}>
            <div className="card__title">
                <h2>{title}</h2>
            </div>
            <div className={`card__content`}>
                <img className="card__image" src={imageUrl} alt="Dish image" />
                <p className="card__description">{description}</p>
            </div>
        </div>
    );
};
