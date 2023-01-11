import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { saveLS } from "../components/functions";
import { loadLS } from "../components/functions";
import '../App.css';
import ShowWikis from './ShowWikis'

function deleteWiki(props) {
    let user = loadLS('user');
    let token = loadLS('Token');
    let ID = loadLS('id');

    const API_URL ="https://takeee.ntigskovde.se/Wiki/wiki_index.php?action=deleteWiki&uID="+user+"&token="+token+"&wID="+ID;
    
    
    return(
        <div>
            <button onClick={routeChange}>Ta bort wiki</button>
        </div>
    )
    
}
