import { Row } from "react-bootstrap";
import { memo, useEffect } from "react";
import ProductCard from "./ProductCard/ProductCard";


const ShopList = ({ productItems }) => {
  return (
    <Row className="justify-content-center">
      {productItems.map((productItem) => {
        return (
          <ProductCard
            key={productItem.id}
            title={null}
            productItem={productItem}
          />
        );
      })}
    </Row>
  );
};
export default memo(ShopList);
