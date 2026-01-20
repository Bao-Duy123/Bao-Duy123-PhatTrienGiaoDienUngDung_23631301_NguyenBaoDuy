import './ProductCard.css'; 

const ProductCard = () => {
  return (
    <div className="product-card">
      <img 
        src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500&q=80" 
        alt="Sản phẩm" 
        className="product-image" 
      />
        <h3 >iPhone 15 Pro Max</h3>
        <p >29.990.000đ</p>
        <button>Add to cart</button>
      </div>
  );
};

export default ProductCard;