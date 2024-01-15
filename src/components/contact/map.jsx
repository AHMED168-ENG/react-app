import "../../scss/contact/map.scss"

function MapComponent() {
    return ( 
        <>
            <div className="map py-5">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <div className="iframe">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d13810.274292303706!2d31.342715049999995!3d30.0778987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2seg!4v1703701218816!5m2!1sen!2seg" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
     );
}

export default MapComponent ;