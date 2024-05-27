import { useEffect, useState } from "react";
import PropertyCard from "./PropertyCard";
import axios from "axios";



const PropertyListing = ({user_id}) =>{
    const [propertyDetails,setPropertyDetails] = useState([]);
    useEffect(()=>{
        const getAllProperty = async () =>{
            try {
                const response = await axios.post('/api/all-properties',{id:user_id});
                setPropertyDetails(response.data);
            } catch (error) {

            }
        }
        getAllProperty();
    },[])
    return(
        <>
        <h2 className="text-center my-4">All Posted Properties</h2>
            <div className="property-listing">
                {propertyDetails.map((j) => (
                    <PropertyCard key={j.property_id} id={j.property_id} place={j.place} address={j.address} bedrooms={j.bedrooms} bathroooms={j.bathroooms} amenities={j.amenities} price={j.price}/>
                ))}
            </div>
        </>
    )
}
export default PropertyListing;