import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/Navbar/NavBar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="w-full overflow-hidden">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
