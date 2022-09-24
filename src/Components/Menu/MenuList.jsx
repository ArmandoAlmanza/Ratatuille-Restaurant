import { Link } from "react-router-dom";
import { Dish } from "./Dish";

// This would be auto with the database but for now it works and make the code clean xd
const uri =
    "https://media-cdn.tripadvisor.com/media/photo-p/19/49/1b/d4/caption.jpg";
const desc =
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas possimus repellat inventore doloribus distinctio minus iure adipisci mollitia deleniti necessitatibus nesciunt repudiandae sint dignissimos nihil velit incidunt alias labore illo.";
const dishes = [
    {
        title: "Hamburger",
        
        description: desc,
        color: "yellow",
    },
    {
        title: "Pizza",
       
        description: desc,
        color: "red",
    },
    {
        title: "Pasta",
        
        description: desc,
        color: "orange",
    },
    {
        title: "Pastrami",
       
        description: desc,
        color: "purple",
    },
];

const MenuList = () => {
    return (
        <div className="menu__list">
            <h1 className="title nm__bottom">Our best sellers</h1>
            <p className="title__description">
                All of our dishes are made with dedication and pasion with the
                best ingredients of the country
            </p>

            <div className="sellers__container">
                {dishes.map((dish) => {
                    return (
                        <Dish
                            title={dish.title}
                            imageUrl={dish.imageUrl}
                            description={dish.description}
                            color={dish.color}
                            key={dish.title}
                        />
                    );
                })}
            </div>

            <h3 className="subtitle">
                If you want to see the full menu you can visit our menu
            </h3>
            <Link to="/menu" className="btn btn__menu">
                See our menu!
            </Link>
        </div>
    );
};

export default MenuList;
