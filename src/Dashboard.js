import {Route, Routes } from 'react-router-dom';
import DashboardLayout from './pages/dashboard/layout';
import DashboardLogin from './pages/dashboard/login';
import PageNotFound from './pages/404';
import DashboardRegister from './pages/dashboard/register';

function Dashboard() { 
  return (
    <Routes>  
    <Route path="dashboard/register" element={<DashboardRegister />} />
    {/* <Route path="dashboard/login" element={<DashboardLogin />} /> */}
      <Route path='/' element={<DashboardLogin/>}> 
        {/* <Route path='dashboard' element={<DashboardLogin/>}></Route> */}
      
      </Route>
      <Route
            path="*"
            element={<PageNotFound />}/>
    </Routes>
    // <>
    //   {useRoutes(items)}
    // </>
  );
}

export default Dashboard;
