import ceo from '../../../assets/stev-jobs.jpeg'
import mark from '../../../assets/mark.jpeg'
import mental from '../../../assets/elon_mask.jpeg'

const About = () => {
    return (
        <div>
            <div className="bg-[#9538E2] md:h-72 text-center text-white">
                <h1 className="text-4xl  font-bold pt-10">About Us</h1>
                <p className="text-gray-50 md:mx-0 mx-3 py-8 text-xl">Welcome to Gadget Haven, your one-stop shop for the latest gadgets and tech accessories. <span className='hidden lg:inline'><br /></span> Our goal is to provide innovative devices that simplify and enhance your life. <span className='hidden lg:inline'><br /></span> Whether your a tech lover  or just upgrading your essentials, <span className='hidden lg:inline'><br /></span> we’re here to help you stay ahead in the world of technology.</p>
            </div>
            <div className="w-10/12 mx-auto mt-16">
                <h1 className="md:text-5xl text-3xl font-bold text-center">Special person of Gadget Heaven</h1>
                <div className='mt-16 md:flex justify-around space-y-10 md:space-y-0'>
                    {/* card-1 */}
                    <div className="card bg-base-100 md:w-96 shadow-xl">
                        <figure className=" pt-10">
                            <img
                                src={ceo}
                                className="rounded-xl md:h-66 md:w-76 h-56 w-56 object-cover" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title text-2xl">Steve Jobs</h2>
                            <p>Ceo</p>
                            <p className='text-xl font-bold'>About</p>
                            <p>Steve Jobs serves as the CEO of our organization. With a deep passion for technology, he has been working in the industry for over 10 years. Under his leadership, our company has been delivering world-class gadget services.</p>
                            <p className='text-xl font-bold'>Expertise</p>
                            <p>Technological innovation, business strategy, and strategic leadership.</p>
                        </div>
                    </div>
                    {/* card-2 */}
                    <div className="card bg-base-100 md:w-96 shadow-xl">
                        <figure className=" pt-10">
                            <img
                                src={mental}
                                className="rounded-xl md:h-66 md:w-76 h-56 w-56 object-cover" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title text-2xl">Elon Musk</h2>
                            <p>Technical Director</p>
                            <p className='text-xl font-bold'>About</p>
                            <p> Elon Musk is our Technical Director. Specializing in web development and software engineering, she guides our team with her deep knowledge and passion for coding.</p>
                            <p className='text-xl font-bold'>Expertise</p>
                            <p>Web development, software architecture, and data security.</p>
                        </div>
                    </div>
                    {/* card-3 */}
                    <div className="card bg-base-100 md:w-96 shadow-xl">
                        <figure className=" pt-10">
                            <img
                                src={mark}
                                className="rounded-xl md:h-66 md:w-76 h-56 w-56 object-cover" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title text-2xl">mark zuckerberg</h2>
                            <p> Marketing Manager</p>
                            <p className='text-xl font-bold'>About</p>
                            <p>Mark zuckerberg is our Marketing Manager. He creates innovative marketing strategies to attract new customers and expand our services to a broader audience. His vision and planning have brought unparalleled success to our company.</p>
                            <p className='text-xl font-bold'>Expertise</p>
                            <p>Brand positioning, market research, and presenting our products to new</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;