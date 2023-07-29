import React, { useEffect, useState } from "react";
import { Col, Row, Button } from "antd";
import ProductItem from "components/eCommerce/ProductItem";
import axios from "axios";

const ProductsList = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    let productRaw = localStorage.getItem('cart');
    let cartProducts = JSON.parse(productRaw) ?? [];
    setProducts(cartProducts);
  }, []);

  const updateQuantity = (product, addCount) => {
    let productRaw = localStorage.getItem('cart');
    let products = JSON.parse(productRaw) ?? [];
    let addProduct = products.find((item) => item.name === product.name);
    if (addProduct) {
      addProduct.quantity = (addProduct.quantity ?? 0) + addCount;
    }
    products = products.filter((item) => item.quantity);
    setProducts(products);
    localStorage.setItem("cart", JSON.stringify(products));
  }

  const pay = async () => {
    let items = products.map(item => ({
      "name": item.name,
      "price": item.price,
      "image": item.thumb,
      "quantity": item.quantity,
    }));
    const response = await axios.post("http://18.212.57.11:3000/api/candy-pay", {
      items
    });
    window.location.replace(response?.data?.payment_url);
}
return (
  <div className="gx-main-content">
    <Row>
      <Col span={24}>
        <Button onClick={pay}>Pay</Button>
      </Col>
      {products.map((product, index) => (<Col key={index} span={24}>
        <ProductItem key={index} product={product} updateQuantity={updateQuantity} />
      </Col>
      ))}
    </Row>
  </div>
);
};

export default ProductsList;
