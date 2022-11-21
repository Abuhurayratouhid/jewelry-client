import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const Checkout = () => {
    const {user} = useContext(AuthContext)
    const product = useLoaderData()
    const {picture , price } = product;
    // console.log(product)
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
            <>
            <img alt='jewelry' src={picture} className="md:w-2/4 rounded-lg shadow-2xl md:ml-5" />
          
            </>

           
                {/* checkout form info  */}

                <div className="card flex-shrink-0 md:w-2/4  shadow-2xl bg-base-100">
                    <h1 className='text-3xl pt-5'>Your Info </h1>
                    <form className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name </span>
                            </label>
                            <input type="text" placeholder="name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Phone</span>
                            </label>
                            <input type="text" placeholder="Phone" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" defaultValue={user?.email} placeholder="email" className="input input-bordered" readOnly/>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" placeholder="password" className="input input-bordered" />
                            
                        </div>
                        <div className="form-control">
                        <textarea className="textarea bg-slate-200" placeholder="About your order"></textarea> 
                            
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">confirm corder</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Checkout;