import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import Home from "./pages/home";
import Cart from "./pages/cart";
import Restaurent from "./pages/restaurent";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getRestaurants } from "./redux/actions/restActions";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRestaurants());
  });
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 h-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/restaurent/:id" element={<Restaurent />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
