import RegisterForm from "../components/RegisterForm";



const RegisterPage = () =>{
    return(
        <div className="bg-img py-5"> 
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-4 col-md-3 col-1"></div>
                    <div className="col mt-5 px-5 bg-light rounded-5">
                        <RegisterForm/>
                    </div>
                    <div className="col-lg-4 col-md-3 col-1"></div>
                </div>
            </div>
        </div>
    )
}
export default RegisterPage;