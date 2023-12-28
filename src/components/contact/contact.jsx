import "../../scss/contact/contact.scss"
import { FaHome } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa";
import { FaInfo } from "react-icons/fa";

function ContactComponent() {
    return ( 
        <>
            <div className="contact-component py-5">
                <div className="container-xxl">
                    <div className="content">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="left">
                                    <h4 className="text-capitalize mb-4">contact</h4>
                                    <div className="form">
                                        <form action="">
                                            <div className="input">
                                                <input type="text" placeholder="name" />
                                            </div>
                                            <div className="input">
                                                <input type="text" placeholder="email" />
                                            </div>
                                            <div className="input">
                                                <input type="text" placeholder="phone number" />
                                            </div>
                                            <div className="input">
                                                <textarea name="" placeholder="comment" id="" ></textarea>
                                            </div>
                                            <button>send</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6"> 
                                <div className="right">
                                    <h4 className="text-capitalize mb-4">get in touch with us</h4>
                                    <div className="info">
                                        <ul className="list-unstyled">
                                            <li><FaHome></FaHome> <span>33 new monotony st. ste 750 san friday ca. usa 95862</span> </li>
                                            <li><FaPhone></FaPhone> <span><a href="tel+967-723-4568">(+96)7-723-4568</a> </span> </li>
                                            <li><FaEnvelope></FaEnvelope><span><a href="http://demo@company.com">demo@company.com</a></span></li>
                                            <li><FaInfo></FaInfo><span>monday - friday 10AM - 8pm</span></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
     );
}

export default ContactComponent ;