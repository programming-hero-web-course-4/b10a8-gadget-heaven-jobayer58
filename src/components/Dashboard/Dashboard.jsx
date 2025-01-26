

const Dashboard = () => {
    return (
        <div>
            <div className="bg-[#9538E2] h-72 text-center text-white">
                <h1 className="text-4xl  font-bold pt-10">Dashboard</h1>
                <p className="text-gray-50 py-6 text-xl">Explore the latest gadgets that will take your experience to the next level. From smart devices to <br /> the coolest accessories, we have it all!</p>
                <div className="flex justify-center gap-5">
                    <button className="flex btn bg-[#9538E2] py-6 px-10 rounded-4xl">
                        <h2 className=" text-xl text-white px-2"> Cart</h2>
                    </button>
                    <button className="flex btn bg-[#9538E2] py-6 px-12 rounded-4xl">
                        <h2 className=" text-xl text-white px-2"> Wish List</h2>
                    </button>
                    
                </div>
            </div>

        </div>
    );
};

export default Dashboard;