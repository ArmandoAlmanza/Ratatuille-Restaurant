import gif from "./assets/restaurant_gif.gif";
import Menu from "./Components/Menu/Menu";

function App() {
    return (
        <div className="container">
            <h1>Welcome to the restaurant of ratatuile</h1>
            <img src={gif} alt="Restaurant gif" />
            <Menu />
        </div>
    );
}

export default App;
