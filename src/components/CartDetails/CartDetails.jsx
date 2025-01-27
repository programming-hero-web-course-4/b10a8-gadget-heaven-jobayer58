import PropTypes from 'prop-types';

const CartDetails = ({ gadget }) => {
    const { product_img,product_title,price,description } = gadget
    return (
        <div>
           <div className="flex mt-10  bg-white rounded-3xl h-52 ">
            <div className="px-5 py-7">
                <img className="h-36 w-36 object-cover rounded-xl " src={product_img} alt="" />
            </div>
            <div className=" mt-10 space-y-4">
                <div>
                    <h1 className="text-2xl font-bold">{product_title}</h1>

                </div>
                <p className="text-gray-500">{description}</p>
                <p className="text-xl">Price: {price}K</p>
            </div>
           </div>
        </div>
    );
};

CartDetails.propTypes = {
    gadget: PropTypes
}
export default CartDetails;