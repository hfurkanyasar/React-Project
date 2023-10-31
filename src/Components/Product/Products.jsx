import ProductItem from "./ProductItem";
import { productData } from "../../productData";
import "./Products.css";
import NewProduct from "../../NewProduct/NewProduct";
import { useState } from "react";

const Products = () => {
  const [products, setProducts] = useState(productData);

  console.log(products);

  return (
    <div className="Product-wrapper">
      <NewProduct setProducts={setProducts} />
      <h1>Products</h1>
      <div className="Products">
        {products.map((product) => (
          <ProductItem key={product.productName} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
