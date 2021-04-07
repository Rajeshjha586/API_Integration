import React, { useEffect } from "react";
import axios from "axios";
// import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectedProduct } from "../reducers/actions/Actions.js";

const ProductDetails = (props) => {
  var id = props.location.state.id;
  // console.log("Consolo", id);
  // console.log(props.location.state);

  // console.log(productId);

  // let product = useSelector((state) => {
  //   console.log(state);
  //   return state.allproduct.products;
  // }).allproduct.products;

  const product = useSelector((state) => state).allProducts.products;
  const pr = product.filter((item) => item.id == id)[0];
  console.log(pr);

  console.log(product);

  const { image, title, price, category, description } = pr;

  const dispatch = useDispatch();

  const fetchProductDetail = async () => {
    // console.log("ID++", id);
    const response = await axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .catch((err) => {
        console.log("Error ==> ", err);
      });
    dispatch(selectedProduct(response.data));
  };

  useEffect(() => {
    fetchProductDetail();
  }, [id]);

  return (
    <div className="ui grid container">
      {Object.keys(product).length === 0 ? (
        <div>...Loading</div>
      ) : (
        <div className="ui placeholder segment">
          <div className="ui two column stackable center aligned grid">
            <div className="ui vertical divider">AND</div>
            <div className="middle aligned row">
              <div className="column lp">
                <img className="ui fluid image" src={image} />
              </div>
              <div className="column rp">
                <h1>{title}</h1>
                <h2>
                  <a className="ui teal tag label">${price}</a>
                </h2>
                <h3 className="ui brown block header">{category}</h3>
                <p>{description}</p>
                <div className="ui vertical animated button" tabIndex="0">
                  <div className="hidden content">
                    <i className="shop icon"></i>
                  </div>
                  <div className="visible content">Add to Cart</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
