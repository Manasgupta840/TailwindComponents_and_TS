import { Fragment, useState, MouseEvent } from 'react';
import React from "react";
import { DrawerDataContext, DrawerDataType } from '../Drawer/DrawerDataProvider';

type Props = {
  children: React.ReactNode;
};

const Popover: React.FC<Props> = ({ children }:Props) => {

  const drawerData = React.useContext<DrawerDataType | null>(DrawerDataContext);
  console.log(drawerData)
  if (!drawerData) {
      // Handle the case where the context value is null
      return null;
    }
  // Access the values from drawerData
  console.log(drawerData)
  const {openPopover, anchorPosition,handleClose } = drawerData;
  return (
    <div className="relative">
      
      {openPopover && (
        <Fragment>
          <div
            className="fixed inset-0 z-20"
            onClick={handleClose}
          ></div>

          <div
            className="absolute z-30 max-w-sm mt-2 overflow-y-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
            style={{ top: anchorPosition.y, left: anchorPosition.x }}
          >
            {children}
          </div>
        </Fragment>
      )}
    </div>
  );
};
export default Popover;