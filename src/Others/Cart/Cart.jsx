import React from 'react';
import { Link } from 'react-router-dom';

const Cart = ({product,handleCheckout}) => {
    const {name,price, picture, _id} = product;

    
    return (
        <div className="card card-compact  bg-base-100 shadow-xl">
            <figure><img className='h-48 w-96' src={picture} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{price}</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                    <Link to={`/checkout/${_id}`}>
                    <button onClick={()=>handleCheckout(_id)} className="btn btn-primary">checkout</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Cart;