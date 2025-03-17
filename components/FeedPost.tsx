import { BiDotsHorizontalRounded, BiUpvote, BiDownvote } from "react-icons/bi";
import { FaShare, FaRegComment } from "react-icons/fa";


export const FeedPost = () => {

    return (
        <>
            <div className="bg-transparent w-1/2 h-1/3 rounded-lg p-2 min-w-[200px] min-h-[300px]">
                <div className="flex flex-col p-1 bg-transparent w-full h-full rounded-lg">
                    <div className="flex flex-row justify-between items-center bg-transparent w-full h-1/6 rounded-lg px-1">
                        <div className="flex flex-row justify-start items-center bg-transparent w-1/2 h-5/6 rounded-lg px-1">
                            <div className="bg-white h-10 w-10 rounded-lg ">

                            </div>
                            <div className="flex flex-col justify-center items-start bg-transparent h-10 w-10/12 rounded-lg ml-4">
                                <h1 className="text-white">Job Title</h1>
                                <h2 className="text-xs text-white">UserName - Industry - Date</h2>

                            </div>

                        </div>
                        <div className="flex flex-row justify-center items-center bg-transparent w-8 h-8 rounded-lg pr-1 hover:bg-gray-500 transition duration-300 ease-in-out">
                            <BiDotsHorizontalRounded className="text-white " size={24} />
                        </div>

                    </div>

                    <div className="flex flex-row items-center rounded-lg p-2" >
                        <div className="flex flex-row justify-start items-start w-full rounded-lg text-left" >
                            <p className="text-white">
                                Man This job sucks so bad. AI is ruining my life. yada yada. this is new a line that is new
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-row items-center justify-between bg-transparent w-full h-3/6 rounded-lg p-2">
                        <div className="flex flex-col justify-center items-center w-3/12 h-full rounded-lg ">
                            <img src={"/radial_lol.png"} alt="placeholder" className="rounded-lg" />
                        </div>
                        <div className="flex flex-col justify-center items-center bg-transparent w-9/12 h-full rounded-lg px-1">
                            <div className="flex flex-row bg-transparent w-full h-3/6 rounded-lg p-1">
                                <div className="flex flex-col justify-center bg-transparent h-full w-1/2 rounded-lg">
                                    <ol className="text-white text-left text-[10px] whitespace-nowrap">
                                        <p>Impact <span className="font-bold">Downsized workplace</span></p>
                                        <p>Usage <span className="font-bold">76-100%</span></p>
                                        <p>Frequency <span className="font-bold">Daily</span></p>
                                    </ol>

                                </div>
                                <div className="flex flex-col justify-center bg-transparent h-full w-1/2 rounded-lg">
                                    <ol className="text-white text-left text-[10px] whitespace-nowrap">
                                        <p>Productivity <span className="font-bold">+50%</span></p>
                                        <p>Job Security <span className="font-bold">No change</span></p>
                                        <p>Outlook <span className="font-bold">Would Switch Careers</span></p>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row items-center justify-between bg-transparent w-full h-1/6 rounded-lg p-1">
                        <div className="flex flex-row justify-evenly items-center bg-transparent h-full w-1/3 rounded-lg">
                            <div className="flex flex-row h-full w-1/2 rounded-lg justify-center items-center ">
                                <BiUpvote className="text-white hover:bg-gray-500 transition duration-300 ease-in-out rounded-md" size={24} />
                                <p className="text-white px-1">100</p>
                                <BiDownvote className="text-white hover:bg-gray-500 transition duration-300 ease-in-out rounded-md" size={24} />
                            </div>
                            <div className="flex flex-row justify-center items-center bg-transparent w-10 h-10 ">
                                <FaRegComment className="text-white " size={20} />
                            </div>
                        </div>

                        <>
                            <div className="flex flex-row justify-center items-center bg-transparent w-8 h-8 rounded-lg pr-2 ">
                                <FaShare className="text-white " size={20} />
                            </div>
                        </>

                    </div>

                </div>
            </div>

        </>
    )
}