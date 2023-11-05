import "./App.css";
import HomePage from "./pages/home";
// import logo from "./logo.svg";
import WhyusService from "./pages/Whyus_Services";
// import BlueSection from "./pages/whyus/whyus_main";
import Projects from "./pages/Projects";
import Sucess from "./pages/Sucess";
import "./App.css";

function App() {
  return (
    <main>
      <HomePage />
      <WhyusService />
      <div id="zoom">
        <Projects />
        <Sucess />
      </div>
    </main>
  );
}

export default App;
