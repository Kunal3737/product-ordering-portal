import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AllProducts from "./pages/AllProducts/AllProducts";
import NavBar from "./components/NavBar/NavBar";
import Sidebar from "./components/Sidebar/Sidebar";

const App = () => {
  return (
    <>
      <NavBar />

      <Router>
        <div className="app-wrapper">
          <Sidebar />
          <Routes>
            <Route
              path="/all-products/:mainCatId?/:subCatId?"
              element={<AllProducts />}
            />
          </Routes>
        </div>
      </Router>
    </>
  );
};

export default App;
