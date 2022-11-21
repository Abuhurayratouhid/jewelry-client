import React from 'react';

const AwesomeProduct = () => {
    return (
        <div>
            <div className="hero w-full" >
                <div className=" "></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold text-black">SOME AWESOME PRODUCT </h1>
                        <h1 className="mb-5 text-2xl font-bold text-black">YOU MIGHT LIKE  </h1>
                        
                    </div>
                </div>
            </div>
            <div className="hero md:my-2 mx-auto  bg-base-200">

                <div className="hero-content flex-col lg:flex-row-reverse gap-">
                    <img alt='jewelry' src="https://i.pinimg.com/474x/04/a5/d4/04a5d4fa5b0208351802db61b8f5b1cd.jpg" className="max-w-sm rounded-lg shadow-2xl" />
                    <img alt='jewelry' src="https://4.imimg.com/data4/SK/EL/ANDROID-12194828/product-500x500.jpeg" className="max-w-sm rounded-lg shadow-2xl" />
                    <img alt='jewelry' src="https://cdn0.weddingwire.in/article/3340/original/1280/jpg/60433-long-necklace-designs-papilior-minimal-long-necklace-design.jpeg" className="max-w-sm rounded-lg shadow-2xl" />
                    {/* <img alt='jewelry' src="https://i.pinimg.com/736x/6a/01/ad/6a01ad29287d507dca7cc0db41b7f1c2.jpg" className="max-w-sm rounded-lg shadow-2xl" /> */}

                </div>
            </div>
        </div>
    );
};

export default AwesomeProduct;