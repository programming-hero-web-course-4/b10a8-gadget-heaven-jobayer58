import BannerImg from '../../../assets/banner.jpg'


const Banner = () => {
    return (
        <div>
            <div className="bg-[#9538E2] md:h-[800px] h-[620px] relative">
                <h1 className="md:text-6xl text-3xl text-center text-white font-bold py-10 leading-snug">Upgrade Your Tech Accessorize with <br /> Gadget Heaven Accessories</h1>
                <p className="text-white text-center text-xl md:mx-0 mx-2">Explore the latest gadgets that will take your experience to the next level. From smart devices to <span className='hidden lg:inline'><br /></span> the coolest accessories, we have it all!</p>
                <div className="flex justify-center py-10">
                    <button className="btn text-[#9538E2] text-xl font-bold py-7 px-10 rounded-[40px]">Shop Now</button>
                </div>

            </div>

            <div className='absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2  flex justify-center items-center border-4 border-white rounded-4xl md:w-[1290px] w-[270px] md:h-[710px] mx-auto'>
                <img className='md:w-[1250px]  md:h-[670px] h-full object-cover rounded-4xl' src={BannerImg} alt="" />
            </div>

        </div>
    );
};

export default Banner;