
const Footer = () => {
    return (
        <div className="bg-white mt-[500px]">
            <div className="text-center pt-28 ">
                <h1 className="text-5xl font-bold">Gadget Heaven</h1>
                <p className="text-xl text-gray-500 py-9">Leading the way in cutting-edge technology and innovation.</p>
            </div>
            <hr className="text-gray-300 w-8/10 mx-auto" />
            <div className="flex justify-around text-center w-5/8 mx-auto mt-10">
                <div>
                    <h1 className="text-2xl font-bold">Services</h1>
                    <ul className="mt-5 space-y-3">
                        <li>Product Support</li>
                        <li>Order Tracking</li>
                        <li>Shipping & Delivery</li>
                        <li>Returns</li>
                    </ul>
                </div>
                <div>
                    <h1 className="text-2xl font-bold">Company</h1>
                    <ul className="mt-5 space-y-3 ">
                        <li>About Us</li>
                        <li>Careers</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div>
                    <h1 className="text-2xl font-bold">Legal</h1>
                    <ul className="mt-5 space-y-3 ">
                        <li>Terms of Service</li>
                        <li>Privacy Policy</li>
                        <li>Cookie Policy</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Footer;