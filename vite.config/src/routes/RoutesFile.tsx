import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Shirts from '../components/items/Shirts';
import { DashboardDataProvider, DataTableDataProvider, DrawerDataProvider, SidebarDataProvider } from '../contextApi/contextApi';

function RoutesFile() {

  return (
    <DashboardDataProvider>
      <DrawerDataProvider>
        <DataTableDataProvider>
          <SidebarDataProvider>
            <Router>
              <Routes>
                <Route path='/' element={<Shirts />} />
              </Routes>
            </Router>
          </SidebarDataProvider>
        </DataTableDataProvider>

      </DrawerDataProvider>
    </DashboardDataProvider >
  );

}
export default RoutesFile;