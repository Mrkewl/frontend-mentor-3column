import logo from "./logo.svg";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <div className="grid-container">
        <div className="grid-container-sedans">
          <div className="grid-container-sedans-icon"></div>
          <h1 className="grid-container-sedans-header">Sedans</h1>
          <p className="grid-container-sedans-para">
            Choose a sedan for ites affordability and excellent fuel economy.
            Ideal for cruising in the city or your next road trip.
          </p>
          <button className="grid-container-sedans-button">Learn More</button>
        </div>
        <div className="grid-container-suvs">
          <div className="grid-container-suvs-icon"></div>
          <h1 className="grid-container-suvs-header">SUVS</h1>
          <p className="grid-container-suvs-para">
            Take an SUV for its spacious interior, power, and versatility.
            Perfect for your next family vacation and off-road adventure
          </p>
          <button className="grid-container-suvs-button">Learn More</button>
        </div>
        <div className="grid-container-luxury">
          <div className="grid-container-luxury-icon"></div>
          <h1 className="grid-container-luxury-header">LUXURY</h1>
          <p className="grid-container-luxury-para">
            Cruise in the best car brands without the bloated prices. Enjoy the
            enhanced comfort of a luxury rental and arrive in style
          </p>
          <button className="grid-container-luxury-button">Learn More</button>
        </div>
      </div>
    </div>
  );
}

export default App;
