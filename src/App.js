import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import AdminLogin from '../src/components/Admin/Login/Login.jsx';
import Dashboard from '../src/components/Admin/Dashboard/Dashboard.jsx';
import Home from '../src/components/Home/Home.jsx';
function App() {


  const routes = createBrowserRouter([
    {index: true , element: <Home />},
    {path:"admin" ,element:<AdminLogin />},
    {path:"dashboard" ,element:<Dashboard />}
  ])








  return (
    <>
    <RouterProvider  router={routes}></RouterProvider>
    </>
  );
}

export default App;
