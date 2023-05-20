import React from 'react';
import DataTable from './DataTable';
import { IData, colDataType } from './types';
import allUsers from '../../assets/MOCK_DATA (1).json';
import { DataTabledDataType, DatatTableDataContext } from './DataTableDataProvider';
const data: IData[] = allUsers;

const columns = [
  {
    field: 'user_name',
    headerName: "User Name",
    id: 'userName'
  },
  {
    field: 'primary_role',
    headerName: "Primary Role",
    id: 'primaryRole',
  },
  {
    field: 'last_login',
    headerName: "Last Login",
    id: 'lastLogin',

  },
  {
    field: 'onboardedOn',
    headerName: "OnBoarded On",
    id: 'onBoardedOn',
  },
  {
    field: "status",

    headerName: "Status",

    id: "Status",

    width: "w-auto",
    renderCell: (cellValues: IData) => {
      const displaycard = cellValues.status;

      return (
        <>
          {" "}
          <div className="relative inline-flex flex-nowrap whitespace-nowrap items-center text-sm font-medium text-black rounded-lg focus:ring-4 focus:outline-none dark:bg-blue-600 ">
            {cellValues.status ? (
              <div className="block w-16 h-7 text-center bg-[#5FC0241A] border border-statusactiveborder">
                <h5 className="text-statusactivetext capitalize">Available</h5>
              </div>
            ) : (
              <div className="block w-16 h-7 text-center  bg-statusInactivebackground border border-statusInactiveborder">
                <h5 className=" text-statuscardred  capitalize">busy</h5>
              </div>
            )}{" "}
          </div>{" "}
        </>
      );
    },
  },
];

const ExampleComponent = () => {
  const DataTableData = React.useContext<DataTabledDataType>(DatatTableDataContext);
  if (!DataTableData) {
    // Handle the case where the context value is null
    return null;
  }
  // Access the values from DataTableData
  const { searchTerm, handleSearchData } = DataTableData;
  return (
    <div>
      <h1>My Data Table</h1>
      <DataTable data={data} columns={columns} rowsPerPage={50} checkboxes={true} >
        <div className="flex">
          <input
            type="text"
            className="w-72 py-1 px-2 h-10 mt-4 text-sm font-normal text-black font-['Heebo'] bg-white border-solid border-2 pl-10"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => handleSearchData(e.target.value)}
          />
          <img
            className="absolute top-7 left-2 bg-white"
            src="/src/assets/Search.png"
            alt="Search Icon"
          />
          <button
            className="top-0 left-72 p-2.5 text-sm font-medium text-white bg-white  border-2 mt-4 h-10 "
          >
            <img src="/src/assets/filter.png"></img>
            <span className="sr-only">Search</span>
          </button>
        </div>
      </DataTable>
    </div>
  );
};

export default ExampleComponent;
