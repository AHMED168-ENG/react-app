import "../../scss/product_details/product_details_images_show.scss"
import React from 'react';
import ReactImageMagnify from 'react-image-magnify';
import { CiZoomIn } from "react-icons/ci";

export default function ProductDetailsImageShow() {  
    function setAttribute (src ,dimension , alt = "image") { 
      return {
            enlargedImagePosition : "over",
            shouldUsePositiveSpaceLens	: true,
            smallImage: { 
                alt: alt,
                isFluidWidth: true,
                src:src,
            },
            largeImage: {
              src: src,
              ...dimension
          }
          }
      }
    
    
    return (
      <div className="product-details-image-show p-4 ">
        <div className="images d-flex row-md-gap-4 row-gap-3 column-gap-2 column-md-gap-3 flex-wrap justify-content-between"> 
            <div className="image position-relative">
              <CiZoomIn className="position-absolute"></CiZoomIn>
              <ReactImageMagnify {...setAttribute("images/headphone/one.jpg" , {
                  width: 1800,
                  height: 1800,
                }
              )} />
            </div>
            <div className="image position-relative">
              <CiZoomIn className="position-absolute"></CiZoomIn>
              <ReactImageMagnify {...setAttribute("images/headphone/white.jpg" , {
                  width: 800,
                  height: 800,
                })} />
            </div>
            <div className="image position-relative">
              <CiZoomIn className="position-absolute"></CiZoomIn>
              <ReactImageMagnify {...setAttribute("images/headphone/black.jpg" , {
                  width: 800,
                  height: 800,
                })} />
            </div>
            <div className="image position-relative">
              <CiZoomIn className="position-absolute"></CiZoomIn>
              <ReactImageMagnify {...setAttribute("images/headphone/blak2.jpg" , {
                  width: 800,
                  height: 800,
                })} />
            </div>
            <div className="image position-relative">
              <CiZoomIn className="position-absolute"></CiZoomIn>
              <ReactImageMagnify {...setAttribute("images/headphone/black3.jpg" , {
                  width: 800,
                  height: 800,
                })} />
            </div>
        </div>
      </div>
    )
  }
  