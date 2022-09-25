import {
  CalendarIcon,
  ChartBarIcon,
  EmojiHappyIcon,
  PhotographIcon,
  XIcon,
} from '@heroicons/react/solid';
import { useRef, useState } from 'react';
// import data from '@emoji-mart/data';
import Picker from '@emoji-mart/react';
function Input() {
  const [input, setInput] = useState('')
  const [selectedFile, SetSelectedFile] = useState(null)
  const [showEmojis, setShowEmojis] = useState(false)
  const filePickerRef = useRef(null);

  const addEmoji =(e) =>{
    setInput(input + e?.native) 
  }

  const addImageToPost = () => {}

  return (
    <>
      <div
        class={`flex flex-col space-x-3 overflow-y-scroll border-b border-gray-700 p-3`}
      >
        <div className="flex w-full">
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
          <div className="flex flex-col items-center">
            <div className='flex'>
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

            <div className="icon rotate-90 ">
              <ChartBarIcon className="h-[22px] text-[#1d9bf0]" />
            </div>

            <div className="icon  ">
              <EmojiHappyIcon
                className="h-[22px] text-[#1d9bf0]"
                onClick={() => setShowEmojis(!showEmojis)}
              />
            </div>

            <div className="icon">
              <CalendarIcon className="h-[22px] text-[#1d9bf0]" />
            </div>

            </div>

            {showEmojis && (
              <Picker
                onEmojiSelect={addEmoji}
                previewPosition='bottom'
                style={{
                  position: 'absolute',
                  marginTop: '465px',
                  margin:'400px',
                  marginLeft: -40,
                  maxWidth: '320px',
                  borderRadius: '20px',
                }}
                // theme="dark"
              />
            )}


          </div>
          <button className='bg-[#1d9bf0] text-white rounded-full px-4 py-1.5 font-bold show-md hover:bg-[#1a8cd8] disabled:cursor-default' >Tweet</button>
        </div>
      </div>
    </>
  )
}

export default Input
