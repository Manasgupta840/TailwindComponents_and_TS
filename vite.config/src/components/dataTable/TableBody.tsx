import React, { useState } from 'react';
import { colDataType } from './types';
import { DataTabledDataType, DatatTableDataContext } from './DataTableDataProvider';

interface IProps<T> {
  data: T[];
  checkboxes: boolean;
  columns: colDataType[];
}

const TableBody = <T extends Record<string, any>>({columns, data, checkboxes }: IProps<T>) => {
  const DataTableData = React.useContext<DataTabledDataType>(DatatTableDataContext);;
  if (!DataTableData) {
    // Handle the case where the context value is null
    return null;
  }
// Access the values from DataTableData
  const { selectedItems, handleSelectItem} = DataTableData;

  return (
    <tbody>
      {data.map((item, index) => (
        <tr key={index} className="bg-white border-b-2 dark:bg-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
          {checkboxes && (
          <td className="w-4 p-4">
            <div className="flex items-center">
              <input
                id={`checkbox-table-search-${index}`}
                type="checkbox"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                onChange={() => handleSelectItem(item)}
                checked={selectedItems.includes(item)}
              />
              <label htmlFor={`checkbox-table-search-${index}`} className="sr-only">checkbox</label>
            </div>
          </td>
          )}
          {columns.map((column) => (
            <td className={`px-6 py-4 font-medium whitespace-nowrap dark:text-white ${column.width ? column.width : ""}`} key={column.id}>
              {column.renderCell ? (column.renderCell(item)) : item[column.field]}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody;