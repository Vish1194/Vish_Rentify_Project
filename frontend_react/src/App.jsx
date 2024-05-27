import Dashboard from "./components/Dashboard";
import LoginPage from "./pages/LoginPage";
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import RegisterPage from "./pages/RegisterPage";
import MainLayout from "./layout/MainLayout";
import UserLayout from "./layout/UserLayout";
import SellerPage from "./pages/SellerPage";
import PropertyInfo from "./pages/PropertyInfo";
import MyProperties from "./pages/MyProperties";
import UpdateProperty from "./components/UpdateProperty";
import SearchPage from "./pages/SearchPage";




function App() {

  const route = createBrowserRouter([
    {
      path:'/',
      element:<MainLayout/>,
      children:[
        {
          path:'/',
          element:<LoginPage/>
        },
        {
          path:'/register',
          element:<RegisterPage/>
        }
      ]
    },
    {
      path:'/dashboard',
      element:<UserLayout/>,
      children:[
        {
          path:'/dashboard',
          element:<Dashboard/>
        },
        {
          path:'/dashboard/sell',
          element:<SellerPage/>
        },
        {
          path:'/dashboard/propertyInfo',
          element:<PropertyInfo/>
        },
        {
          path:'/dashboard/myProperties',
          element:<MyProperties/>
        },
        {
          path:'/dashboard/updateProperty',
          element:<UpdateProperty/>
        },
        {
          path:'/dashboard/search',
          element:<SearchPage/>
        }
      ]
    }
  ])

  return (
    <>
      <RouterProvider router={route}/>
    </>
  )
}

export default App
