import PropertySellForm from "../components/PropertySellForm";



const SellerPage = () =>{
    return(
        <div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-4 col-md-3 col-1"></div>
                    <div className="col mt-5 px-5 bg-light rounded-5">
                                <PropertySellForm/>
                    </div>
                    <div className="col-lg-4 col-md-3 col-1"></div>
                </div>
            </div>
        </div>
    )
}
export default SellerPage;