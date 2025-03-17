import { FeedPost } from "./FeedPost"
import { Separator } from "./ui/separator";
import { LiaSlidersHSolid } from "react-icons/lia";

export const Feed = () => {
    return (
        <div className="flex flex-col items-center gap-6 overflow-auto">
            <div className="flex flex-row justify-between items-center w-1/2 h-10 bg-transparent">
                <div className="flex flex-row justify-center items-center w-2/12 h-full rounded-lg px-1  border-2 border-gray-700">
                    Profession
                </div>
                <div className="flex flex-row justify-center items-center w-1/12 h-full rounded-lg px-1  border-2 border-gray-700">
                    <LiaSlidersHSolid className="text-white" size={24} />
                </div>

            </div>
            <Separator className="bg-gray-700 w-1/2" />
            {[...Array(6)].map((_, index) => (
                <>
                    <FeedPost key={index} />
                    <Separator className="bg-gray-700 w-1/2" />
                </>
            ))}
        </div>
    );
};