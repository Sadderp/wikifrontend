import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { saveLS } from "../components/functions";
import { loadLS } from "../components/functions";
import '../App.css';

function ShowWikis(props){
    const { state } = useLocation();
    let navigate = useNavigate();
    let titel = "";
    let error = "";
    if(state != null){
        error = state.error;
    }

    const sendData = () => {
        const API_URL ="https://takeee.ntigskovde.se/Wiki/wiki_index.php?action=showWikis";
        sendIt(API_URL);
    }
    const sendIt = async (url) => {
        const response = await fetch(`${url}`);
        const data = await response.json();
        if(data.Type=="Ok"){
            navigate('/start', {state:{error:"Showing all wikis"}});
        } else if(data.Type=="Error"){
            navigate('/start', {state:{error:"Couldn't load wikis"}});
        }
        data.array.forEach(data => {
            console.log(data.Data['title']);    
        });
    }
    const showWikis = () => {
    }

    return(
        <div>
            
        </div>
    )
}

export default ShowWikis;