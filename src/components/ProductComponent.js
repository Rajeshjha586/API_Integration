import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);

  //map the data which is present in array
  const list = products.map((product) => {
    //Destructured
    const { id, image, title, price, category } = product;
    return (
      <div className="four wide column">
        <Link to={{ pathname: `/product/${id}`, state: { id: id } }}>
          <div className="ui link cards" key={id}>
            <div className="card">
              <div className="image">
                <img src={image} />
              </div>

              <div className="content">
                <div className="title">{title}</div>
                <div className="meta price">$ {price}</div>
                <div className="meta">$ {category}</div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  });

  return (
    //fragment
    <>{list}</>
  );
};

export default ProductComponent;
