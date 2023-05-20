import React from 'react';
import { subMenuType } from './drawer';

// Define the type for the form data
export interface DrawerDataType {
    subMenu: subMenuType;
    openPopover: boolean;
    anchorPosition: { x: number; y: number };
    handleListItemClick:  (event: React.MouseEvent<HTMLElement>, menuItems: subMenuType)  => void
    handleClose: () => void
}

// Create a context object for the form data
export const DrawerDataContext = React.createContext<DrawerDataType | null>(null);