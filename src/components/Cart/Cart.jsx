import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoreCartList } from "../../utility/addToDB";
import CartDetails from "../CartDetails/CartDetails";



const Cart = () => {
    const [gadgetList, setGadgetList] = useState([])
    const allGadget = useLoaderData()

    const [sort, setSort] = useState('')
    const [totalPrice, setTotalPrice]= useState(0)



    useEffect(() => {
        const storedCartList = getStoreCartList()
        const storedCartListInt = storedCartList.map(id => parseInt(id))


        const gadgetListItem = allGadget.filter(gdg => storedCartListInt.includes(gdg.product_id))

        setGadgetList(gadgetListItem)

    }, [allGadget])

    useEffect(() => {
        const thisTotalPriceIS = gadgetList.reduce((sum,gadget) => sum + gadget.price, 0)
        setTotalPrice(thisTotalPriceIS)
    },[gadgetList])

    const handleSort = sortType => {
        setSort(sortType)

        if (sortType === 'price') {
            const sortedGadgetList = [...gadgetList].sort((a, b) => b.price - a.price)
            setGadgetList(sortedGadgetList)
        }
    }

    return (
        <div className="w-8/10 mx-auto mt-16">
            <div className="flex justify-between">
                <div><h1 className="text-3xl font-bold">Cart </h1></div>
                <div className="flex gap-5 justify-center items-center">
                    <h1 className="text-3xl font-bold">Total Price:  {totalPrice}</h1>
                    <button onClick={() => handleSort('price')} className="btn border-[#9538E2] text-[#9538E2] rounded-3xl text-xl py-6 px-8">Sort By Price</button>
                    <button className="btn bg-[#9538E2] text-white rounded-3xl text-xl py-6 px-8">Purchase</button>
                </div>
            </div>
            <div className="mt-5">
                <p className="text-2xl font-bold">My Total Added Cart: {gadgetList.length}</p>
            </div>
            <div className="space-y-8">
                {
                    gadgetList.map((gadget, idx) => <CartDetails key={idx} gadget={gadget}></CartDetails>)
                }
            </div>
        </div>
    );
};

export default Cart;