import { useLocation } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

const Header = () => {
    const currentLocarion = useLocation().pathname;
    return (
        <header
            className={
                currentLocarion == "/" ? "site__header main" : "site__header"
            }
        >
            <div className="logo__container">
                <h2 className="logo__text">
                    {" "}
                    Ratatuille <span>Restaurant</span>
                </h2>
            </div>
            <Navbar />
        </header>
    );
};

export default Header;
