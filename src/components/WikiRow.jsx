import React from "react";
import { Link, useNavigate } from "react-router-dom";

const WikiRow= ({wiki}) => {

    id = wiki['ID'];
    let navigate = useNavigate();
    return ( 
        <div>

            <button onClick={() => navigate("/ShowWiki", { state: { wiki:wiki} })}>Knapp</button>
            <span>Wiki ID: {wiki['ID']} </span>
            <span className='wiki'>{wiki['title']}</span>
            
        </div>
    );
}

export default WikiRow;
