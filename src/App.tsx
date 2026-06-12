import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
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
        </Route>
      </Routes>
    </>
  );
}

export default App;
