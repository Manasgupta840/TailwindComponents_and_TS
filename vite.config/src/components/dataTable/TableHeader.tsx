import React from "react";
import { DataTabledDataType, DatatTableDataContext } from './DataTableDataProvider';
import { colDataType } from "./types";
import arrow from '../../assets/sortArrow.png';
interface IProps {
    checkbox?: boolean;
    columns: colDataType[];
    handleSelectAll: ()=>void;
}

const TableHeader = ({columns, handleSelectAll, checkbox=true }: IProps) => {
    const DataTableData = React.useContext<DataTabledDataType>(DatatTableDataContext);;
    if (!DataTableData) {
      // Handle the case where the context value is null
      return null;
    }
  // Access the values from DataTableData
    const {sortColumn, sortDirection,selectAll,handleSort} = DataTableData;
  

    return (
        <>
            <thead className="text-sm font-['Heebo'] text-gray-700  border-b-4 bg-white dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    {checkbox && (
                        <th scope="col" className="p-4">
                            <div className="flex items-center">
                                <input
                                    id="checkbox-all-search"
                                    type="checkbox"
                                    onChange={handleSelectAll}
                                    checked={selectAll}
                                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                <label htmlFor="checkbox-all-search" className="sr-only">checkbox</label>
                            </div>
                        </th>
                    )}

                    {columns.map((col) => (
                        <th key={col.id} scope="col" className={`px-6 py-3`} onClick={() => handleSort(col.field)}>
                            <div className="flex gap-2">
                                <span className="whitespace-nowrap">{col.headerName}</span>
                                <img className="h-[4px] mt-[9px] cursor-pointer" src={arrow}/>
                                {/* <span>{sortColumn === col.field && <span>{sortDirection === 'asc' ? (<img className="mt-[10px] max-w-none" src={arrow}/>) : '↓'}</span>}</span> */}
                            </div>
                        </th>
                    ))}

                </tr>
            </thead>

        </>

    );
};

export default TableHeader;