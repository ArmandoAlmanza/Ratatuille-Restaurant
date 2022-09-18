import { Link, useLocation } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

const Header = () => {
    const currentLocarion = useLocation().pathname;
    return (
        <header
            className={
                currentLocarion == "/" ? "site__header main" : "site__header"
            }
        >
            <div className="header__content">
                <div className="logo__container">
                    <h2 className="logo__text">
                        {" "}
                        Ratatuille <span>Restaurant</span>
                    </h2>
                </div>
                <Navbar />
            </div>
            {currentLocarion == "/" ? (
                <div className="header__info">
                    <h2>Welcome to Ratatuille Restaurant!!</h2>
                    <p>We have the best dishes in the county</p>
                    <Link to="/menu" className="btn btn__menu">
                        See our menu!
                    </Link>
                </div>
            ) : (
                ""
            )}
            <div></div>
        </header>
    );
};

export default Header;
