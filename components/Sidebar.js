import SideBarLink from "./SideBarLink";
import Image from "next/image";
import {DotsHorizontalIcon, HomeIcon} from "@heroicons/react/solid";
import {
    HashtagIcon,
    BellIcon,
    InboxIcon,
    BookmarkIcon,
    ClipboardListIcon,
    UserIcon,
    DotsCircleHorizontalIcon
} from "@heroicons/react/outline";
function Sidebar() {
    return(
        <div className="hidden sm:flex flex-col items-center  xl:items-start xl:w-[340] p-2 fixed h-full">
            <div className="flex item-center justify-center w-14 h-14   p-0 xl:ml-24">
        <Image src="https://rb.gy/ogau5a" width={40} height={30}/>
            </div>
            <div className="space-y-2.5 mt-4 mb-2.5 xl:ml-24">
                <SideBarLink text="Home" Icon={HomeIcon} active />
                <SideBarLink text="Explore" Icon={HashtagIcon}  />
                <SideBarLink text="Notifications" Icon={BellIcon}  />
                <SideBarLink text="Messages" Icon={ InboxIcon}  />
                <SideBarLink text="BookMarks" Icon={BookmarkIcon}  />
                <SideBarLink text="Lists" Icon={ClipboardListIcon}  />
                <SideBarLink text="Profile" Icon={UserIcon}  />
                <SideBarLink text="More" Icon={DotsCircleHorizontalIcon}  />
            </div>

            <button className="hoverAnimation shadow-md text-ls font-bold hidden xl:inline ml-auto bg-blue-600 text-white text-lg rounded-full w-2/3 h-[52px] hover:bg-blue-800  xl:ml-auto ">Tweet</button>
            
            <div className="mt-auto hoverAnimation flex items-center justify-center xl:ml-auto xl:-mr-5 text-gray-100">
                <img src="https://lh3.googleusercontent.com/ogw/AOh-ky0oCERlae2OJ42TKZ2baGTvEZJEbLcP6Kb9kqvnSg=s64-c-mo" 
                alt="" className="h-10 w-10 rounded-full xl:mr-2.5" />
                <div className="hidden xl:inline leading-5">
                    <h4 className="font-bold">{'fkadeal mat'}</h4>
                    <p className="text-gray-400">{'@fkadealkl'} </p>
                </div>
            <DotsHorizontalIcon className="h-5 hidden xl:inline ml-5" />
            </div> 
        </div>
    );
}

export default Sidebar;