const Counter = (props) => {
  const { counter, setCounter, children } = props;
  return (
    <div>
      <button className="product-button" onClick={() => setCounter(counter + 1)}>+</button>
      {children}
      <button className="product-button" onClick={() => setCounter(counter - 1)}>-</button>
    </div>
  );
};

export default Counter;
