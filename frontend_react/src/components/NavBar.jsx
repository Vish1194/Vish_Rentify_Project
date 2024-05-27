import { Link } from "react-router-dom"


const NavBar = () =>{
    return(
        <>
            <nav className="navbar bg-grad-blue" >
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                {/* <img src={Logo} alt="Logo" width="50px" height="50px" className="d-inline-block align-text-top"/> */}
                <h2 className='d-inline-block text-light align-bottom mx-lg-4' >Rentify</h2>
                </a>
                <div className='mx-3'>
                    <Link to="/" className='btn text-light fs-5'>Login</Link>
                    <Link to="/register" className='btn text-light fs-5'>Register</Link>
                </div>
            </div>
            </nav>
        </>
    )
}
export default NavBar;