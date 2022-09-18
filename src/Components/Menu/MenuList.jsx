import { Link } from "react-router-dom";

const MenuList = () => {
    return (
        <div>
            <h1>
                If you want to see the full menu you can visit our menu clicking
                here
            </h1>
            <Link to="/menu" className="btn btn__menu">
                See our menu!
            </Link>
        </div>
    );
};

export default MenuList;
