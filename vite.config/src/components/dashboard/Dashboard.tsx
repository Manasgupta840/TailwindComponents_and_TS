import { useState } from "react";
import React from "react";
import {
  DashboardDataContext,
  DashboardDataType,
} from "./DashboardDataProvider";
import { DrawerDataProvider } from "../../contextApi/contextApi";
import { Drawer } from "../Drawer/drawer";
import TopNavBar from "../topNavBar/TopNavBar";


type props = {
  children: React.ReactNode;
};
export default function Dashboard({ children }: props) {
  const dashboardData = React.useContext<DashboardDataType | null>(
    DashboardDataContext
  );
  if (!dashboardData) {
    // Handle the case where the context value is null
    return null;
  }
  // Access the values from dashboardData
  const { open } = dashboardData;

  React.useEffect(() => {
    document.body.style.overflow = "hidden"; // Disable scrolling on the body
    return () => {
      document.body.style.overflow = "auto"; // Re-enable scrolling when component unmounts
    };
  }, []);

  return (
    <div className="w-screen overflow-hidden min-h-screen mt-5 bg-topnavbarBG">
      <TopNavBar />
      <DrawerDataProvider>
        <Drawer />
      </DrawerDataProvider>
      <main
        className={`relative ${
          open ? "ml-[240px]" : "ml-[64px]"
        } w-full mt-16 p-4 bg-gray-100 transition-margin duration-200`}
      >
        <div className="max-w-fit bg-topnavbarBG border-white">
          {children}
        </div>
      </main>
    </div>
  );
}
