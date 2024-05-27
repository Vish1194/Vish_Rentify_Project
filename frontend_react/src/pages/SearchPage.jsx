import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import PropertyCard from "../components/PropertyCard";
import axios from "axios";



const SearchPage = () =>{
    const location = useLocation();
    const data = location.state;
    const [propertyDetails,setPropertyDetails] = useState([]);


    useEffect(()=>{
        const getProperty = async () =>{
            try {
                const response = await axios.post('https://vish-rentify-project.onrender.com/search',{search:data});
                setPropertyDetails(response.data);
            } catch (error) {
                if(error){
                    console.log(error);
                }
            }
        }
        getProperty();
    },[])



    return(
        <>
        {
            propertyDetails.length<=0 ?
            <h2 className="text-center my-4">Search for '{data}' had no results. </h2>
            :
            <h2 className="text-center my-4">Search Result for '{data}'</h2>
        }
            <div className="property-listing">
                {propertyDetails.map((j) => (
                    <PropertyCard key={j.property_id} id={j.property_id} place={j.place} address={j.address} bedrooms={j.bedrooms} bathroooms={j.bathroooms} amenities={j.amenities} price={j.price}/>
                ))}
            </div>
            <div className="text-center py-5">
                <Link to='/dashboard' className="btn btn-warning">Go Back</Link>
            </div>
        </>
    )
}
export default SearchPage;
