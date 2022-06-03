

import Languages_component from "./Languages_component";
import About_me_component from "./About_me_component";

const Resume_page_component = () => {
    const top_style={
        marginTop : '5.5em'
    }
    return ( 
        
        <div className="container" style={top_style}>
            <div className="row text-center">
                <h1 className="fs-2">Hi i am Milan</h1>
                <h3 className="fs-4 ms-3">Full stack Dev</h3>
            </div>
            <About_me_component></About_me_component>
            <Languages_component></Languages_component>
        </div>
     );
}
 
export default Resume_page_component;