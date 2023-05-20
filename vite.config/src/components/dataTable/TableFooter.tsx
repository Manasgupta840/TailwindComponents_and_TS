import React, { useEffect, useMemo, useState } from "react";
import { DataTabledDataType, DatatTableDataContext } from "./DataTableDataProvider";
interface TableFooterProps {
  totalPages: number;
   totalRows: number;
 }

type PaginationProps = {
  count: number;
};

const Pagination = ({  count }: PaginationProps) => {
  const DataTableData = React.useContext<DataTabledDataType>(DatatTableDataContext);;
  if (!DataTableData) {
    // Handle the case where the context value is null
    return null;
  }
// Access the values from DataTableData
  const {currentPage,handlePageChange} = DataTableData;


  return (
    <div className="flex  justify-center space-x-2">
      {currentPage > 1 && (
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="bg-gray-200 hover:bg-gray-300 rounded-md px-3 py-1"
        >
          Prev
        </button>
      )}

      <>
        {currentPage > 2 && (
          <button
            onClick={() => handlePageChange(1)}
            className={`${currentPage === 1
              ? "bg-blue-500 text-white"
              : "bg-gray-200 hover:bg-gray-300"
              } rounded-md px-3 py-1`}
          >
            1
          </button>
        )}

        {currentPage > 2 && <span className="mx-2">...</span>}
        {currentPage > 1 && (
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            className={`bg-gray-200 hover:bg-gray-300 rounded-md px-3 py-1`}
          >
            {currentPage - 1}
          </button>
        )}

        {currentPage !== count && (
          <button
            onClick={() => handlePageChange(currentPage)}
            className={`bg-blue-500 text-white rounded-md px-3 py-1`}
          >
            {currentPage}
          </button>
        )}

        {(currentPage + 1) !== count && currentPage !== count && (
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            className={`${currentPage === count
              ? "bg-blue-500 text-white"
              : "bg-gray-200 hover:bg-gray-300"
              } rounded-md px-3 py-1`}
          >
            {currentPage + 1}
          </button>
        )}
        {currentPage === 1 && count > 3 && (
          <button
            onClick={() => handlePageChange(currentPage + 2)}
            className={`${currentPage === count
              ? "bg-blue-500 text-white"
              : "bg-gray-200 hover:bg-gray-300"
              } rounded-md px-3 py-1`}
          >
            {currentPage + 2}
          </button>
        )}

        {currentPage < count - 1 && <span className="mx-2">...</span>}
        <button
          onClick={() => handlePageChange(count)}
          className={`${currentPage === count
            ? "bg-blue-500 text-white"
            : "bg-gray-200 hover:bg-gray-300"
            } rounded-md px-3 py-1`}
        >
          {count}
        </button>
      </>
      {currentPage !== count && (
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === count}
          className="bg-gray-200 hover:bg-gray-300 rounded-md px-3 py-1"
        >
          Next
        </button>
      )}

    </div>
  );
};



const TableFooter = ({
  totalPages,
  totalRows,
}: TableFooterProps) => {
  
  const DataTableData = React.useContext<DataTabledDataType>(DatatTableDataContext);;
  if (!DataTableData) {
    // Handle the case where the context value is null
    return null;
  }
// Access the values from DataTableData
  const {rowsPerPage=50, pageRows,handlePageChange,handleSort,handleRowPerPage} = DataTableData;

  // const handlePageChange = (page: number) => {
  //   handlePageChange(page);
  // };

  const [rows, setRows] = useState<number[]>([])

  const calculation = useMemo(() => {
    const newRows = []
    const count = Math.ceil(totalRows / rowsPerPage);
    for (let i = 1; i <= count; i++) {
      newRows.push(i)
    }
    return newRows.map(x => x * rowsPerPage)
  }, [rowsPerPage, totalRows])

  useEffect(() => {
    setRows(calculation)
  }, [calculation])


  return (
    <div>
    <tfoot className="float-right ">
      <tr >
        <td colSpan={100} className="py-2">
          <div className="flex float-right container justify-between items-center">
             
              <div className="justify-end mr-4">
                <Pagination count={totalPages}/>
              </div>
          </div>
        </td>
      </tr>
    </tfoot>
    <div className="ml-4 mt-6 mr-4 flex-1">
                <span className="font-medium">Rows per page:</span>
                <select
                  className="mx-2 border border-gray-300 rounded-md px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-yellow-500"
                  value={pageRows}
                  onChange={(e) => {
                    const newRowsPerPage = parseInt(e.target.value);
                    console.log(newRowsPerPage)
                    handlePageChange(1);
                    handleSort('');
                    handleRowPerPage(newRowsPerPage);
                  }}
                >
                  {rows.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
    </div>
    
  );
};
export default TableFooter;