import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoreWishList } from "../../utility/addToDB";
import WishItem from "../WishItem/WishItem";


const Wishlist = () => {

    const [wishList, setWishList] = useState([])
    const allWish = useLoaderData()



    useEffect(() => {
        const storedCartList = getStoreWishList()

        const storedCartListInt = storedCartList.map(id => parseInt(id))


        const gadgetListItem = allWish.filter(gdg => storedCartListInt.includes(gdg.product_id))

        setWishList(gadgetListItem)

    }, [])

    return (
        <div className="w-8/10 mx-auto mt-16">
            <div >
                <h2 className="text-3xl font-bold">WishList</h2>
            </div>
            <div className="mt-5">
                <p className="text-2xl font-bold">My Total Wish: {wishList.length}</p>
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