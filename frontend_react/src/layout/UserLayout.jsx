import { Outlet } from "react-router-dom"
import DashboardNavBar from "../components/DashboardNavBar"
import Footer from "../components/Footer";



const UserLayout = () =>{

    return(
       <>
            <DashboardNavBar/>
            <Outlet/>
            <Footer/>
       </>
    )
}
export default UserLayout;