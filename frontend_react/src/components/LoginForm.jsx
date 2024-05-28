import axios from 'axios';
import { useState } from 'react';
import {useNavigate} from 'react-router-dom'

axios.defaults.withCredentials=true;


const LoginForm = () =>{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();
    const login = async (e) =>{
        e.preventDefault();
        try {
            const response = await axios.post('https://vish-rentify-project.onrender.com:3000/login',{email:email,password:password});
            if(response.status === 200){
                navigate('/dashboard')
            }
        } catch (error) {
            alert('Incorrect Username / Password.')
        }
    }

    return(
        <form onSubmit={login} className="my-5">
            <h3 className="text-center my-3 mx-md-3 mx-sm-3">Login</h3>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" onChange={(e)=>{
                    setEmail(e.target.value);
                }} value={email} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" onChange={(e)=>{
                    setPassword(e.target.value)
                }} value={password} className="form-control" id="exampleInputPassword1"/>
            </div>
            <button type="submit" className="btn btn-success w-100">Log In</button>
        </form>
    )
}
export default LoginForm;