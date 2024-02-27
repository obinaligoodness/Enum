import React, { useState } from "react";
import BriefCase from "../../../public/pictures/BriefCase";
import PeopleIcon from "../../../public/pictures/PeopleIcon";
import BookIcon from "../../../public/pictures/BookIcon";
import UserIcon from "../../../public/pictures/UserIcon";
import NavItem from "./NavItem";

interface NavProps {
    onClick: (item: string) => void,
    selectedItem: string
}

const SideBar: React.FC<NavProps> = ({ onClick, selectedItem }) => {
    return (
        <div className="pt-16 border">
            <NavItem Icon={PeopleIcon} item={"cohorts"} iconProps={{color: selectedItem === 'cohorts' ? "#008EEF" : "#475661"}} onClick={onClick} selectedItem={selectedItem} />
            <NavItem Icon={BookIcon} item={"programs"} iconProps={{color: selectedItem === 'programs' ? "#008EEF" : "#475661"}} onClick={onClick} selectedItem={selectedItem} />
            <NavItem Icon={BriefCase} item={"instructors"} iconProps={{color: selectedItem === 'instructors' ? "#008EEF" : "#475661"}} onClick={onClick} selectedItem={selectedItem} />
            <NavItem Icon={UserIcon} item={"learners"} iconProps={{color: selectedItem === 'learners' ? "#008EEF" : "#475661"}} onClick={onClick} selectedItem={selectedItem} />
        </div>
    )
}

export default SideBar;
