/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-irregular-whitespace */
import { useState } from "react";
import React from "react";
import { DashboardDataContext, DashboardDataType } from "../dashboard/DashboardDataProvider";

type topnavbarType = {
  open: boolean
}
export default function TopNavBar() {
  const dashboardData = React.useContext<DashboardDataType | null>(DashboardDataContext);;
  if (!dashboardData) {
    // Handle the case where the context value is null
    return null;
  }
  // Access the values from dashboardData
  const { open } = dashboardData;
  const [showCard, setShowCard] = useState(false);

  const handleDropdownClick = () => {
    setShowCard(!showCard);
  };

  const handleCardClick = (option: string) => {
    // Do something when the user clicks on a card option
    console.log(option);
  };

  return (
    <>
      <div className={`fixed ${open ? 'left-[240px]' : 'left-[64px]'} right-0 top-0 h-16 z-50 bg-topnavbarBG `}>
        <button className="" onClick={handleDropdownClick}>

          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="absolute right-3 float-right mt-3 w-6 h-6">
            <path fill-rule="evenodd" d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z" clip-rule="evenodd" />
          </svg>

        </button>
        {showCard && (
          <div className="absolute top-10 right-0 mt-7 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
            <div className="">
              <button
                className="block w-48 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                onClick={() => handleCardClick("Profile")}
              >
                Profile
              </button>
              <button
                className="block w-48 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                onClick={() => handleCardClick("Logout")}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="absolute left-4 w-6 h-6">
                  <path fill-rule="evenodd" d="M7.5 3.75A1.5 1.5 0 006 5.25v13.5a1.5 1.5 0 001.5 1.5h6a1.5 1.5 0 001.5-1.5V15a.75.75 0 011.5 0v3.75a3 3 0 01-3 3h-6a3 3 0 01-3-3V5.25a3 3 0 013-3h6a3 3 0 013 3V9A.75.75 0 0115 9V5.25a1.5 1.5 0 00-1.5-1.5h-6zm5.03 4.72a.75.75 0 010 1.06l-1.72 1.72h10.94a.75.75 0 010 1.5H10.81l1.72 1.72a.75.75 0 11-1.06 1.06l-3-3a.75.75 0 010-1.06l3-3a.75.75 0 011.06 0z" clip-rule="evenodd" />
                </svg>

                Logout
              </button>
            </div>
          </div>
        )}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="mr-8 float-right mt-3 w-10 h-10">
          <path fill-rule="evenodd" d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" clip-rule="evenodd" />
        </svg>

        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="float-right mr-8 mt-6 w-6 h-6">
          <path fill-rule="evenodd" d="M5.25 9a6.75 6.75 0 0113.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 01-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 11-7.48 0 24.585 24.585 0 01-4.831-1.244.75.75 0 01-.298-1.205A8.217 8.217 0 005.25 9.75V9zm4.502 8.9a2.25 2.25 0 104.496 0 25.057 25.057 0 01-4.496 0z" clip-rule="evenodd" />
        </svg>

        <nav className="flex ml-8" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-3">
            <li className="inline-flex items-center">
              <a
                href="#"
                className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
              >
                Dashboard
              </a>
            </li>
          </ol>
        </nav>
      </div>
    </>
  );
}
