import React from 'react';
import { useState } from 'react';
import { SidebarDataContext } from '../components/sidebar/SidebarDataProvider';
import { DrawerDataContext } from '../components/Drawer/DrawerDataProvider';
import { subMenuType } from '../components/Drawer/drawer';
import { DashboardDataContext, DashboardDataType } from '../components/dashboard/DashboardDataProvider';
import { DatatTableDataContext } from '../components/dataTable/DataTableDataProvider';

  
  export function DashboardDataProvider({
    children,
  }: {
    children: React.ReactNode;
  }) {
    const [open, setOpen] = useState(false);
  
    function handleDrawerOpen() {
      console.log("Open");
      setOpen(true);
    }
  
    function handleDrawerClose() {
      console.log("close");
      setOpen(false);
    }
    return (
      <DashboardDataContext.Provider
        value={{ open, handleDrawerOpen, handleDrawerClose }}
      >
        {children}
      </DashboardDataContext.Provider>
    );
  }
  
  export function DataTableDataProvider({
    children
  }: {children: React.ReactNode}) {
    const [currentPage, setCurrentPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState("");
    const [sortColumn, setSortColumn] = useState("");
    const [sortDirection, setSortDirection] = useState<string>("asc");
    const [pageRows, setPageRows] = useState(50);
    const [selectedItems, setSelectedItems] = useState<any[]>([]);
    const [selectAll, setSelectAll] = useState<boolean>(false);
  
    const handleSearchData = (value: string) => {
      console.log(value)
      setSearchTerm(value);
      setCurrentPage(1);
    };
    const handleSelectItem = (item: any) => {
      setSelectedItems((prevSelectedItems) => {
        const index = prevSelectedItems.findIndex(
          (selectedItem) => selectedItem === item
        );
        if (index === -1) {
          // Item not found in the selected items array, so add it
          return [...prevSelectedItems, item];
        } else {
          // Item already selected, so remove it
          return [
            ...prevSelectedItems.slice(0, index),
            ...prevSelectedItems.slice(index + 1),
          ];
        }
      });
    };
  
    const handleRowPerPage = (perPage: number) => {
      setPageRows(perPage);
    };
    const handleSort = (column: string) => {
      if (column === sortColumn) {
        setSortDirection(sortDirection === "asc" ? "desc" : "asc");
      } else {
        setSortColumn(column);
        setSortDirection("asc");
      }
      setCurrentPage(1);
    };
  
    const handlePageChange = (page: number) => {
      setCurrentPage(page);
    };
  
    return (
      <DatatTableDataContext.Provider
        value={{
          setSelectedItems,
          setSelectAll,
          currentPage,
          searchTerm,
          sortColumn,
          sortDirection,
          pageRows,
          selectAll,
          selectedItems,
          handleSearchData,
          handleSelectItem,
          handlePageChange,
          handleSort,
          handleRowPerPage,
        }}
      >
        {children}
      </DatatTableDataContext.Provider>
    );
  }
  
  export function DrawerDataProvider({
    children,
  }: {
    children: React.ReactNode;
  }) {
    const [subMenu, setSubMenu] = useState<subMenuType>({});
    const [openPopover, setOpenPopover] = useState(false);
    const [anchorPosition, setAnchorPosition] = useState<{
      x: number;
      y: number;
    }>({ x: 0, y: 0 });
    const dashboardData = React.useContext<DashboardDataType | null>(
      DashboardDataContext
    );
    if (!dashboardData) {
      // Handle the case where the context value is null
      return null;
    }
    // Access the values from dashboardData
    const { open } = dashboardData;
  
    const handleListItemClick = (
      event: React.MouseEvent<HTMLElement>,
      menuItems: subMenuType
    ) => {
      console.log("e", event);
      if (!open) {
        const { x, y } = event.currentTarget.getBoundingClientRect();
        const centerX = x + event.currentTarget.offsetWidth / 2;
        const centerY = y + event.currentTarget.offsetHeight / 2;
        console.log(centerX, centerY);
        setSubMenu(menuItems);
        setOpenPopover(!openPopover);
  
        setAnchorPosition({ x: centerX + 32, y: centerY - 90 });
      }
    };
  
    const handleClose = () => {
      setOpenPopover(false);
    };
    return (
      <DrawerDataContext.Provider
        value={{
          subMenu,
          openPopover,
          anchorPosition,
          handleListItemClick,
          handleClose,
        }}
      >
        {children}
      </DrawerDataContext.Provider>
    );
  }
  

  export function SidebarDataProvider({ children }: { children: React.ReactNode }) {
    const [isOpen, setIsOpen] = useState(false);
  
    const handleDrawerToggle = () => {
      console.log(isOpen)
      setIsOpen(!isOpen);
    };
    return (
      <SidebarDataContext.Provider value={{ isOpen, handleDrawerToggle}}>
        {children}
      </SidebarDataContext.Provider>
    );
  }