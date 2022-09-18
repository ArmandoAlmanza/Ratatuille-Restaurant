import Navbar from "../Navbar/Navbar";
import {
    FaFacebookSquare,
    FaInstagram,
    FaTwitterSquare,
    FaTiktok,
} from "react-icons/fa";

const Footer = () => {
    return (
        <div className="site__footer">
            <h2 className="logo__text">
                {" "}
                Ratatuille <span>Restaurant</span>
            </h2>
            <div className="social">
                <FaFacebookSquare className="social__icon" />
                <FaInstagram className="social__icon" />
                <FaTwitterSquare className="social__icon" />
                <FaTiktok className="social__icon" />
            </div>
            <Navbar />
        </div>
    );
};

export default Footer;
