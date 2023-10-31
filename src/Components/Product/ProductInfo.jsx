const ProductInfo = (props) => {
  return (
    <div className="product-info">
      <span className="ad">hizirfurkanyasar.com.tr</span>
      {props.children}
    </div>
  );
};
export default ProductInfo;
