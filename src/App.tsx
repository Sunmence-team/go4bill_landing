import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
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
        </Route>
      </Routes>
    </>
  );
}

export default App;
