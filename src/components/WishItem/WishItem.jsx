import PropTypes from 'prop-types';

const WishItem = ({ wish }) => {
    const { price, description, product_title, product_img } = wish
    return (
        <div>
            <div className="flex mt-10  bg-white rounded-3xl h-62 ">
                <div className="px-5 py-10">
                    <img className="h-36 w-36 object-cover rounded-xl " src={product_img} alt="" />
                </div>
                <div className=" mt-8 space-y-4">
                    <div>
                        <h1 className="text-2xl font-bold">{product_title}</h1>

                    </div>
                    <p className="text-gray-500">Description: {description}</p>
                    <p className="text-xl">Price: {price}K</p>
                    <button  className="flex btn bg-[#9538E2] py-7 px-7 rounded-4xl">
                        <h2 className=" text-xl text-white px-2">Add To Cart</h2>
                        
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