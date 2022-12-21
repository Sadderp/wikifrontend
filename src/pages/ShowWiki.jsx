import React, { useState,useEffect } from "react";
import {  useLocation, useNavigate } from "react-router-dom";
import '../App.css';
import {WikiRow} from "../components/WikiRow";

const ShowWiki= () => {
    const {state}= useLocation();
    const wiki = state.wiki;

    const [entries, setEntries] = useState([]);
    const [entry, setEntry] = useState([]);
    const API_URL ="https://takeee.ntigskovde.se/Wiki/wiki_index.php?action=showWikiEntries&wID="+wiki.ID;
    
    
    const SendIt = async (url) => {
        const response = await fetch(`${url}`);
        const data = await response.json();
        setEntries(data);
        console.table(data["Data"]["Wiki_entry"]);
    }
    const FetchEntries = async()=> {
        let id = entries["Data"]["Wiki_entry"][0]["ID"];
        const response = await fetch("https://takeee.ntigskovde.se/Wiki/wiki_index.php?action=showEntry&eID="+id); 
        const answer = await response.json();
        setEntry(answer);
    }
    const Pruttljud = () =>{
        console.table(entry["Data"]);
    }
    
    useEffect(() => {
        SendIt(API_URL);
        FetchEntries();
        Pruttljud();
    },[]);
    useEffect(() => {
        FetchEntries();
    },[entries]);
    useEffect(() => {
        Pruttljud();
        
    },[entry]);
    return ( 
        <div className="Showtext">
            <table>
                <tr><td>User ID</td><td>{JSON.stringify(wiki.uID)}</td></tr>
                <tr><h2><td>{JSON.stringify(wiki.title)}</td></h2></tr>
            </table>
            <div>{entry["Data"]?(entry["Data"]["Wiki_entry"].contents):("asd")}</div>
        </div>
    );
}

export default ShowWiki