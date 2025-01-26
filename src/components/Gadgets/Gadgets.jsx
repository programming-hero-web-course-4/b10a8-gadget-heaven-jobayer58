import { useEffect, useState } from "react";
import Gadget from "../Gadget/Gadget";


const Gadgets = () => {

    const [gadgets, setGadgets] = useState([])

    useEffect(() => {
        fetch('./gadgetData.json')
        .then(res => res.json())
        .then(data => setGadgets(data))
    },[])

    return (
        <div className="mt-[500px]  ">
            <h1 className="text-5xl font-bold text-center py-5">Explore Cutting-Edge Gadgets</h1>
            <div className="bg-white mt-8 w-4/6 mx-auto rounded-2xl">
            <div className=" py-10 flex justify-center gap-5 " >
                <button className="btn btn-outline btn-primary text-2xl py-8 px-5">All Products</button>
                <button className="btn btn-outline btn-success text-2xl py-8 px-5">Laptop</button>
                <button className="btn btn-outline btn-success text-2xl py-8 px-5">Samsung</button>
                <button className="btn btn-outline btn-success text-2xl py-8 px-5">IPhone</button>
                <button className="btn btn-outline btn-success text-2xl py-8 px-5">Smart Watch</button>
                <button className="btn btn-outline btn-success text-2xl py-8 px-5">MacBook</button>
            </div>
            </div>
            <div className="grid grid-cols-3 w-4/6 justify-center items-center mx-auto gap-8">
                {
                    gadgets.map(gdg => <Gadget key={gdg.product_id} gadget={gdg}></Gadget>)
                }
            </div>
        </div>
    );
};

export default Gadgets;