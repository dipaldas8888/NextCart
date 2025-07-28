import "./App.css";
import Herosection from "./components/HeroSection/Herosection";
import Navigation from "./components/Navigation/Navigation";
import NewArrivals from "./components/Sections/NewArrivals";

function App() {
  return (
    <>
      <Navigation />
      <Herosection />
      <NewArrivals />
    </>
  );
}

export default App;
