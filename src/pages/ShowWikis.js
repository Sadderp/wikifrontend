import React, { useState,useEffect } from "react";
import {  useNavigate } from "react-router-dom";
import '../App.css';
import WikiRow from "../components/WikiRow";



function ShowWikis(props){
    let navigate = useNavigate();
    const API_URL ="https://takeee.ntigskovde.se/Wiki/wiki_index.php?action=showWikis";
    const [wikiLista,setwikiLista] = useState([]);
    
    const SendIt = async (url) => {
        let wikiList = [];
        const response = await fetch(`${url}`);
        const data = await response.json();
        let result = data;
        if(data.Type=="Ok"){
            navigate('/start', {state:{error:"Showing all wikis"}});
        } else if(data.Type=="Error"){
            navigate('/start', {state:{error:"Couldn't load wikis"}});
        }
//        console.table(result.Data["Wiki entry"])
        result.Data["Wiki entry"].forEach(wikis => {
//            console.log(wikis['title']);  
            wikiList.push(wikis);
        })
        setwikiLista(wikiList)
    }
  
    useEffect(() => {
        SendIt(API_URL);
      },[]);
    

    return(
        <div className="ShowWiki">
            { wikiLista.map((wiki)=>(<WikiRow wiki={wiki} key={wiki.ID}/>))}
        </div>
    )
}

export default ShowWikis;
