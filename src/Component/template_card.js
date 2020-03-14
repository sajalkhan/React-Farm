import React from 'react';
import {Link} from 'react-router-dom';

const template_card = (props) => {

  return (
    <figure className="card">
      <div className="card__emoji">{props.data.image}{props.data.image}</div>
      <div className="card__title-box">
        <h2 className="card__title">{props.data.productName}</h2>
      </div>

      <div className="card__details">

        {(props.data.organic) ?
          <div>
            <h6 className="card__detail card__detail--organic">Organic!</h6>
          </div> : null}

        <div className="card__detail-box">
          <h6 className="card__detail">{props.data.quantity} {props.data.image} per 📦</h6>
        </div>

        <div className="card__detail-box">
          <h6 className="card__detail card__detail--price">{props.data.price}€</h6>
        </div>
      </div>

      <Link className="card__link" to={{ pathname: '/product', state: { product: props.data} }}>
        <span>Detail <i className="emoji-right"><span role="img" aria-label="">👉</span></i></span>
      </Link>

    </figure>


  )
}

export default template_card;