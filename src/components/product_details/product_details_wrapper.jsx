import "../../scss/product_details/product-details-wrapper.scss"
import ProductDetailsImageShow from "./product_details_images_show";
import ProductDetails from "./product_details";

export default function ProductDetailsWrapper(props) {
const {product} = props
  return (
    <div className="product-details-wrapper py-5">
        <div className="container-xxl">
            <div className="product-info b-white">
                <div className="row">
                    <div className="col-md-6 p-0">
                        <ProductDetailsImageShow images={product.images}></ProductDetailsImageShow>
                    </div>
                    <div className="col-md-6 p-0">
                        <ProductDetails></ProductDetails>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
