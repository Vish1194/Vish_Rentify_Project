import axios from "axios";
import { useNavigate } from "react-router-dom";



const PropertyCard = ({isDashboard=true,id,place,address,bedrooms,bathrooms,amenities,price}) =>{
   
    const navigate = useNavigate();

    const removeProperty = async () =>{
        try {
            const response = await axios.post('/api/remove-property',{id:id})
            if(response.status === 200){
                alert('Property Removed Successfully.')
                navigate('/dashboard');
            }
        } catch (error) {
            if(error){
                alert('Something went wrong. Please try again.')
            }
        }
    }
   
    return(
        <div className="card m-2"  style={{width:'350px'}}>
            <div className="card-body d-flex flex-column">
                <h3 className="card-title text-center mb-3">Property @ {place}</h3>
                <p className="card-text text-secondary">Locality/Address : {address}</p>
                <p className="card-text text-secondary">Number of Bedrooms : {bedrooms}</p>
                <p className="card-text text-secondary">Number of Bathrooms : {bathrooms}</p>
                <p className="card-text text-secondry">Amenities : {amenities}</p>
                <p className="card-text text-success">Price (Rent/Mo) : {price}</p>

                {
                    isDashboard ? 
                    <button className="btn btn-success text-light mt-auto" onClick={()=>{
                        navigate('/dashboard/propertyInfo',{state:id});
                    }} role="button">I'm Interested</button>
                    : 
                    <div>
                        <button className="btn btn-danger text-light mt-auto" onClick={removeProperty} role="button">Remove</button>
                        <button className="btn btn-info mx-3 text-light mt-auto" onClick={()=>{
                        navigate('/dashboard/updateProperty',{state:id});
                            }} role="button">Update</button>
                    </div>
                }
            </div>
        </div>
    )
}
export default PropertyCard;