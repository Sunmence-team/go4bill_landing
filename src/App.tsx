import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import HomeLayout from "./layouts/HomeLayout";

function App() {
  return (
    <>
      <Routes>
        <Route element={<HomeLayout />}>
          <Route 
            index 
            element={<Home />} 
            handle={{ pageName: "Home" }}
          />
          <Route 
            path="services" 
            element={<Services />} 
            handle={{ pageName: "Services" }}
          />
          <Route 
            path="contact" 
            element={<Contact />} 
            handle={{ pageName: "Contact" }}
          />
          <Route 
            path="privacy-policy" 
            element={<PrivacyPolicy />} 
            handle={{ pageName: "Privacy Policy" }}
          />
          <Route 
            path="privacy" 
            element={<PrivacyPolicy />} 
            handle={{ pageName: "Privacy Policy" }}
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
