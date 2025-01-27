import { NavLink } from "react-router-dom";
import PropTypes from 'prop-types';


const Gadget = ({ gadget }) => {
    const {product_id, product_img, product_title, price } = gadget
    return (
        <div>
            <div className="card bg-base-100 w-[400px] shadow-sm mt-10">
                <figure className="px-10 pt-10">
                    <img
                        src={product_img}
                        alt="gadget"
                        className="rounded-xl h-40" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-2xl">{product_title}</h2>
                    <p className="text-xl text-gray-500">Price: {price}k</p>
                    <div className="card-actions">
                        <NavLink to={`productDetails/${product_id}`}>
                            <button className="btn btn-outline btn-secondary rounded-3xl">Viw Details</button>
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

Gadget.propTypes = {
    gadget: PropTypes

}

export default Gadget;