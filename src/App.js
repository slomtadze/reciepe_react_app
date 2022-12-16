import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/Navbar/NavBar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import RecipeDetails from "./pages/RecipeDetails";
import List from "./pages/List";
function App() {
  return (
    <div className="w-full overflow-hidden">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/list" element={<List />} />
        <Route path="/:recipeID" element={<RecipeDetails />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
