import { useLocation } from "react-router-dom";
import FullMenu from "./FullMenu";
import MenuList from "./MenuList";

const Menu = () => {
    const currentLocarion = useLocation().pathname;
    return <div>{currentLocarion == "/" ? <MenuList /> : <FullMenu />}</div>;
};

export default Menu;
