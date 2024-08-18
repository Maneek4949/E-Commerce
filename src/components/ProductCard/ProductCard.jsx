import { Col } from "react-bootstrap";
import "./product-card.css";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { addToCart } from "../../app/features/cart/cartSlice";

const ProductCard = ({ title, productItem }) => {
  const dispatch = useDispatch();
  const handelAdd = (productItem) => {
    dispatch(addToCart({ product: productItem, num: 1 }));
    toast.success("Product has been added to cart!");
  };
  return (
    <Col md={3} sm={5} xs={10} className="product mtop">
      <img
        loading="lazy"
        src={productItem.imgUrl}
        alt=""
      />
      <div className="product-details">
        <h3>{productItem.productName}</h3>
        <div className="price">
          <h4>${productItem.price}</h4>
          
          <button
            aria-label="Add"
            type="submit"
            className="addTobtn"
            onClick={() => handelAdd(productItem)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </Col>
  );
};

export default ProductCard;
