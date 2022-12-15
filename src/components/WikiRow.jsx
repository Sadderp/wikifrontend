import React from "react";
import { Link, useNavigate } from "react-router-dom";

const WikiRow= ({wiki}) => {

    let navigate = useNavigate();
    return ( 
        <div>


            <button onClick={() => navigate("/ShowWiki", { state: { wiki:wiki} })}>Knapp</button>
            <span>IDt på wikin är {wiki['ID']} </span>
            <span className='wiki'>{wiki['title']}</span>
            
            </div>
    );
}

export default WikiRow;
