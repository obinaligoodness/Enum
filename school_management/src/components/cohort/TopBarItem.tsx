import React, { useState } from "react";

interface TopBarProps {
    items: string[];
}

const TopBarItem: React.FC<TopBarProps> = ({ items }) => {
    const [index, setIndex] = useState<number>(0);
    const [isClicked, setIsClicked] = useState<boolean>(true);

    const toggleState = (clickedIndex: number) => {
        if (index !== clickedIndex) {
            setIndex(clickedIndex);
            setIsClicked(true);
        }
    };

    return (
        <div>
            {items.map((item, i) => {
                return (
                    <div key={i} onClick={() => { toggleState(i) }} className={`${isClicked === true && index === i ? 'border-b-4 border-[#008EEF] text-[#008EEF] h-4/5 w-16 cursor-pointer mt-4' : 'h-10 w-16 cursor-pointer mt-4'}`}>
                        <div className={`${isClicked === true && index === i ? 'bg-[#F6FCFF] rounded-2xl flex justify-center items-center font-bold h-8 ' : 'rounded-2xl flex justify-center items-center h-8'}`}>{item}</div>
                    </div>
                );
            })}
        </div>
    );
};

export default TopBarItem;
