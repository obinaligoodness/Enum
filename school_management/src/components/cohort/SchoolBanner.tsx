
import { CgBell } from "react-icons/cg";


import Logo from "../../../public/Logo";
import SchoolNav from "./SchoolNav";
import AvatarDropdown from "./AvatarDropdown";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import Image from "next/image";
const SchoolBanner = () => {
    return (
        <div className="bg-gradient-to-tl bg-cover bg-center  w-screen h-36" style={{backgroundImage: "url('/unsplash_LWfFfA5U5z8 (1).png')"}}>
            {/* <img src={"/unsplash_LWfFfA5U5z8 (1).png"} className="bg-gradient-to-tl w-full"></img> */}
            <div className="flex justify-center h-32 items-center flex-col gap-2 w-96  ">
                <div className="flex gap-4">
                    <div className="bg-[#8F47F4] w-12 font-bold h-10 text-[white] flex justify-center items-center rounded-md border-2 border-white">S</div>
                    <div className="text-white text-sm font-bold leading-6 flex items-center">Semicolon Africa</div>
                </div>
                <button className=" w-44 h-10 rounded-md bg-white">view profile</button>
            </div>
        </div>
    )
}
export default SchoolBanner;