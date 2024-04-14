import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ScrollToTop from "./components/ScrollToTop";
import Services from "./pages/Services";
import GlobalOutlook from "./pages/GlobalOutlook";
import About from "./pages/About";
import Contact from "./pages/Contact";
import FundLibrary from "./pages/FundLibrary";

function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/fund-library" element={<FundLibrary />} />
          <Route path="/about/global-outlook" element={<GlobalOutlook />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
