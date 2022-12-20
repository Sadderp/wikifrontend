import React, { useState,useEffect,useLocation } from "react";
import {  useNavigate } from "react-router-dom";
import '../App.css';
import WikiRow from "../components/WikiRow";

const ShowWiki= () => {

    const {state}= useLocation();
    const wiki = state.wiki;

    
    function ShowWikis(props){
        let navigate = useNavigate();
        const API_URL ="https://takeee.ntigskovde.se/Wiki/wiki_index.php?action=showWikiEntries&wID="+id;
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
                { wikiLista.map((wiki)=>(<WikiRow  key={wiki.ID} wiki={wiki} />))}
            </div>
        )
    }
    

return ( 
        <div className="Showtext">
            <table>
                <tr><td>Title</td><td>{JSON.stringify(wiki.title)}</td></tr>
                <tr><td>ID</td><td>{JSON.stringify(wiki.ID)}</td></tr>
                <tr><td>User ID</td><td>{JSON.stringify(wiki.uID)}</td></tr>
                <tr><td>Wiki Index</td><td>{JSON.stringify(wiki.wikiIndex)}</td></tr>
                <tr><td>Private</td><td>{JSON.stringify(wiki.private)}</td></tr>
            </table>
        </div>
    );

    
}




export default ShowWiki


/* Först hämta specifik wiki och dess entries


https://takeee.ntigskovde.se/Wiki/wiki_index.php?action=showWikiEntries&wID=19

{"Version":"0.1.5","Type":"Ok","Data":{"Wiki":[{"ID":19,"uID":1,"title":"Namn som b\u00f6rjar p\u00e5 w","wikiIndex":21,"private":0}],"Wiki_entry":[{"ID":21,"wID":19,"uID":1},{"ID":23,"wID":19,"uID":41}]}}

// Sen ska vi hämta alla entries från den wikin och visa upp dem.

https://takeee.ntigskovde.se/Wiki/wiki_index.php?action=showEntry&eID=23
{"Version":"0.1.5","Type":"Ok","Data":{"Wiki entry":{"ID":23,"oID":23,"uID":41,"title":"jag kan flera namn p\u00e5 w","contents":"woldemort woctoria","date":"2022-12-15 02:35:16"}}}
*/