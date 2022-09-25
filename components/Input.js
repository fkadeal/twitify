import { PhotographIcon, XIcon } from '@heroicons/react/solid'
import { useRef, useState } from 'react'
function Input() {
  const [input, setInput] = useState('')
  const [selectedFile, SetSelectedFile] = useState(null)
  const filePickerRef = useRef(null)

  const addImageToPost = () => {}

  return (
    <>
      <div class={`flex flex-col space-x-3 overflow-y-scroll border-b border-gray-700 p-3`}> 
        
        <div className='w-full flex'> 
         <img
          src="https://lh3.googleusercontent.com/ogw/AOh-ky0oCERlae2OJ42TKZ2baGTvEZJEbLcP6Kb9kqvnSg=s64-c-mo"
          alt=""
          className="h-11 w-11 rounded-full xl:mr-2.5"
        />
        <div className="w-full divide-y divide-gray-700 ">
          <div>
            <textarea
              placeholder="whats happening?"
              onChange={(e) => setInput(e.target.value)}
              value={input}
              rows="2"
              className="min-h-[50px] w-full bg-transparent text-lg tracking-wide text-[#d9d9d9] placeholder-gray-500 outline-none"
            ></textarea>
          </div>

          {selectedFile && (
            <div className="relative">
              <div
                onClick={() => SetSelectedFile(null)}
                className=" absolute top-1 left-1 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-[#1b4172] bg-opacity-75 hover:bg-[#272c26] "
              >
                <XIcon className="h-5 text-white" />
              </div>
              <img
                src={selectedFile}
                alt=""
                className="max-h-80 rounded-2xl object-contain"
              />
            </div>
          )}
        </div> 
          
          </div>

        <div className="flex items-center justify-between pt-2.5 ">
          <div className="flex items-center">
            <div className="icon">
              <PhotographIcon
                className="h-[22px] text-[#1d9bf0]"
                onClick={() => filePickerRef.current.click()}
              />
              <input
              hidden
                type="file"
                onChange={addImageToPost}
                ref={filePickerRef}
              />
            </div>
          </div>
        </div>

        </div>

    

      
    </>
  )
}

export default Input
