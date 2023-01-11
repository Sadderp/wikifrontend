import React from "react";
import { useNavigate } from "react-router-dom";

const WikiRow= ({wiki}) => {
    let navigate = useNavigate();
    //let id = wiki['ID'];
    return ( 
        <div className="Knapptext">

            <div onClick={() => navigate("/ShowWiki", { state: { wiki:wiki} })}>{wiki['ID']} {wiki['title']}</div>
            
        </div>
    );
}

//export const Wiki_id = id;
export default WikiRow;