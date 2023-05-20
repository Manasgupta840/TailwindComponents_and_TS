import React, { createContext, Dispatch, SetStateAction } from 'react';

// Define the type for the form data
export interface SidebarDataType {
  isOpen: boolean;
  handleDrawerToggle: () => void;
}

// Create a context object for the form data
export const SidebarDataContext = createContext<SidebarDataType>({
  isOpen: false,
  handleDrawerToggle: () => {},
});
