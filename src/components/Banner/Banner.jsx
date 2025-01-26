import BannerImg from '../../../assets/banner.jpg'


const Banner = () => {
    return (
        <div>
            <div className="bg-[#9538E2] h-[800px] relative">
                <h1 className="text-6xl text-center text-white font-bold py-10 leading-snug">Upgrade Your Tech Accessorize with <br /> Gadget Heaven Accessories</h1>
                <p className="text-white text-center text-xl">Explore the latest gadgets that will take your experience to the next level. From smart devices to <br /> the coolest accessories, we have it all!</p>
                <div className="flex justify-center py-10">
                    <button className="btn text-[#9538E2] text-xl font-bold py-7 px-10 rounded-[40px]">Shop Now</button>
                </div>

            </div>

            <div className='absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2  flex justify-center items-center border-4 border-white rounded-4xl w-[1290px] h-[710px] mx-auto'>
                <img className='w-[1250px] h-[670px] object-cover rounded-4xl' src={BannerImg} alt="" />
            </div>

        </div>
    );
};

export default Banner;