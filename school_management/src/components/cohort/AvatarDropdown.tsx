import { FaUserCircle } from "react-icons/fa";
const AvatarDropdown = () => {
    return (
        <div className="flex flex-row w-20 h-8    ">
        <FaUserCircle className="w-20 h-8" />
        <select className="w-20 h-7">
            <option>hello</option>
            <option>hello2</option>
            <option>hello3</option>
        </select>
        </div>
    )
}
export default AvatarDropdown;