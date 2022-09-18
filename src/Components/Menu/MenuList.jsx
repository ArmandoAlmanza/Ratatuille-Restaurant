import { Link } from "react-router-dom";
import { Dish } from "./Dish";

const MenuList = () => {
    return (
        <div className="menu__list">
            <h1 className="title nm__bottom">Our best sellers</h1>
            <p className="title__description">
                All of our dishes are made with dedication and pasion with the
                best ingredients of the country
            </p>

            <div className="sellers__container">
                <Dish
                    title="Hamburger"
                    imageUrl="/src/assets/burger.jpg"
                    description=" Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Quas, possimus repellat inventore doloribus
                            distinctio minus iure adipisci mollitia deleniti
                            necessitatibus nesciunt repudiandae sint dignissimos
                            nihil velit incidunt alias labore illo."
                />
                <Dish
                    title="Pizza"
                    imageUrl="/src/assets/burger.jpg"
                    description=" Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Quas, possimus repellat inventore doloribus
                            distinctio minus iure adipisci mollitia deleniti
                            necessitatibus nesciunt repudiandae sint dignissimos
                            nihil velit incidunt alias labore illo."
                />
                <Dish
                    title="Pasta"
                    imageUrl="/src/assets/burger.jpg"
                    description=" Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Quas, possimus repellat inventore doloribus
                            distinctio minus iure adipisci mollitia deleniti
                            necessitatibus nesciunt repudiandae sint dignissimos
                            nihil velit incidunt alias labore illo."
                />
                <Dish
                    title="Pastrami"
                    imageUrl="/src/assets/burger.jpg"
                    description=" Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Quas, possimus repellat inventore doloribus
                            distinctio minus iure adipisci mollitia deleniti
                            necessitatibus nesciunt repudiandae sint dignissimos
                            nihil velit incidunt alias labore illo."
                />
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
