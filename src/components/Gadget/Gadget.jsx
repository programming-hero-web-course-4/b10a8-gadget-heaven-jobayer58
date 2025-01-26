

const Gadget = ({ gadget }) => {
    const {product_img, product_title, price } = gadget
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
                    <h2 className="card-title">{product_title}</h2>
                    <p>Price: {price}k</p>
                    <div className="card-actions">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gadget;