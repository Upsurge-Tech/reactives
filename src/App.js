import "./App.css";

import HomePage from "./pages/home";
import OurTeamAndBlog from "./pages/OurTeamAndBlog/page";
import WhyusService from "./pages/Whyus_Services";
// import BlueSection from "./pages/whyus/whyus_main";
import Projects from "./pages/Projects";
import Sucess from "./pages/Sucess";
import "./App.css";
import QuestionFooter from "./pages/question_footer";

function App() {
  return (
    <main>
      <HomePage />
      <WhyusService />
      <div id="zoom">
        <Projects />
        <Sucess />
      </div>

      <OurTeamAndBlog />
      <QuestionFooter />
    </main>
  );
}

export default App;
