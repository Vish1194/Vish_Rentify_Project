import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";


axios.defaults.withCredentials=true;


const PropertyInfo = () =>{

    const location = useLocation();
    const property_id = location.state;
    const [property,setProperty] = useState([]);
    
    useEffect(()=>{
        const getProperty = async () =>{
            try {
                const response = await axios.post('/api/get-property',{id:property_id});
                setProperty(response.data);
                console.log(response.data)
            } catch (error) {
                
            }
        }
        getProperty();
    },[])

    return(
        <>
            <div className="bg-dark text-light py-4 px-3">
                <p className=" fs-3 my-3">Property @ {property.place}</p>
                <p className="fs-4">Locality/Address : {property.address}</p>
                <p className="fs-4">Number of Bedrooms : {property.bedrooms}</p>
                <p className="fs-4">Number of Bathrooms : {property.bathroooms}</p>
                <p className="fs-4">Amenities : {property.amenities}</p>
                <p className="fs-4">Price (Rent/Mo) : {property.price}</p>
            </div>
            <div className="text-center pt-5 bg-secondary">
                <h2>Owner Contact Details</h2>
                <div className="mx-5 my-3 text-start">
                    <h4>Name : {property.fname+'  '+property.lname}</h4>
                    <p className="fs-3">
                        Email : <a className="link link-dark fw-bold link-underline-opacity-0 link-underline-opacity-100-hover" href={"mailto:"+property.email}>{property.email}</a>  <br />
                        Mobile : <a className="link link-dark fw-bold link-underline-opacity-0 link-underline-opacity-100-hover" href={"tel:"+property.mobile}>{property.mobile}</a>
                    </p>
                </div>
                <div className="text-center py-5">
                    <Link to='/dashboard' className="btn btn-danger">Go Back</Link>
                </div>
            </div>
            
        </>
    )
}
export default PropertyInfo;