import { Link } from "react-router-dom"
import axios from "axios"

const DashboardNavBar = () =>{

    const logout =async () =>{
        const response = await axios.post('/api/logout')
        console.log(response.data);
    }


    return(
        <>
            <nav className="navbar bg-grad-blue" >
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                {/* <img src={Logo} alt="Logo" width="50px" height="50px" className="d-inline-block align-text-top"/> */}
                <h2 className='d-inline-block text-light align-bottom mx-lg-4' >Rentify</h2>
                </a>
                <div>
                <Link to='/' onClick={()=>{
                        logout();
                    }} className="btn btn-dark fs-6 mx-4">Logout</Link>
                </div>
            </div>
            </nav>
        </>
    )
}
export default DashboardNavBar;