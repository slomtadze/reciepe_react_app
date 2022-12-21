import { Route, Routes } from "react-router-dom";
import NavBar from "./components/Navbar/NavBar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import RecipeDetails from "./pages/RecipeDetails";
import Recipes from "./pages/Recipes";
function App() {
  return (
    <div className="w-full overflow-hidden">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes/:name" element={<Recipes />} />
        <Route path="/:recipeID" element={<RecipeDetails />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
