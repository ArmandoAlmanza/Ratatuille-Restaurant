import { useLocation } from "react-router-dom";
import AboutMain from "./AboutMain";
import AboutPage from "./AboutPage";

const About = () => {
    const currentLocarion = useLocation().pathname;
    return <div>{currentLocarion == "/" ? <AboutMain /> : <AboutPage />}</div>;
};

export default About;
