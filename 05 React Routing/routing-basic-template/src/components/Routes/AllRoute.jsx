import Articles from "../Articles/Articles";
import Admin from "../Admin/Admin";
import Contact from "../Contact/Contact";
import NotFound from "../NotFound/NotFound";
import SingleProduct from "../Products/SingleProduct";
import Sales from "../Admin/Sales";
import Sellers from "../Admin/Sellers";
import { Route, Routes } from "react-router-dom";
import Home from "../Home/Home";
import Product from "../Products/Products";
const AllRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Product />} />
      <Route path="/Products/:id" element={<SingleProduct />} />
      <Route path="/articles" element={<Articles />} />
      <Route path="/admin" element={<Admin />}>
        <Route path="sales" element={<Sales />} />
        <Route path="sellers" element={<Sellers />} />
      </Route>
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AllRoute;
