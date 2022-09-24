import Navbar from "../Navbar/Navbar";
import {
    FaFacebookSquare,
    FaInstagram,
    FaTwitterSquare,
    FaTiktok,
    FaPinterest,
} from "react-icons/fa";

const Footer = () => {
    return (
        <div className="site__footer">
            <h2 className="logo__text">
                {" "}
                Ratatuille <span>Restaurant</span>
            </h2>
            <div className="social">
                <a
                    href="https://www.facebook.com/ArmyAlmanza"
                    target={"_blank"}
                    className="link"
                >
                    <FaFacebookSquare className="social__icon" />
                </a>
                <a
                    href="https://www.instagram.com/jamon_sad/"
                    target={"_blank"}
                    className="link"
                >
                    <FaInstagram className="social__icon" />
                </a>
                <a
                    href="https://twitter.com/JamonSad03"
                    target={"_blank"}
                    className="link"
                >
                    <FaTwitterSquare className="social__icon" />
                </a>
                <a
                    href="https://www.tiktok.com/@morthumi"
                    target={"_blank"}
                    className="link"
                >
                    <FaTiktok className="social__icon" />
                </a>
                <a
                    href="https://www.pinterest.com.mx/JamonSad/"
                    target={"_blank"}
                    className="link"
                >
                    <FaPinterest className="social__icon" />
                </a>
            </div>
            <Navbar />
        </div>
    );
};

export default Footer;
