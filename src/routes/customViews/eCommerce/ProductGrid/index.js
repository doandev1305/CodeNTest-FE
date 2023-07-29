import React, { useState } from "react";
import {Col, Row} from "antd";
import ProductItem from "components/eCommerce/ProductItem";
import productData from "routes/customViews/eCommerce/productData";

const ProductsGrid =()=> {
  const [products, setProducts] = useState([...productData]);
  const addToCart = (product) => {
    let productRaw = localStorage.getItem('cart');
    let products = JSON.parse(productRaw) ?? [];
    let addProduct = products.find((item) => item.name === product.name);
    if (addProduct) {
      addProduct.quantity = (addProduct.quantity ?? 0) + (product.quantity ?? 1);
    } else {
      addProduct = {
        ...product,
        quantity: (product.quantity ?? 1)
      };
      products.push(addProduct);
    }
    localStorage.setItem("cart", JSON.stringify(products));
    setProducts([...productData]);
  }

  const updateQuantity = (product, addCount) => {
    const updateProduct = products.find(item => item.name === product.name);
    updateProduct.quantity = (updateProduct.quantity ?? 1) + addCount;
    console.log(updateProduct);
    console.log(products)
    if (updateProduct.quantity)
    setProducts([...products]);
  }
  return (
    <Row>
      {products.map((product, index) => (<Col key={index} xl={6} md={8} sm={12} xs={24}>
          <ProductItem key={index} grid product={product} addToCart={addToCart} updateQuantity={updateQuantity}/>
        </Col>
      ))}
    </Row>
  );
}

export default ProductsGrid;
