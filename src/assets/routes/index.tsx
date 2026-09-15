import { BrowserRouter, Routes, Route } from "react-router-dom";

import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import News from "../pages/News";
import NewsPost from "../pages/NewsPost";
import NotFound from "../pages/NotFound";
import Product from "../pages/Product";
import Services from "../pages/Services";
import Shop from "../pages/Shop";
import Support from "../pages/Support";
import MainLayout from "../layouts/MainLayout";

function MainRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/news" element={<News />} />
          <Route path="/news:slug" element={<NewsPost />} />
          <Route path="/product:slug" element={<Product />} />
          <Route path="/services" element={<Services />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/support" element={<Support />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default MainRoutes;