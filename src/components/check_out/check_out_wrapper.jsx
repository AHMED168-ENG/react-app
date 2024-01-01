import "../../scss/check_out/check_out_wrapper.scss"
import CheckOutFormComponent from "./check_out_form";
import CheckOutProductComponent from "./check_out_products";


function CheckOutWrapperComponent(props) {
    return ( 
        <>
            <div className="check-out-wrapper">
                <div className="cart-side-par-wrapper">
                    <div className="row">
                        <div className="col-md-7">
                            <CheckOutFormComponent></CheckOutFormComponent>
                        </div>
                        <div className="col-md-5">
                            <CheckOutProductComponent></CheckOutProductComponent>
                        </div>
                    </div>
                </div>
            </div>
        </>
     );
}

export default CheckOutWrapperComponent;