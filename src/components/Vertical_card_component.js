import { useEffect, useState } from "react";

const Vertical_card_component = (props) => {
    let cols = ["success","danger","info","warning"]
    let [selected_col,setcol] = useState("");
    useEffect(()=>{
        let index = Math.floor(Math.random() * 3);
        setcol(cols[index]);
    })
    
    return ( 
        <div className="card mx-3 py-3">
        <img src={props.lan.img} className="card-img-top" alt="..."/>
        <div className={"card-body " + "bg-"+selected_col}>
        <h5 className="card-title">{props.lan.title}</h5>
        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        </div>
    </div>
     );
}
 
export default Vertical_card_component;