import { Link } from "react-router-dom";
import facebook from '../assets/images/facebook.png'
import instagram from '../assets/images/instagram.png'
import twitter from '../assets/images/twitter.png'
import youtube from '../assets/images/youtube.png'




const Footer = () =>{
    const ImgStyle = {width:'30px',margin:'5px 15px'}
    return(
        <div className="bg-dark text-light text-center py-3">
            <h3>Rentify</h3>
            <p className="opacity-50 mt-3">Follow us on</p>
            <div className="d-flex justify-content-center">
                <a href="https://facebook.com"><img src={facebook} alt="facebook" style={ImgStyle}/></a>
                <a href="https://instagram.com"><img src={instagram} alt="facebook" style={ImgStyle}/></a>
                <a href="https://twitter.com"><img src={twitter} alt="facebook" style={ImgStyle}/></a>
                <a href="https://youtube.com"><img src={youtube} alt="facebook" style={ImgStyle}/></a>
            </div>
            <div className="d-flex justify-content-center opacity-50 py-3">
                <Link to='/' className="m-3 link link-light link-underline-opacity-0 link-underline-opacity-100-hover" >Login</Link>
                <Link to='/register' className="m-3 link link-light link-underline-opacity-0 link-underline-opacity-100-hover" >Register</Link>
                <a href='mailto:rentify@support.com' className="m-3 link link-light link-underline-opacity-0 link-underline-opacity-100-hover" >Contact Us</a>
            </div>
            <p className="opacity-50">&copy;2024, All rights reserved</p>
        </div>
    )
}
export default Footer;