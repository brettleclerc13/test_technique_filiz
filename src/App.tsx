import NavBar from "./components/navbar/navbar";
import Hero from "./sections/hero";
import AboutUs from "./sections/aboutUs";
import Values from "./sections/values";
import Reservation from "./sections/tableReservation";
import "./App.css";

function App() {
  return (
    <main className="flex flex-col align-middle justify-center w-full max-w-[1280px]">
      <NavBar />
      <Hero />
      <AboutUs />
      <Values />
      <Reservation />
    </main>
  );
}

export default App;
