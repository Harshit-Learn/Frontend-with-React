import React from "react";
import { Link } from "react-router-dom";
const Products = () => {
  return (
    <div>
      <h2>Products</h2>
      <ul>
        <li>
          <Link to="/Products/1">Prdouct 1</Link>
        </li>
        <li>
          <Link to="/Products/2">Prdouct 2</Link>
        </li>
        <li>
          <Link to="/Products/3">Prdouct 3</Link>
        </li>
      </ul>
    </div>
  );
};

export default Products;
