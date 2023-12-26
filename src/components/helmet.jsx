import { Helmet } from "react-helmet";

function HelmetComponent(props) {
    const {title} = props
    return ( 
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>{title}</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
        </>
     );
}

export default HelmetComponent;