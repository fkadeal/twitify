import { SparklesIcon } from '@heroicons/react/solid'
import Input from './Input'

function Feed() {
  return (
    <>
      <div className="max-w-2x1 flex-grow border-l border-r border-gray-700 text-gray-200 sm:ml-[73px] xl:ml-[310px]">
        <div className="sticky top-0 z-50 mx-1 flex items-center border-b border-gray-700 py-2 px-3 text-gray-50 sm:justify-between">
          <h2 className="text-lg font-bold sm:text-xl">Home</h2>
          <div>
            <SparklesIcon className="h-5 text-white" />
          </div>
        </div>

        <Input />
      </div>
    </>
  )
}

export default Feed
