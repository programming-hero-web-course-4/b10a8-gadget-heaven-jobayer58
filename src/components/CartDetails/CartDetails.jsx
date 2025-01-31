import PropTypes from 'prop-types';

const CartDetails = ({ gadget }) => {
    const { product_img,product_title,price,description } = gadget
    return (
        <div>
           <div className="md:flex py-5 mt-10 text-center md:text-start bg-white rounded-3xl md:h-52 ">
            <div className="md:px-5 md:py-7  flex items-center justify-center">
                <img className="h-36 w-36 object-cover rounded-xl " src={product_img} alt="" />
            </div>
            <div className=" md:mt-10 mt-4 space-y-4">
                <div>
                    <h1 className="md:text-2xl font-bold">{product_title}</h1>

                </div>
                <p className="text-gray-500">{description}</p>
                <p className="md:text-xl">Price: {price}K</p>
            </div>
           </div>
        </div>
    );
};

CartDetails.propTypes = {
    gadget: PropTypes
}
export default CartDetails;