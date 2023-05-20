/* eslint-disable no-irregular-whitespace */
// DataTable.tsx
import React from "react";
import { IData, colDataType } from "./types";
import { DataTabledDataType, DatatTableDataContext } from "./DataTableDataProvider";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";
import TableFooter from "./TableFooter";

export interface IProps {
  data: IData[];
  columns: colDataType[];
  rowsPerPage?: number;
  checkboxes?: boolean;
  children: React.ReactNode;
}

const DataTable = ({ data,columns, checkboxes = false, rowsPerPage = 50, children }: IProps) => {
  const DataTableData = React.useContext<DataTabledDataType>(DatatTableDataContext);
  if (!DataTableData) {
    // Handle the case where the context value is null
    return null;
  }
  // Access the values from DataTableData
  const {setSelectAll,setSelectedItems,selectAll, currentPage, searchTerm, sortColumn, sortDirection, pageRows } = DataTableData;

  let filteredData = data.filter((d) =>
      Object.values(d).some((value) =>
        String(value).toLowerCase().includes(searchTerm.toLowerCase())
      ));
  
  const handleSelectAll = () => {
    setSelectAll((prevSelectAll) => !prevSelectAll);
    setSelectedItems((prevSelectedItems) => {
      if (selectAll) {
        // If all items are already selected, then clear the selection
        return [];
      } else {
        // Otherwise, select all items
        return data;
      }
    });
  };
  
  const sortedData = sortColumn
  ? [...filteredData].sort((a, b) =>
    sortDirection === "asc"
      ? a[sortColumn] > b[sortColumn]
        ? 1
        : -1
      : a[sortColumn] < b[sortColumn]
        ? 1
        : -1
  )
  : filteredData;

  const totalRows = sortedData.length;
  const totalPages = Math.ceil(totalRows / pageRows);

  const paginatedData = sortedData.slice(
    (currentPage - 1) * pageRows,
    currentPage * pageRows
  );

  return (
    <div className="container mx-auto px-4 h-screen">
      <div className="relative ml-5 mb-6">
        <div className="flex items-center">
          
          {children}
        </div>
        {/* <div>
          <p className="text-gray-500 text-sm">{columns.length} columns</p>
        </div> */}
      </div>

      <div className="overflow-y-auto h-96">
        <table className="w-auto ml-5 mr-5 text-sm text-left text-gray-500 dark:text-gray-400">
          <TableHeader
          columns={columns}
          handleSelectAll={handleSelectAll}
          checkbox={checkboxes}
          />
          <TableBody
          columns={columns}
            data={paginatedData}
            checkboxes={checkboxes}
          />

        </table>
      </div>
      <TableFooter 
        totalPages={totalPages}
        totalRows={totalRows}
      />

    </div>
  );
};

export default DataTable;