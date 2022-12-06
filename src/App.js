import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/Navbar/NavBar";
import Home from "./pages/Home";
function App() {
  return (
    <Fragment>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Fragment>
  );
}

export default App;
