import ProductItem from "./ProductItem";
import "./Products.css";
function Products() {
  const productData = [
    {
      productName: "Soda",
      imageUrl:
        "https://img.memurlar.net/galeri/14684/fa7047c4-2765-e811-80df-a0369f7d149c.jpg?width=800",
      productPrice: 4,
    },
    {
      productName: "Bilgisayar",
      imageUrl:
        "https://images.unsplash.com/photo-1640955014216-75201056c829?auto=format&fit=crop&q=80&w=1032&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      productPrice: 5000,
    },
    {
      productName: "Kebap",
      imageUrl:
        "https://media.istockphoto.com/id/1384981720/tr/foto%C4%9Fraf/traditional-delicious-turkish-foods-adana-kebab.jpg?s=612x612&w=is&k=20&c=r0LWRKQcG3p6wAlpu6h6Sk8o71oYya5BllUzVNVP1rc=",
      productPrice: 150,
    },
  ];
  return (
    <div className="Product-wrapper">
      <h1>Products</h1>
      <div className="Products">
        {productData.map((product) => {
          return (
            <ProductItem
              key={product.productName}
              product={product}
              
            />
          );
        })}
      </div>
    </div>
  );
}
export default Products;
