import { useState } from "react"

const SchoolNav = () => {
    const [isClicked, setIsClicked] = useState<boolean>(true)
    const [index, setIndex] = useState<Number>(0)

    const toggleState = (clickedIndex: number) => {
        if (index !== clickedIndex) {
            setIndex(clickedIndex);
            setIsClicked(true);
          }
        
    }

    return (
        <div className="flex">
            <div onClick={() => { toggleState(0) }} className={`${isClicked === true && index === 0 ? 'border-b-4 border-[#008EEF] text-[#008EEF] h-4/5 w-16 cursor-pointer mt-4' : 'h-10 w-16 cursor-pointer mt-4'}`}>
                <div className={`${isClicked === true && index === 0 ? 'bg-[#F6FCFF] rounded-2xl flex justify-center items-center font-bold h-8 ' : 'rounded-2xl flex justify-center items-center h-8'}`}>Home</div>
            </div>
            <div onClick={() => { toggleState(1) }} className={`${isClicked === true && index === 1 ? 'border-b-4 border-blue-500 text-[#008EEF] h-4/5 w-32 cursor-pointer mt-4' : 'cursor-pointer h-10 w-32 mt-4'}`}>
                <div className={`${isClicked === true && index === 1 ? 'bg-[#F6FCFF]  rounded-2xl flex justify-center items-center h-8 font-bold ' : 'rounded-2xl flex justify-center items-center h-8'}`}>Workspace</div>
            </div>
            <div onClick={() => { toggleState(2) }} className={`${isClicked === true && index === 2 ? 'border-b-4 border-blue-500 text-[#008EEF] h-4/5 w-44 cursor-pointer mt-4' : 'h-10 w-44 cursor-pointer mt-4'}`}>
                <div className={`${isClicked === true && index === 2 ? 'bg-[#F6FCFF] rounded-2xl flex justify-center items-center h-8 font-bold ' : 'rounded-2xl flex justify-center items-center h-8'}`}>Resources library</div>
            </div>
        </div>
    )
}
export default SchoolNav