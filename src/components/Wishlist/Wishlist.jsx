import { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { clearStorageWish, getStoreWishList } from "../../utility/addToDB";
import WishItem from "../WishItem/WishItem";
import { CountContext } from "../../utility/context";


const Wishlist = () => {

    const [wishList, setWishList] = useState([])
    const allWish = useLoaderData()



    useEffect(() => {
        const storedCartList = getStoreWishList()

        const storedCartListInt = storedCartList.map(id => parseInt(id))


        const gadgetListItem = allWish.filter(gdg => storedCartListInt.includes(gdg.product_id))

        setWishList(gadgetListItem)

    }, [])

    const {countResetWish} = useContext(CountContext)

    const clearWishList = () => {
        clearStorageWish()
        setWishList([])
        countResetWish(0)
    }

    return (
        <div className="w-8/10 mx-auto mt-16">
            <div >
                <h2 className="text-3xl font-bold">WishList</h2>
            </div>
            <div className="mt-5 flex justify-between">
                <p className="text-2xl font-bold">My Total Wish: {wishList.length}</p>
                <p onClick={clearWishList} className="btn bg-[#9538E2] text-white rounded-3xl  text-xl py-6 px-8">Clear Wish List</p>
            </div>
            <div>
                {
                    wishList.map((gdg, idx) => <WishItem key={idx} wish={gdg}></WishItem>)
                }
            </div>
        </div>
    );
};

export default Wishlist;