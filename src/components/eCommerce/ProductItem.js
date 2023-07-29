import React from "react";
import { Button } from "antd";
import StarRatingComponent from "react-star-rating-component";
import { MinusOutlined, PlusOutlined } from '@ant-design/icons';

import IntlMessages from "util/IntlMessages";

const ButtonGroup = Button.Group;

const ProductItem = ({ product, grid, addToCart, updateQuantity }) => {
  const { thumb, name, price, mrp, offer, variant, rating, description } = product;
  return (
    <div className={`gx-product-item  ${grid ? 'gx-product-vertical' : 'gx-product-horizontal'}`}>
      <div className="gx-product-image">
        <div className="gx-grid-thumb-equal">
          <span className="gx-link gx-grid-thumb-cover">
            <img alt="Remy Sharp" src={thumb} />
          </span>
        </div>
      </div>

      <div className="gx-product-body">
        <h3 className="gx-product-title">{name}
          <small className="gx-text-grey">{", " + variant}</small>
        </h3>
        <div className="ant-row-flex">
          <h4>${price} </h4>
          <h5 className="gx-text-muted gx-px-2">
            <del>{mrp}</del>
          </h5>
          <h5 className="gx-text-success">{offer} off</h5>
        </div>
        <div className="ant-row-flex gx-mb-1">
          <StarRatingComponent
            name=""
            value={rating}
            starCount={5}
            editing={false} />
          <strong className="gx-d-inline-block gx-ml-2">{rating}</strong>
        </div>
        <p>{description}</p>
      </div>

      <div className="gx-product-footer">
        <ButtonGroup>
          <Button onClick={() => updateQuantity(product, -1)} icon={<MinusOutlined />} />
          <Button type="text">
            {product.quantity ?? 1}
          </Button>
          <Button onClick={() => updateQuantity(product, +1)} icon={<PlusOutlined />} />
        </ButtonGroup>
        {
          addToCart ? (
            <Button variant="raised"
              onClick={() => addToCart(product)}
            ><IntlMessages
                id="eCommerce.addToCart" /></Button>
          ) : (null)
        }
      </div>
    </div>
  )
};

export default ProductItem;

