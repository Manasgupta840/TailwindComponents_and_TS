/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from 'react';
import React from "react";
import { useNavigate } from 'react-router-dom';
import Popover from '../popover/Popover';
import { DashboardDataContext, DashboardDataType } from '../dashboard/DashboardDataProvider';
import { DrawerDataContext, DrawerDataType } from './DrawerDataProvider';
import grocery from '../../assets/grocery.png';
import mobile from '../../assets/digital.png';
import appliances from '../../assets/smart-tv.png';
import clothing from '../../assets/wedding.png';
import furniture from '../../assets/furniture.png';
import electronics from '../../assets/technology.png';
const drawerWidth = 240;

export type subMenuType = {
    [key: string]: string
}

type MenuItem = {
    itemName: string;
    itemIcon: string;
    subItems: boolean;
    subMenu?: subMenuType | undefined;
}

export const Drawer = () => {
    const dashboardData = React.useContext<DashboardDataType | null>(DashboardDataContext);
    if (!dashboardData) {
        // Handle the case where the context value is null
        return null;
    }
    // Access the values from dashboardData
    const { open, handleDrawerOpen, handleDrawerClose } = dashboardData;


    const drawerData = React.useContext<DrawerDataType | null>(DrawerDataContext);;
    if (!drawerData) {
        // Handle the case where the context value is null
        return null;
    }
    // Access the values from drawerData
    const { subMenu, handleListItemClick, handleClose } = drawerData;

    const navigate = useNavigate();

    const menuItems: MenuItem[] = [
        {
            itemName: "Grocery",
            itemIcon: grocery,
            subItems: false,
        },
        {
            itemName: "Mobiles",
            itemIcon: mobile,
            subItems: false,
        },
        {
            itemName: "Applicances",
            itemIcon: appliances,
            subItems: false,
        },
        {
            itemName: "Clothing",
            itemIcon: clothing,
            subItems: true,
            subMenu: { "Mens Clothing": "/dashboard", "Women Clothing": "/usergroup", "Kids": "/roles" },
        },
        {
            itemName: "Home & Furniture",
            itemIcon: furniture,
            subItems: false,
        },
        {
            itemName: "Electronics",
            itemIcon: electronics,
            subItems: false,
        },
    ];
    return (

        <div>

            <aside
                className={`${open ? `w-[240px]` : 'w-[64px]'
                    } fixed top-0 left-0 bottom-0 bg-white shadow transition-width duration-200`}
            >
                <button
                    className="text-gray-700 rounded-md items-center p-2 h-16 flex justify-center px-4 "
                    aria-label="open drawer"
                    onClick={() => open ? handleDrawerClose() : handleDrawerOpen()}
                >
                    {open ? (
                        <div className={`w-[${drawerWidth}px] relative flex justify-center`}>
                            <div className="block w-16 h-7 text-center whitespace-nowrap bg-statusInactivebackground border border-statusInactiveborder">
                                <h5 className=" text-statuscardred  capitalize">Let's Buy</h5>
                            </div>
                        </div>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                            <path fill-rule="evenodd" d="M3 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 5.25zm0 4.5A.75.75 0 013.75 9h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 9.75zm0 4.5a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75zm0 4.5a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z" clip-rule="evenodd" />
                        </svg>
                    )}
                </button>
                <nav className='mt-10'>
                    <ul className='list-disc'>
                        {menuItems.map((text, index) => (
                            <li key={index} className="list-none">
                                <button title={text.itemName}
                                    onClick={(e) => text.subMenu ? handleListItemClick(e, text.subMenu) : navigate("/")}
                                    className={`flex items-center justify-${open ? 'start' : 'center'
                                        } w-full p-4 text-gray-600 hover:bg-gray-100 focus:outline-none focus:border-r-4 focus:border-r-gray-800`}
                                >
                                    <img src={text.itemIcon} alt="inbox icon" className="w-6 h-6 mr-4" />
                                    {open && <span className="ml-2">{text.itemName}</span>}
                                </button>
                            </li>
                        ))}
                    </ul>
                </nav>
            </aside>
            <Popover>
                <div className="py-2">
                    {Object.entries(subMenu).map(([key, value]) => (
                        <div
                            key={key}
                            onClick={handleClose}
                            className="px-4 py-2 text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
                        >
                            <div onClick={() => navigate(value)} className="flex items-center cursor-pointer justify-between">
                                <span>{key}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </Popover>
        </div>

    );
}