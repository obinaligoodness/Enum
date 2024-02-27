
import { CgBell } from "react-icons/cg";


import Logo from "../../../public/Logo";
import SchoolNav from "./SchoolNav";
import AvatarDropdown from "./AvatarDropdown";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import Image from "next/image";
const SchoolHeader = () => {
    return (
        <div className=" w-screen h-16 shadow-md mb-2 " >
            <div className="flex  sm:flex-row sm:gap-20 md:justify-between md:px-6 md:items-center h-14 w-full">
                <Logo url={"/logo.png"} width={100} height={100} />
                <SchoolNav />
                <div className="flex w-72">
                    <CgBell className="w-full h-8" />
                    <div className="md:flex md:flex-row md:block hidden ">
                        <AvatarDropdown  />
                        <BsFillGrid3X3GapFill color="rgba(0, 142, 239, 1)" className="w-20 h-8  " />
                    </div>
                </div>

            </div>
        </div>
    )
}
export default SchoolHeader;