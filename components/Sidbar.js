import SideBarLink from "./SideBarLink";
import Image from "next/image";
function Sidbar() {
    return(
        <div className="hidden sm:flex flex-col items-center  xl:items-start xl:w-[340] p-2 fixed h-full">
            <div className="flex item-center justify-center w-14 h-14 hoverAnimation p-0 xl:ml-24">
        <Image src="https://rb.gy/ogau5a" width={30} height={30}/>
            </div>
            <div className="space-y-2.5 mt-4 mb-2.5 xl:ml-24">
                <SideBarLink text="Home" Icon={HomeIcon} active />
                <SideBarLink text="Explore" Icon={HashtagIcon}  />
                <SideBarLink text="Notifications" Icon={Bellcon}  />
                <SideBarLink text="Messages" Icon={ InboxIcon}  />
                <SideBarLink text="BookMarks" Icon={BookmarkIcon}  />
                <SideBarLink text="Lists" Icon={ClipboardListIcon}  />
                <SideBarLink text="Profile" Icon={UserIcon}  />
                <SideBarLink text="More" Icon={DotsCircleHorizontalIcon}  />
            </div>
        </div>
    );
}

export default Sidbar;