import { MdOutlineLocalGroceryStore } from "react-icons/md";
import { RiHeart3Line } from "react-icons/ri";
import { NavLink } from "react-router-dom";

const NavBar = () => {
    const links = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink >statistics</NavLink></li>
        <li><NavLink >Dashboard</NavLink></li>
    </>

    return (
        <div className="bg-[#D0E3ff] ">
            <div className="navbar max-w-[1500px] mx-auto py-8">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
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
                    <a className="btn btn-ghost text-3xl ">Gadget Heaven</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-6 text-xl">                     
                        {links}
                    </ul>
                </div>
                <div className="navbar-end gap-5">
                    <div className=" bg-white  rounded-full h-12 w-12 items-center justify-center text-center flex">
                        <MdOutlineLocalGroceryStore className="text-2xl " />
                    </div>
                    <div className="bg-white rounded-full h-12 w-12 items-center justify-center text-center flex">

                        <RiHeart3Line className="text-2xl items-center justify-center text-center flex" />
                    </div>

                </div>
            </div>

            <div>

            </div>

        </div>


    );
};

export default NavBar;