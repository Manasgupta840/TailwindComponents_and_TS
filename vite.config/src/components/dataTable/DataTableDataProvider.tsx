import React, { createContext, Dispatch, SetStateAction } from 'react';

// Define the type for the form data
export interface DataTabledDataType {
    currentPage: number;
    searchTerm: string;
    sortColumn: string;
    sortDirection: string;
    pageRows: number;
    selectedItems: any[];
    selectAll: boolean;
    rowsPerPage?: number;
    checkboxes?: boolean;
    setSelectedItems: Dispatch<SetStateAction<any[]>>;
    setSelectAll: Dispatch<SetStateAction<boolean>>;
    handleSearchData: (value: string) => void;
    handleSelectItem: (item: any) => void;
    handleRowPerPage: (perPage: number) => void;
    handleSort: (column : string) => void;
    handlePageChange:(page: number) => void;
}

// Create a context object for the form data
export const DatatTableDataContext = React.createContext<DataTabledDataType>({
    currentPage: 1,
    searchTerm: "",
    sortColumn: "",
    sortDirection: "",
    pageRows: 1,
    selectedItems: [],
    selectAll: true,
    setSelectedItems: () => { },
    setSelectAll: () => { },
    handleSearchData: () => { },
    handleSelectItem: () => { },
    handleRowPerPage: ( ) => { },
    handleSort: ( ) => { },
    handlePageChange:( ) => { }
});