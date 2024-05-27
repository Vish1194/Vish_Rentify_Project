import { useEffect, useState } from "react";
import { useNavigate , useLocation } from "react-router-dom";
import axios from "axios";

axios.defaults.withCredentials=true;


const UpdateProperty = () =>{
    const location =  useLocation();
    const id = location.state;
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        place:'',
        address:'',
        bedrooms:'',
        bathrooms:'',
        amenities:'',
        price:''
    })

    useEffect(()=>{
        const getDetail = async () =>{
            try {
                const response = await axios.post('/api/get-property',{id:id})
                setFormData(response.data)
            } catch (error) {
                console.log(error);
            }
        }
        getDetail();
    },[])
    
    const handleChange = (e) =>{
        setFormData({...formData, [e.target.name] : e.target.value});
    }

    const submitSellInfo =  async (e) =>{
        e.preventDefault();
        try {
            const response = await axios.post('/api/update-property', {place:formData.place,address:formData.address,bedrooms:formData.bedrooms,bathrooms:formData.bathrooms,amenities:formData.amenities,price:formData.price,id:id});
            if(response.status === 200){
                alert('Property Update Successful');
                navigate('/dashboard')
            }
        } catch (error) {
            alert('Internal Server Error. Please Try Again.');
        }
    }

    return(
        <form onSubmit={submitSellInfo} className="my-5">
            <h3 className="text-center my-3 mx-md-3 mx-sm-3">Property Details</h3>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Place</label>
                <input type="text" name='place' onChange={handleChange} value={formData.place} className="form-control" aria-describedby="emailHelp" required/>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Locality / Address (Area)</label>
                <input type="text" name='address' onChange={handleChange} value={formData.address} className="form-control"  aria-describedby="emailHelp" required/>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Number of Bedrooms</label>
                <input type="number" name='bedrooms' onChange={handleChange} value={formData.bedrooms} className="form-control"  aria-describedby="emailHelp" required/>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Number of Bathrooms</label>
                <input type="number" name='bathrooms' onChange={handleChange} value={formData.bathrooms} className="form-control"  aria-describedby="emailHelp" required/>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Nearby Amenities</label>
                <input type="text" name='amenities' onChange={handleChange} value={formData.amenities} className="form-control"  aria-describedby="emailHelp" required/>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Price</label>
                <input type="number" name='price' onChange={handleChange} value={formData.price} className="form-control" id="exampleInputPassword1" required/>
            </div>
            <button type="submit" className="btn btn-warning w-100">Submit Property Details</button>
        </form>
    )
}
export default UpdateProperty;