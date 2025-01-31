import PropTypes from 'prop-types';

const WishItem = ({ wish }) => {
    const { price, description, product_title, product_img } = wish
    return (
        <div>
            <div className="md:flex mt-10  bg-white rounded-3xl md:h-62 py-5 md:text-start text-center ">
                <div className="md:px-5 md:py-10 py-1 items-center justify-center flex">
                    <img className="h-36 w-36 object-cover rounded-xl " src={product_img} alt="" />
                </div>
                <div className=" md:mt-8 mt-2 md:space-y-4 space-y-2">
                    <div>
                        <h1 className="md:text-2xl text-xl font-bold">{product_title}</h1>

                    </div>
                    <p className="text-gray-500">Description: {description}</p>
                    <p className="md:text-xl">Price: {price}K</p>
                    <button  className=" btn bg-[#9538E2] md:py-7 md:px-7 rounded-4xl">
                        <h2 className=" md:text-xl text-white px-2">Add To Cart</h2>
                        
                    </button>
                </div>
            </div>
        </div>
    );
};

WishItem.propTypes = {
    wish: PropTypes
}

export default WishItem;