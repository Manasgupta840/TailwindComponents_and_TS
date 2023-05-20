import React, { useState } from "react";
import { SidebarDataContext, SidebarDataType } from "./SidebarDataProvider";
import { SidebarDataProvider } from "../../contextApi/contextApi";

const Sidebar = ({ width, children }: { width: string, children: React.ReactNode }) => {
    const sidebarData = React.useContext<SidebarDataType>(SidebarDataContext);
    if (!sidebarData) {
        // Handle the case where the context value is null
        return null;
    }
    // Access the values from SidebarData
    const { isOpen, handleDrawerToggle } = sidebarData;


    return (
        <>
            {isOpen && (
                <>
                    <div
                        className="fixed inset-0 bg-black opacity-50 z-30"
                        onClick={handleDrawerToggle}
                    ></div>

                    <aside
                        id="drawer-navigation"
                        className={`backdrop-opacity-10 absolute top-0 ${width} right-0 z-40 h-screen p-4 overflow-y-auto bg-white dark:bg-gray-800`}
                        aria-labelledby="drawer-navigation-label"
                    >
                        <h5 className="text-base font-semibold text-gray-500 uppercase dark:text-gray-400">
                            Menu
                        </h5>
                        <button
                            onClick={handleDrawerToggle}
                            type="button"
                            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                            <svg
                                aria-hidden="true"
                                className="w-5 h-5"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                ></path>
                            </svg>
                            <span className="sr-only">Close menu</span>
                        </button>
                        {children}
                    </aside>
                </>
            )}
        </>
    );
};


const RightSideBar = () => {
    const sidebarData = React.useContext<SidebarDataType>(SidebarDataContext);
    // Access the values from SidebarData
    const { isOpen, handleDrawerToggle } = sidebarData;
    return (
        <>
            <div className="text-center">
                <button
                    onClick={handleDrawerToggle}
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                    type="button"
                    aria-controls="drawer-navigation"
                >
                    Show navigation
                </button>
            </div>
            <Sidebar width="w-64">
                <h1>Manas</h1>
            </Sidebar>
        </>

    )
}
export default RightSideBar;