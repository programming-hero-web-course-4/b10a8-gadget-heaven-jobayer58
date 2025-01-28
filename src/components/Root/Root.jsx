import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";
import { useEffect } from "react";


const Root = () => {

    const location = useLocation();

    useEffect(() => {
        const locationSet = location.pathname;
        const locationTitle = locationSet === '/' ? 'Home' : locationSet.split('/')[1];
        document.title = `Gadget Heaven | ${locationTitle.charAt(0).toUpperCase() + locationTitle.slice(1)}`;
    }, [location]);
    
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;