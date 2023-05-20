import React from 'react';
// Define the type for the form data
export interface DashboardDataType {
    open: boolean;
    handleDrawerOpen: () => void;
    handleDrawerClose: () => void;
}

// Create a context object for the form data
export const DashboardDataContext = React.createContext<DashboardDataType | null>(null);
