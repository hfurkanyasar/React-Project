import { useState } from "react";
import Counter from "../../Counter";
import ProductInfo from "./ProductInfo";
import "./ProductItem.css"; // CSS dosyasını içe aktarın

const ProductItem = ({ product }) => {
  const { imageUrl, productName, productPrice } = product;
  const [title, setTitle] = useState(productName);
  const [counter, setCounter] = useState(productPrice);

  const clickHandler = () => {
    setTitle("Güncellendi!");
    console.log(productName, "Güncellendi!");
  };

  return (
    <div className="product-item"> {/* .product-item sınıfını ekleyin */}
      <div className="product-image">
        <img src={imageUrl} alt="" />
      </div>
      <ProductInfo>
        <h2 className="product-title">{title}</h2> {/* .product-title sınıfını ekleyin */}
        <Counter
          productPrice={productPrice}
          counter={counter}
          setCounter={setCounter}
        >
          <span className="product-price">{counter}₺</span> {/* .product-price sınıfını ekleyin */}
        </Counter>
        <br />
        <button className="product-button" onClick={clickHandler}>
          Güncelle
        </button>
      </ProductInfo>
    </div>
  );
};

export default ProductItem;
