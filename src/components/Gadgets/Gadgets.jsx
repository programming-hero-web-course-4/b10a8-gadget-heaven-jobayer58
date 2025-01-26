import { useEffect, useState } from "react";
import Gadget from "../Gadget/Gadget";


const Gadgets = () => {

    const [gadgetsProducts, setGadgetsProducts] = useState([])
    const [categorySearchItem, setCategorySearchItem] = useState("All Products")

    useEffect(() => {
        fetch('./gadgetData.json')
            .then((res) => res.json())
            .then((data) => setGadgetsProducts(data))
    }, [])

    const gadgetFiltered = categorySearchItem === "All Products"
        ? gadgetsProducts
        : gadgetsProducts.filter((gadget) =>
            gadget.category.toLowerCase().includes(categorySearchItem.toLowerCase()));

    return (
        <div className="mt-[500px]  ">
            <h1 className="text-5xl font-bold text-center py-5">Explore Cutting-Edge Gadgets</h1>
            <div className="bg-white mt-8 w-4/6 mx-auto rounded-2xl">
                <div className=" py-10 flex justify-center gap-5 " >
                    <button onClick={() => setCategorySearchItem("All Products")} className="btn btn-outline btn-primary text-2xl py-8 px-5">All Products</button>
                    <button onClick={() => setCategorySearchItem("laptop")} className="btn btn-outline btn-success text-2xl py-8 px-5">Laptop</button>
                    <button onClick={() => setCategorySearchItem("samsung phone")} className="btn btn-outline btn-success text-2xl py-8 px-5">Samsung</button>
                    <button onClick={() => setCategorySearchItem("iphone phone")} className="btn btn-outline btn-success text-2xl py-8 px-5">IPhone</button>
                    <button onClick={() => setCategorySearchItem("smart watch")} className="btn btn-outline btn-success text-2xl py-8 px-5">Smart Watch</button>
                    <button onClick={() => setCategorySearchItem("macBook")} className="btn btn-outline btn-success text-2xl py-8 px-5">MacBook</button>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 w-4/6  justify-center items-center mx-auto gap-8">
                {gadgetFiltered.length > 0 ? (
                    gadgetFiltered.map((gdg) => (
                        <Gadget key={gdg.product_id} gadget={gdg}></Gadget>
                    ))
                ) : (
                    <div className="text-5xl mt-10  font-bold">
                        No Available This Product !! 
                    </div>
                )}
            </div>
        </div>
    );
};

export default Gadgets;