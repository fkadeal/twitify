import {
  CalendarIcon,
  ChartBarIcon,
  EmojiHappyIcon,
  PhotographIcon,
  XIcon,
} from '@heroicons/react/solid';
import { useRef, useState } from 'react';
import {db, storage} from '../firebase';
import {addDoc , collection,doc, serverTimestamp,updateDoc} from 'firebase/firestore';
import {getDownloadURL,ref, uploadString} from 'firebase/storage';
import { useSession } from 'next-auth/react';
// import data from '@emoji-mart/data';
import Picker from '@emoji-mart/react';
function Input() {
  const [input, setInput] = useState('')
  const [selectedFile, SetSelectedFile] = useState(null)
  const [showEmojis, setShowEmojis] = useState(false)
  const filePickerRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const {data:session} = useSession();

  const sendPost = async () => {
    if (loading) return;
    setLoading(true);

    const docRef = await  addDoc(collection(db,'posts') ,{
      id:session.user.uid,
      username:session.user.name,
      userImg:session.user.image,
      tag:session.user.tag,
      text:input,
      timestamp:serverTimestamp(),
    });

    const imageRef = ref(storage, `posts/${docRef.id}/image`);

    if(selectedFile){
      await uploadString(imageRef, selectedFile, 'data_url').then(async () => {
        const downloadURL = await getDownloadURL(imageRef);
        await updateDoc(doc(db, 'posts',docRef.id),{
          image:downloadURL,
        });
      });
    }

    setInput("");
    setLoading(false);
    SetSelectedFile(null);
    setShowEmojis(false)

  }

  const addEmoji =(e) =>{
    setInput(input + e?.native) 
  }

  const addImageToPost = (e) => {
    const reader = new FileReader();
    if(e.target.files[0]){
      reader.readAsDataURL(e.target.files[0]);
    }

    reader.onload = (readerEvent) => {
      SetSelectedFile(readerEvent.target.result);
    };
  };



  return (
    <>
      <div
        className={`flex flex-col space-x-3 overflow-y-scroll border-b border-gray-700 p-3 ${loading && 'opacity-60'}`}
      >
        <div className="flex w-full">
          <img
            src={session.user.image}
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

        {!loading && (
          
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
              <div className=' absolute mt-10  ml-80 '> 
              <Picker
                onEmojiSelect={addEmoji}
                previewPosition='bottom'
               
                theme="dark"
              />
                </div> 
            )}


          </div>
          <button className='bg-[#1d9bf0] text-white rounded-full 
          px-4 py-1.5 font-bold show-md
           hover:bg-[#1a8cd8] disabled:cursor-default disabled:opacity-50' disabled={!input.trim() && !selectedFile} onClick={()=>sendPost()}>Tweet</button>
        </div>

        )}

      </div>
    </>
  )
}  
export default Input
