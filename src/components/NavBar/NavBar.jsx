import { MdOutlineLocalGroceryStore } from "react-icons/md";
import { RiHeart3Line } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import './NavBar.css'
import { useContext } from "react";
import { CountContext } from "../../utility/context";



const NavBar = () => {

    const {countSum} = useContext(CountContext)
    const {countHart} = useContext(CountContext)

    const links = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to='statistic'>statistics</NavLink></li>
        <li><NavLink to='dashboard'>Dashboard</NavLink></li>
        <li><NavLink to='about'>About</NavLink></li>
        
    </>

    return (
        <div className="bg-[#D0E3ff] ">
            <div className="navbar max-w-[1500px] mx-auto py-8">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-7 w-7 "
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">                          
                            {links}
                        </ul>
                    </div>
                    <a className="btn btn-ghost font-bold md:text-4xl text-center text-xl ">Gadget Heaven</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-6 text-xl">                     
                        {links}
                    </ul>
                </div>
                <div className="navbar-end md:gap-5 gap-3">
                    <div className=" bg-white  rounded-full h-12 w-12 items-center justify-center text-center flex">
                        <MdOutlineLocalGroceryStore className="text-2xl " />
                        <span className="absolute top-8 bg-white text-black text-sm rounded-full h-4 w-5 flex items-center justify-center">
                            {countSum}
                        </span>
                    </div>
                    <div className="bg-white rounded-full h-12 w-12 items-center justify-center text-center flex">

                        <RiHeart3Line className="text-2xl items-center justify-center text-center flex" />
                        <span className="absolute top-8 bg-white text-black text-sm rounded-full h-5 w-5 flex items-center justify-center">
                            {countHart}
                        </span>
                    </div>

                </div>
            </div>

            <div>

            </div>

        </div>


    );
};

export default NavBar;