import axios from 'axios';
import { useState } from 'react';
import {useNavigate} from 'react-router-dom';


const RegisterForm = () =>{
    const [formData, setFormData] = useState({
        fname:'',
        lname:'',
        email:'',
        mobile:'',
        password:''
    })

    const handleChange = (e) =>{
        setFormData({...formData, [e.target.name] : e.target.value});
    }
    
    const navigate = useNavigate();

    const register = async (e) =>{
        e.preventDefault();
        try {
            const response = await axios.post('https://vish-rentify-project.onrender.com/registerUser', {fname:formData.fname,lname:formData.lname,email:formData.email,mobile:formData.mobile,password:formData.password});
            if(response.status === 200){
                alert('Register Successful');
                navigate('/');
            }
        } catch (error) {
            alert('Internal Server Error. Please Try Again.')
        }
    }

    return(
        <form onSubmit={register} className="py-5">
            <h3 className="text-center my-3 mx-md-3 mx-sm-3">Registration</h3>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">First Name</label>
                <input type="text" name='fname' onChange={handleChange} value={formData.fname} className="form-control" id="exampleInputName1" aria-describedby="emailHelp" required/>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Last Name</label>
                <input type="text" name='lname' onChange={handleChange} value={formData.lname} className="form-control" id="exampleInputName2" aria-describedby="emailHelp" required/>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" name='email' onChange={handleChange} value={formData.email} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required/>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Phone Number</label>
                <input type="number" name='mobile' onChange={handleChange} value={formData.mobile} className="form-control" id="exampleInputEmail2" aria-describedby="emailHelp" required/>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" name='password' onChange={handleChange} value={formData.password} className="form-control" id="exampleInputPassword1" required/>
            </div>
            <button type="submit" className="btn btn-primary w-100">Register</button>
        </form>
    )
}
export default RegisterForm;