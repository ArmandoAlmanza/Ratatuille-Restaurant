import { Link } from "react-router-dom";
const Navbar = () => {
    return (
        <nav className="navbar">
            <Link to="/" className="link">
                {" "}
                Home{" "}
            </Link>
            <Link to="/about" className="link">
                {" "}
                About{" "}
            </Link>
            <Link to="/menu" className="link">
                {" "}
                Menu{" "}
            </Link>
            <Link to="/blog" className="link">
                {" "}
                Blog{" "}
            </Link>
        </nav>
    );
};

export default Navbar;
