import { Link } from "react-router-dom";
import LoginForm from "../components/LoginForm";




const LoginPage = () =>{
    return(
        <div className="bg-img py-5">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-4 col-md-3 col-1"></div>
                    <div className="col mt-5 px-5 bg-light rounded-5">
                        <LoginForm/>
                        <div className="text-center mb-3">
                            <Link to='/register' className="link link-primary">New User? Register here.</Link>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-3 col-1"></div>
                </div>
            </div>
        </div>
    )
}
export default LoginPage;