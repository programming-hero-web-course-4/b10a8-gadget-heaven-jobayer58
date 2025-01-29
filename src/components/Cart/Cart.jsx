import { useContext, useEffect, useState } from "react";
import { NavLink, useLoaderData } from "react-router-dom";
import { clearStorageCart, getStoreCartList } from "../../utility/addToDB";
import CartDetails from "../CartDetails/CartDetails";
import modal from '../../../assets/Group.png'
import { CountContext } from "../../utility/context";



const Cart = () => {
    const [gadgetList, setGadgetList] = useState([])
    const allGadget = useLoaderData()

    const [sort, setSort] = useState('')
    const [totalPrice, setTotalPrice] = useState(0)



    useEffect(() => {
        const storedCartList = getStoreCartList()
        const storedCartListInt = storedCartList.map(id => parseInt(id))


        const gadgetListItem = allGadget.filter(gdg => storedCartListInt.includes(gdg.product_id))

        setGadgetList(gadgetListItem)

    }, [allGadget])

    useEffect(() => {
        const thisTotalPriceIS = gadgetList.reduce((sum, gadget) => sum + gadget.price, 0)
        setTotalPrice(thisTotalPriceIS)
    }, [gadgetList])

    const handleSort = sortType => {
        setSort(sortType)

        if (sortType === 'price') {
            const sortedGadgetList = [...gadgetList].sort((a, b) => b.price - a.price)
            setGadgetList(sortedGadgetList)
        }
    }

    const {countResetCart} = useContext(CountContext)

    const handlePurchaseBtn = () => {
        clearStorageCart()
        setGadgetList([])
        setTotalPrice(0)
        countResetCart(0)
        
    }

    return (
        <div className="w-8/10 mx-auto mt-16">
            <div className="flex justify-between">
                <div><h1 className="text-3xl font-bold">Cart </h1></div>
                <div className="flex gap-5 justify-center items-center">
                    <h1 className="text-3xl font-bold">Total Price:  {totalPrice}</h1>
                    <button onClick={() => handleSort('price')} className="btn border-[#9538E2] text-[#9538E2] rounded-3xl text-xl py-6 px-8">Sort By Price</button>
                    {/* Open the modal using document.getElementById('ID').showModal() method */}
                    <button className="btn bg-[#9538E2] text-white rounded-3xl  text-xl py-6 px-8" onClick={() => document.getElementById('my_modal_1').showModal()}>Purchase</button>
                    <dialog id="my_modal_1" className="modal text-center ">
                        <div className="modal-box justify-center text-center items-center flex-col space-y-4 ">
                            <img className="font-bold mx-auto text-lg" src={modal} alt="" />
                            <p className="py-4 text-3xl font-bold">Payment Successful</p>
                            <hr className="text-gray-300 w-8/10 mx-auto" />
                            <p>Thanks for Purchasing</p>
                            <p>Total: {totalPrice}</p>
                            <div className="modal-action flex items-center justify-center ">
                                <form method="dialog">
                                    {/* if there is a button in form, it will close the modal */}
                                    <NavLink to='/'><button onClick={handlePurchaseBtn} className="btn">Close</button></NavLink>
                                </form>
                            </div>
                        </div>
                    </dialog>

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