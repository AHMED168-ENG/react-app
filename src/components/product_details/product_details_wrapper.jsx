import ProductDetailsImageShow from "./product_details_images_show";

export default function ProductDetailsWrapper(props) {
const {product} = props
  return (
    <div className="product-details-wrapper">
        <div className="container-xxl">
            <div className="product-details b-white">
                <div className="row">
                    <div className="col-md-6">
                        <ProductDetailsImageShow images={product.images}></ProductDetailsImageShow>
                    </div>
                    <div className="col-md-6">

                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
