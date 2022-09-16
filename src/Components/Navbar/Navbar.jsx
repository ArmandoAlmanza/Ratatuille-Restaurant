import { Link } from "react-router-dom";
const Navbar = () => {
    return (
        <nav>
            <Link to="/"> Home </Link>
            <Link to="/about"> About </Link>
            <Link to="/menu"> Menu </Link>
            <Link to="/blog"> Blog </Link>
        </nav>
    );
};

export default Navbar;
