import { Dialog, DialogContent, DialogTitle, Modal } from "@mui/material";
import CancelIcon from "../../../public/pictures/CancelIcon";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { addCohort } from "./store/CohortSlice";
import DateComponent from "./DateComponent";
import { CgSmileMouthOpen } from "react-icons/cg";
import UploadIcon from "../../../public/pictures/UploadIcon";
import AlertIcon from "../../../public/pictures/AlertIcon";
import axios from "axios";
interface ModalProp {
    isOpen: boolean;
    onClose: () => void;
}
interface CohortObject {
    cohortName: string,
    description: string,
    program: string,
    startDate: '',
    endDate: '',
    cohortAvatar: string
}


const CreateCohortModal: React.FC<ModalProp> = ({ isOpen, onClose }) => {
    const [openModal, setOpenModal] = useState<boolean>(isOpen);
    const [programs, setPrograms] = useState<any>([])
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [data, setData] = useState<CohortObject>({
        cohortName: '',
        description: '',
        program: '',
        startDate: '',
        endDate: '',
        cohortAvatar: ''
    });
    const dispatch = useDispatch()


    useEffect(() => {
        setOpenModal(isOpen);
    }, [isOpen]);
    const handleClose = () => {
        resetForm()
        onClose()
    }
    const handleInputChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = event.target;
        
        setData(prevData => ({
            ...prevData,
            [name]: value
        }));
    }
    const resetForm = () => {
        setData({
            cohortName: '',
            description: '',
            program: '',
            startDate: new Date(),
            endDate: new Date(),
            cohortAvatar: ''

        });

    };

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files && event.target.files[0];
        if (file) {
            setSelectedFile(file);
            setData(prevData => ({
                ...prevData,
                cohortAvatar: URL.createObjectURL(file)
            }));
        }
    };
    const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        const file = event.dataTransfer.files && event.dataTransfer.files[0];
        if (file) {
            setSelectedFile(file);
            setData(prevData => ({
                ...prevData,
                cohortAvatar: URL.createObjectURL(file)
            }));
        }
    };

    const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
    };



    const addCohortToStore = () => {
        handleClose()
        resetForm()
        createCohort()
    }


    useEffect(() => {
        const fetchData = async () => {
            try {
                const programsResponse = await axios.get('https://schoolmanagement-production.up.railway.app/api/v1/school/viewAllProgram');
                console.log('Programs Response:', programsResponse.data);
                setPrograms(programsResponse.data);
            } catch (error) {
                console.log('Error:', error);
            }
        };

        fetchData();
    }, []);
    const createCohort = async()=>{
        try{
        const cohortResponse = await axios.post('https://schoolmanagement-production.up.railway.app/api/v1/school/createCohort', data);
                console.log('Cohort Response:', cohortResponse.data);
                // dispatch(addCohort(cohortResponse.data))

            } catch (error) {
                console.log('Error:', error);
            }
    }



    const isFormEmpty = Object.values(data).some(value => value === '');
    const fileInputRef = useRef<HTMLInputElement>(null);
    const todayDate = new Date().toISOString().split('T')[0];
    console.log("programs", programs)


    return (
        <Dialog open={openModal}>
            <DialogTitle>
                <div className="flex flex-row gap-80 ">
                    <div className="font-bold w-44">Create Cohort</div>
                    <button onClick={() => { handleClose() }}>
                        <CancelIcon />
                    </button>
                </div>
            </DialogTitle>
            <DialogContent>
                <div className="flex flex-col gap-2">
                    <p className="text-sm font-normal ">Cohort Name</p>
                    <div className="w-full h-8 bg-gray-200 border border-[#D0DCE4] rounded-sm">
                        <input
                            className="w-full h-full px-2"
                            type="text"
                            placeholder="Ex-cohort 1"
                            name="cohortName"
                            value={data.cohortName}
                            onChange={handleInputChange}
                        />

                    </div>
                </div>
                <div className="flex flex-col gap-2 mt-6">
                    <p className="text-sm font-normal">Description</p>
                    <div className="w-full h-16 border border-[#D0DCE4] rounded-sm">
                        <input
                            className="w-full h-full px-2"
                            type="text"
                            placeholder="Ex-cohort 1"
                            name="description"
                            value={data.description}
                            onChange={handleInputChange}
                        />
                    </div>
                </div>
                <div className="flex flex-col gap-2 mt-6">
                    <p className="text-sm font-normal">Program</p>
                    <div className="w-full h-8 border border-[#D0DCE4] rounded-sm">
                        <select className="w-full h-full"
                            name="program"
                            value={data.program}
                            onChange={handleInputChange}
                        >
                            {programs?.map((program, index) => {
                                return (
                                    <option value={program}>{program}</option>
                                )
                            })}

                        </select>
                    </div>
                </div>
                <div className="flex flex-row gap-8 mt-4">
                    <DateComponent setData={setData} dateVar="startDate"></DateComponent>
                    <DateComponent setData={setData} dateVar="endDate"></DateComponent>
                </div>
                <div className="mt-6 ">
                    <div>Add a cohort avatar</div>
                    <div
                        onDrop={handleDrop}
                        onDragOver={handleDragOver}
                        className="border-dashed border-2 border-blue-200 bg-sky-100 h-32 rounded-lg mt-2 flex items-center justify-center"
                    >
                        {data.cohortAvatar ? (
                            <img src={data.cohortAvatar} alt="Selected File" style={{ maxWidth: '100%', maxHeight: '100%' }} />
                        ) : (
                            <div className="flex flex-col justify-center items-center ">
                                <UploadIcon />
                                <p>Drag & Drop or  <input
                                    type="file"
                                    accept="image/*"

                                    onChange={handleFileChange}

                                /></p>
                            </div>
                        )}
                    </div>
                    <div className="flex flex-row gap-2 mt-2"><AlertIcon /> <div>you can add this later</div></div>
                </div>


                <div className="flex flex-row gap-6 mt-8 ml-52"><button onClick={() => { handleClose() }} className="border border-[#008EEF] h-12 w-28 rounded-lg text-[#008EEF]">Cancel</button>
                    <button disabled={false} className={`${isFormEmpty ? "bg-[#D0DCE4] w-40 h-12 rounded-lg text-white" : "bg-[#008EEF] w-40 h-12 rounded-lg text-white"}`} onClick={addCohortToStore}>Create Cohort</button></div>

            </DialogContent>
        </Dialog>
    )
}
export default CreateCohortModal;