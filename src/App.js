import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/Assets/Css/Style.css';
import Roadmap from "./components/landingPages/Roadmap";
import Home from "./components/Pages/Home";
import AboutUs from "./components/landingPages/AboutUs";
import Team from "./components/landingPages/Team";
import FAQS from "./components/landingPages/FAQS";
import Gallery from "./components/Gallery";
import Staking from "./components/Staking";
import More from "./components/More";
import Mint from "./components/Mint";
import { Routes, Route } from 'react-router-dom';
import Footer from "./components/Footer";
import Header from "./components/Header";


function App() {
  return (
  <>
  <div className="App">
    <Header />
    <Routes>
        <Route exact path='/' element={<Home />}></Route>
        <Route exact path='/mint' element={<Mint />}></Route>
        <Route exact path='/aboutus' element={<AboutUs />}></Route>
        <Route exact path='/roadmap' element={<Roadmap />}></Route>
        <Route exact path='/team' element={<Team />}></Route>
        <Route exact path='/faqs' element={<FAQS />}></Route>
        <Route exact path='/staking' element={<Staking />}></Route>
        <Route exact path='/gallery' element={<Gallery />}></Route>
        <Route exact path='/more' element={<More />}></Route>
    </Routes>
    <Footer />
  </div>
  </>
  );
}

export default App;
