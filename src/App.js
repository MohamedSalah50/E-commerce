import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import Navbar from "./components/navbar.js";
import ProductsList from "./features/products/ProductsList.js";
import ProductDetails from "./features/products/ProductDetails.js";
import About from "./pages/About.js";
import Slider from "./components/slider.js";
import { Routes, Route } from "react-router";
import Login from "./features/accounts/Login.js";
import { useSelector } from "react-redux";
import HistoryOrder from "./pages/HistoryOrder.js";
import { Container } from "react-bootstrap";

function App() {
  const isLogin = useSelector((store) => store.account.login);
  return (
    <div className="App">
      {isLogin ? (
        <>
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Slider />
                  <ProductsList />
                </>
              }
            />
            <Route path="about" element={<About />} />
            <Route path="products/:productID" element={<ProductDetails />} />
            <Route path="history" element={<HistoryOrder />} />
            <Route
              path="*"
              element={
                <Container className="text-center mt-5">
                  <h1 className="display-1">404</h1>
                  <h1>Page Not Found</h1>
                </Container>
              }
            />
          </Routes>
        </>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
