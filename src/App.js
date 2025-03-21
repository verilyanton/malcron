import React, { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { About } from "./components/about";
import { News } from "./components/news";
import { Events } from "./components/testimonials";
import { Team } from "./components/Team";
import { Contact } from "./components/contact";
import { Footer } from "./components/Footer";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      <Navigation />
      <Header data={landingPageData.Header} />
      <About data={landingPageData.About} />
      <Team data={landingPageData.Team} />
      <News data={landingPageData.News} />
      <Events data={landingPageData.Events} />
      <Contact data={landingPageData.Contact} />
      <Footer/>
    </div>
  );
};

export default App;


// import React from 'react';
// import {Link, Route, Router} from "react-router-dom";
// import Header from './components/Header';
// import Footer from './components/Footer';
// import AboutUsRo from './pages/ro/AboutUsRo';
// import ContactUsRo from "./pages/ro/ContactUsRo";
// import OurProjectsRo from "./pages/ro/OurProjectsRo";
// import AboutUsEn from './pages/en/AboutUsEn';
// import ContactUsEn from './pages/en/ContactUsEn';
// import OurProjectsEn from './pages/en/OurProjectsEn';
//
// function App() {
//   return (<Router>
//       <div className="App">
//         <Header/>
//         <nav>
//           <ul>
//             <li><Link to="/ro/despre-noi">Despre Noi</Link></li>
//             <li><Link to="/ro/contacteaza-ne">Contactează-ne</Link></li>
//             <li><Link to="/ro/proiectele-noastre">Proiectele Noastre</Link></li>
//             <li><Link to="/en/about-us">About Us</Link></li>
//             <li><Link to="/en/contact-us">Contact Us</Link></li>
//             <li><Link to="/en/our-projects">Our Projects</Link></li>
//           </ul>
//         </nav>
//         <Routes>
//           <Route path="/" element={<AboutUsRo/>}>
//             <Route index element={<AboutUsRo/>}/>
//             <Route path="/ro/despre-noi" element={<AboutUsRo/>}/>
//           </Route>
//         </Routes>
//         <Routes>
//           <Route path="/ro/despre-noi" component={AboutUsRo}/>
//           <Route path="/ro/contacteaza-ne" component={ContactUsRo}/>
//           <Route path="/ro/proiectele-noastre" component={OurProjectsRo}/>
//           <Route path="/en/about-us" component={AboutUsEn}/>
//           <Route path="/en/contact-us" component={ContactUsEn}/>
//           <Route path="/en/our-projects" component={OurProjectsEn}/>
//           <Route exact path="/" component={AboutUsRo}/>
//         </Routes>
//         <Footer/>
//       </div>
//     </Router>);
// }
//
// export default App;