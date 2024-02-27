import React, { useState } from "react";
import CohortBoard from "./CohortBoard";
// import EmptyStateIcon from "../../../public/pictures/EmptyStateIcon";
// import CreateCohortModal from "./CreateCohortModal";
// import { useAppSelector } from "./store/store";

interface MainContentProps {
    props: string;
}

const MainContent: React.FC<MainContentProps> = ({ props }) => {
    
    return (
        <div className="mt-10 sm:w-[380px] md:w-[1000px] ">
            <div className="font-semibold text-xl">
                {props}
            </div>
            { props === "cohorts" ?<CohortBoard></CohortBoard>:"not created yet"}
        </div>
    );
};

export default MainContent;
