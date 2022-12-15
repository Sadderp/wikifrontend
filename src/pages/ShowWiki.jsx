import React from "react";
import { useLocation } from "react-router-dom";

const ShowWiki= () => {

    const {state}= useLocation();
    const wiki = state.wiki;



    return ( 
        <div>
            {JSON.stringify(wiki)}
            Här skall innehållet på Wikin skrivs ut.

            </div>
    );


}



export default ShowWiki
