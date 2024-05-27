import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import PropertyCard from "../components/PropertyCard";



const MyProperties = () =>{
    const location = useLocation();
    const data = location.state;
    const [property,setProperty] = useState([]);

    useEffect(()=>{
        const myProperty = async () =>{
            try {
                const response = await axios.post('/api/my-property',{id:data});
                setProperty(response.data);
            } catch (error) {
                console.log(error)
            }
        }
        myProperty();
        console.log(data);
    },[])
    return(
        <>
        <h2 className="text-center my-4">My Posted Properties</h2>
            <div className="property-listing">
                {property.map((j) => (
                    <PropertyCard key={j.property_id} isDashboard={false} id={j.property_id} place={j.place} address={j.address} bedrooms={j.bedrooms} bathroooms={j.bathroooms} amenities={j.amenities} price={j.price}/>
                ))}
            </div>
        <div className="text-center py-5">
            <Link to='/dashboard' className="btn btn-warning">Go Back</Link>
        </div>
        </>
    )
}
export default MyProperties;