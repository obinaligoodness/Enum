
import MainContent from "@/components/cohort/MainContent";
import SchoolBanner from "@/components/cohort/SchoolBanner";
import SchoolHeader from "@/components/cohort/SchoolHeader";
import SideBar from "@/components/cohort/SideBar";
import { Inter } from "next/font/google";
import { useState } from "react";



const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [selectedItem, setSelectedItem] = useState<string>("cohorts");
  return (

    <div className="h-screen w-screen ">
      <SchoolHeader/>
      <SchoolBanner/>
      <div className="flex xl:gap-32 w-11/12 sm:gap-6">
        <SideBar selectedItem={selectedItem} onClick={setSelectedItem}/>
      <MainContent props={selectedItem}/>
      </div>
      </div>
  );
}
