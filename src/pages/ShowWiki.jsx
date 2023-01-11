import React, { useState,useEffect } from "react";
import {  useLocation, useNavigate } from "react-router-dom";
import { saveLS } from "../components/functions";
import { loadLS } from "../components/functions";
import '../App.css';
import { EntryList } from "../components/EntryList";
import { WikiHeader } from "../components/wikiHeader";
import {WikiRow} from "../components/WikiRow";

const ShowWiki= () => {
    const {state}= useLocation();
    const wiki = state.wiki;

    const [startPage, setStartPage] = useState([]);
    const [entries, setEntries] = useState([]);
    const API_URL ="https://takeee.ntigskovde.se/Wiki/wiki_index.php?action=showWikiEntries&wID="+wiki.ID;

    let navigate = useNavigate();
    const routeChange = () =>{ 
        let path = `/Edit`; 
        navigate(path);
    }
    
    saveLS('id', wiki['ID']);
    
    const getAllEntries = async () => {
        const response = await fetch(API_URL);
        const JSONresponse = await response.json();

        // Get start page info
        let wikiInfo = await getEntry(JSONresponse.Data.Wiki[0].ID);
        setStartPage(wikiInfo);

        // Get entry details for all other entries (INDIVIDUALLY) (i will relentlessly make fun of whoever designed this backend)
        let IDlist = JSONresponse.Data.Wiki_entry;
        let entryList = [];
        for(let i=1;i<IDlist.length;i++) {
            let entry = await getEntry(IDlist[i].ID);
            entry.pageNum = i-1; // Local page ID (0, 1, 2, etc. Not same as database ID)
            entryList.push(entry);
        }

        setEntries(entryList);
    }

    /**
     * Get data for a specific entry
     * @param {number} id database ID of the entry
     * @returns 
     */
    const getEntry = async(id)=> {
        const response = await fetch("https://takeee.ntigskovde.se/Wiki/wiki_index.php?action=showEntry&eID="+id); 
        const answer = await response.json();

        if(answer.Type == "Error") {
            return;
        }

        return answer.Data.Wiki_entry
    }
    
    useEffect(() => {
        getAllEntries();
    },[]);

    let user = loadLS('user');
    let token = loadLS('token');
    let ID = loadLS('id');

    const Delete = ()=> {
        let path = `/start`;
        fetch("https://takeee.ntigskovde.se/Wiki/wiki_index.php?action=deleteWiki&uID="+user+"&token="+token+"&wID="+ID)
        .then((response) => response.json())
        .then((data) =>{
            navigate(path);
        });
    }

    return ( 
        <div className = "main">
            <WikiHeader wiki = {wiki}/>
            <p>{startPage?(startPage.contents):("")}</p> <br/>
            <EntryList entries = {entries} wiki = {wiki}/>
            <button onClick={routeChange}>Redigera knapp</button>
            <button onClick={Delete}>Ta bort wiki</button>
        </div>
    );
}

export default ShowWiki