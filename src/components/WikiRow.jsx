import React from "react";
import { useNavigate } from "react-router-dom";

const WikiRow= ({wiki}) => {
    let navigate = useNavigate();
    //let id = wiki['ID'];
    return ( 
        <div>

            <button onClick={() => navigate("/ShowWiki", { state: { wiki:wiki} })}>Gå till wikisida</button>
            <span>Wiki ID: {wiki['ID']} </span>
            <span className='wiki'>{wiki['title']}</span>
            
        </div>
    );
}

//export const Wiki_id = id;
export default WikiRow;