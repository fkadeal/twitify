import { SparklesIcon } from "@heroicons/react/solid";

function Feed(){
    return <>
    <div className="text-gray-200 flex-grow border-l border-r border-gray-700 max-w-2x1 sm:ml-[73px] xl:ml-[310px]">
        <div className="flex mx-1 text-gray-50 py-2 px-3 items-center sticky top-0 z-50 border-b border-gray-700 sm:justify-between">
            <h2 className="text-lg sm:text-xl font-bold">Home</h2>
            <div>
                <SparklesIcon className="h-5 text-white" />
            </div>
        </div>
    </div>
    </>
}

export default Feed;