import React, { useEffect, useState } from 'react';
import Cart from '../../Others/Cart/Cart';

const Products = () => {
    const [products, setProducts] = useState([])

    useEffect(()=>{
        fetch(`http://localhost:5000/jewelries`)
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])

    const handleCheckout = (_id)=>{
        // console.log('clicked from product page',_id)
        // fetch(`http://localhost:5000/jewelry/${_id}`)
        // .then(res => res.json())
        // .then(data => console.log(data))
    }
    return (
        <div>
            <div className="hero w-full" >
                <div className=" "></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-2xl font-bold text-black">ALL PRODUCTS </h1>
                        <h1 className="mb-5 text-2xl font-bold text-black">Star shopping  </h1>
                        
                    </div>
                </div>
            </div>


            {/* products cart  */}
            <div className='grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4'>
                {
                    products.map(product =><Cart
                    key={product._id}
                    product={product}
                    handleCheckout={handleCheckout}
                    ></Cart> )
                }
            
            </div>
        </div>
    );
};

export default Products;