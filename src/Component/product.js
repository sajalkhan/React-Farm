import React, { Fragment } from 'react';
import {Link} from 'react-router-dom';

import './product.css';

const product = (props)=>{

  const data = props.location.state;

  return(

    <Fragment>
    <title>{data.product.productname} {data.product.image}</title>

    <div className="container">
    <h1> <span role="img" aria-label="">🌽</span> React Farm 🥦</h1>

    <figure className="product">
      
      { (data.product.organic)?<div className="product__organic"><h5>Organic</h5></div> : null}

      <Link to="/overview" className="product__back">
        <span className="emoji-left"> <span role="img" aria-label="">👈</span> </span>Back
      </Link>

      <div className="product__hero">
        <span className="product__emoji product__emoji--1">{data.product.image}</span>
        <span className="product__emoji product__emoji--2">{data.product.image}</span>
        <span className="product__emoji product__emoji--3">{data.product.image}</span>
        <span className="product__emoji product__emoji--4">{data.product.image}</span>
        <span className="product__emoji product__emoji--5">{data.product.image}</span>
        <span className="product__emoji product__emoji--6">{data.product.image}</span>
        <span className="product__emoji product__emoji--7">{data.product.image}</span>
        <span className="product__emoji product__emoji--8">{data.product.image}</span>
        <span className="product__emoji product__emoji--9">{data.product.image}</span>
      </div>
      <h2 className="product__name">{data.product.productName}</h2>
      <div className="product__details">
        <p><span className="emoji-left"> <span role="img" aria-label=""> 🌍 </span>  </span> From {data.product.from}</p>
        <p><span className="emoji-left"> <span role="img" aria-label=""> ❤️ </span>  </span> {data.product.nutrients}</p>
        <p><span className="emoji-left"><span role="img" aria-label=""> 📦  </span>  </span> {data.product.quantity}</p>
        <p><span className="emoji-left"> <span role="img" aria-label=""> 🏷  </span>  </span> {data.product.price} </p>
      </div>

      <Link to="#" className="product__link">
        <span className="emoji-left">  <span role="img" aria-label=""> 🛒 </span> </span>
        <span>Add to shopping card ({data.product.price}€)</span>
      </Link>

      <p className="product__description">
        {data.product.description}
      </p>
    </figure>
    
  </div>
  </Fragment>

  );
}

export default product;
