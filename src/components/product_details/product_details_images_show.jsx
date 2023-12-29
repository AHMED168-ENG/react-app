import React from 'react';
import ReactImageZoom from 'react-image-zoom';


export default function ProductDetailsImageShow() {  
    const props = {width: 400, height: 250, zoomWidth: 500, img: "images/headphone/one.jpg"}  
    return (
      <div className="product-details-image-show p-5 ">
        <div className="images gap-2 d-flex flex-wrap">
            <div className="image w-100">
                 <ReactImageZoom {...props} />
            </div>
            <div className="image">
            <ReactImageZoom {...props} />
            </div>
            <div className="image">
            <ReactImageZoom {...props} />
            </div>
            <div className="image">
            <ReactImageZoom {...props} />
            </div>
            <div className="image">
            <ReactImageZoom {...props} />
            </div>
        </div>
      </div>
    )
  }
  