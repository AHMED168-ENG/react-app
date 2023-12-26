import "../../scss/our_store/store_wrapper.scss"
import Store from "./store";
import StoreFilter from "./store_filter";

function StoreWrapper() {
    return ( 
        <>
            <div className="store-wrapper m-0 py-5">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-md-3">
                            <StoreFilter></StoreFilter>
                        </div>
                        <div className="col-md-9">
                            <Store></Store>
                        </div>
                    </div>
                </div>
            </div>
        </>
     );
}

export default StoreWrapper ;