import { NavLink, useLoaderData, useParams } from "react-router-dom";
import { FcRating } from "react-icons/fc";
import { CiHeart } from "react-icons/ci";
import { MdOutlineLocalGroceryStore } from "react-icons/md";
import { addToStoreCartList, addToStoreWishList } from "../../utility/addToDB";
import { useContext, useState } from "react";
import { CountContext } from "../../utility/context";

const ProductDetails = () => {

    const { product_id } = useParams()
    const data = useLoaderData()
    const id = parseInt(product_id)

    const gadget = data.find(gdg => gdg.product_id === id)

    const { product_img, product_title, price, specification, available, rating, description } = gadget

    const { sumCart } = useContext(CountContext)
    const [clicked , setClicked] = useState(false)

    const handleAddCart = (id) => {
        if (!clicked) {
            addToStoreCartList(id)
            sumCart(0)
            setClicked(true)
        }else{
            alert ('all Ready this cart is added your cart list')
        }
    }


    const {sumHart} = useContext(CountContext)
    const [clickedHart,setClickedHart] = useState(false)

    const handleWishCart = (id) => {
        if (!clickedHart) {
            addToStoreWishList(id)
            sumHart(0)
            setClickedHart(true)
        }else(
            alert('Your Favorite product is all ready added your Wish list')
        )
    
    }

    return (
        <div>
            <div className="bg-[#9538E2] h-96 text-center text-white">
                <h1 className="text-4xl  font-bold pt-8">Products Details</h1>
                <p className="text-gray-50 py-6 text-xl">Explore the latest gadgets that will take your experience to the next level. From smart devices to <br /> the coolest accessories, we have it all!</p>
            </div>
            <div className=" md:w-5/8 w-4/5 mx-auto md:bottom-52 bottom-28 relative  ">
                <div className="md:flex bg-base-200 md:h-[600px] py-6 md:py-0 rounded-4xl ">
                    <div className="rounded-4xl flex items-center">
                        <img src={product_img} alt=""
                            className="md:h-[500px] md:w-[650px] md:mt-0 mt-1 md:px-10 px-5 object-cover rounded-4xl"
                        />
                    </div>
                    <div className="items-center md:pt-12 pt-5 text-center md:text-start space-y-4 ">
                        <h1 className="md:text-2xl text-xl font-bold">{product_title}</h1>
                        <p className="text-xl font-medium">Price: {price}k</p>
                        <button className="btn btn-outline rounded-4xl text-green-400">{available}</button>
                        <p className="text-gray-700">{description}</p>
                        <h2 className="text-xl font-bold">Specification:</h2>
                        {
                            specification.map((spf, idx) => <ul key={idx}><li>{spf}</li></ul>)
                        }
                        <h2 className="text-xl  items-center font-bold  flex md:justify-start justify-center  gap-1">Rating <FcRating className="mt-1" /></h2>
                        <div className="flex md:justify-start justify-center gap-3 items-center">
                            <div className="rating">
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" defaultChecked />
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                            </div>
                            <div className="bg-gray-300 rounded-4xl px-4 py-1">{rating}</div>
                        </div>
                        {/* btn */}
                        <div className="flex md:justify-start justify-center items-center gap-5">
                            <NavLink >
                                <button onClick={() => handleAddCart(product_id)} className="flex btn bg-[#9538E2] md:py-7 md:px-7 rounded-4xl">
                                    <h2 className=" md:text-xl text-white md:px-2">Add To Cart</h2>
                                    <p className="text-white">
                                        <MdOutlineLocalGroceryStore className="text-2xl " />
                                    </p>
                                </button>
                            </NavLink>
                            <button onClick={() => handleWishCart(product_id)} className="border btn border-gray-300 rounded-full h-11 w-11 md:h-14 md:w-14 items-center justify-center text-center flex">
                                <p>
                                    <CiHeart className="text-3xl items-center justify-center text-center flex" />
                                </p>
                            </button>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default ProductDetails;