import { useEffect, useState } from "react"
import EmptyStateIcon from "../../../public/pictures/EmptyStateIcon"
import CreateCohortModal from "./CreateCohortModal"
import { useAppSelector } from "./store/store"
import { FaSearch } from "react-icons/fa"
import KebabIcon from "../../../public/pictures/KebabIcon"
import UserIcon from "../../../public/pictures/UserIcon"
import { Menu, MenuItem } from "@mui/material"
import axios from "axios"
import { useDispatch } from "react-redux"
import { addCohort } from "./store/CohortSlice"



const CohortBoard = () => {
    const [showModal, setShowModal] = useState<boolean>(false)
    const [cohortss,setCohortss] = useState<[]>([])
    const cohorts = useAppSelector((state) => state.auth.authState);
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const dispatch = useDispatch()

    const handleShowModal = (value: boolean) => {
        setShowModal(value)
    }
    const closeModal = () => {
        setShowModal(false)
    }
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    useEffect(() => {
        const getAllCohorts = async () => {
            try {
                const cohortResponse = await axios.get('https://schoolmanagement-production.up.railway.app/api/v1/school/viewAllCohort');
                console.log('Cohort Response:', cohortResponse.data);
                setCohortss(cohortResponse.data)
            } catch (error) {
                console.log('Error:', error);
            }
        }
        getAllCohorts()
    }, []);
    
console.log("kk",cohorts)

    return (
        <div>

            {cohortss.length === 0 ? <div className="flex justify-center  gap-4 items-center flex-col w-3/5 ">
                <EmptyStateIcon />
                <div className="flex flex-col  items-center w-96 ">
                    <div className="text-sm font-bold">Empty Space</div>
                    <div className=" sm:w-32 md:w-80">No cohort has been created yet, let’s get you started by clicking the button below</div>
                </div>
                <button onClick={() => { handleShowModal(true) }} className="w-44 h-12 font-bold text-base bg-[#008EEF] rounded-lg text-white" >Create cohort</button>
                <CreateCohortModal isOpen={showModal} onClose={closeModal} />
            </div> :
                <div className="">
                    <div className="flex  sm:flex-col xl:flex-row w-full  xl:gap-72 sm:gap-4 mt-4">
                        <div className="relative w-80 h-9">
                            <input type="text" placeholder="Search..." className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-gray-300 w-full h-full" />
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <FaSearch className="text-gray-400" />
                            </div>
                        </div>
                        <div className="flex flex-row gap-6">
                            <button onClick={() => { handleShowModal(true) }} className="bg-[#008EEF] md:w-36  h-10 rounded-lg sm:text-xs sm:w-24 text-white">Create Cohort</button>
                            <CreateCohortModal isOpen={showModal} onClose={closeModal} />
                            <button onClick={handleClick} className=" border border-[#AAB7DB] md:w-44 sm:text-xs sm:w-32 h-10 rounded-lg text-black flex flex-row items-center justify-center gap-6">More Actions <KebabIcon></KebabIcon></button>
                        </div>
                    </div>
                    <div className="xl:h-80 sm:h-44  sm:overflow-y-auto overflow-x-hidden mt-6  sm:w-11/12 xl:w-[1000px] " style={{ scrollbarWidth: "thin", scrollbarColor: "#888 #f1f1f1" }}>
                        {cohortss?.map((cohort, index) => {
                            return (
                                <div className="flex xl:flex-row xl:gap-[430px] sm:flex-col md:flex-row sm:w-80 md:w-96 sm:gap-12 shadow-lg xl:w-[970px] xl:justify-center xl:items-center bg-opacity-50 border  border-[#F6FCFF] md:h-20  rounded-lg bg-[#FFFFFF] mt-6">
                                    <div className="flex md:flex-row  md:gap-6  w-80">
                                        {cohort.cohortAvatar && (
                                            <img src={cohort.cohortAvatar} className="h-10" alt="Cohort Avatar" />
                                        )}
                                        {/* <img src={"/logo.png"} className="h-10 w-12 border "></img> */}
                                        <div className="sm:h-26 md:h-16  w-20 border"></div>

                                        <div className="flex flex-col ">
                                            <div className="text-base font-bold w-fit">{cohort.cohortName}</div>
                                            <div className="flex sm:flex-col md:flex-row xl-gap-2 xl:flex-row sm:gap-2 xl:gap-4">
                                                <div className="w-18 truncate">{cohort.enumProgram}enum</div>
                                                <div className="flex sm:flex-row flex-col gap-4 md:hidden sm:block xl:block ">
                                                    <UserIcon color={"grey"} />
                                                    <p>25{" "}learners</p>
                                                </div>

                                                <div className=" w-44 truncate sm:block md:hidden xl:hidden ">
                                                    created {cohort.startDate}
                                                </div>


                                            </div>
                                        </div>

                                    </div>
                                    <div className="md:flex md:flex-row md:gap-4 w-50 md:block hidden ">
                                        <div>
                                            created {cohort.startDate}
                                        </div>
                                        <KebabIcon />
                                    </div>

                                </div>
                            )
                        })}
                    </div>
                </div>


            }
            <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem>publish a poll</MenuItem>
                <MenuItem>schedule a event</MenuItem>
                <MenuItem>Make an annoucement</MenuItem>
            </Menu>
        </div>

    )
}
export default CohortBoard;