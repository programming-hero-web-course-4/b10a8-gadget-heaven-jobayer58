import { useLoaderData, useParams } from "react-router-dom";

const ProductDetails = () => {

    const {product_id} = useParams()
    const data = useLoaderData()
    const id = parseInt(product_id)

    const gadget = data.find(gdg => gdg.product_id === id )
    
    const {product_img,product_title,price,specification,available,rating,description} = gadget


    return (
        <div>
            <div className="bg-[#9538E2] h-96 text-center text-white">
                <h1 className="text-4xl  font-bold pt-8">Products Details</h1>
                <p className="text-gray-50 py-6 text-xl">Explore the latest gadgets that will take your experience to the next level. From smart devices to <br /> the coolest accessories, we have it all!</p>
            </div>
            <div className=" w-5/8 mx-auto  absolute left-1/2 transform -translate-x-1/2 -translate-y-1/3  ">
                <div className="hero bg-base-200 h-[600px] rounded-4xl">
                    <div className="hero-content flex-col lg:flex-row">
                        <img
                            src={product_img}
                            className=" rounded-lg shadow-2xl h-full w-full object-cover" />
                        <div>
                            <h1 className="text-3xl font-bold">{product_title}</h1>
                            <p className="py-6">
                                {price}
                            </p>
                            <button className="btn btn-primary">Get Started</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;