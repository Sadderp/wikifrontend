import React, { useState,useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { saveLS } from "../components/functions";
import { loadLS } from "../components/functions";
import '../App.css';
import {WikiRow} from "../components/WikiRow";

const ShowWiki= () => {
    const {state}= useLocation();
    const wiki = state.wiki;

    const [entries, setEntries] = useState([]);
    const [entry, setEntry] = useState([]);
    const API_URL ="https://takeee.ntigskovde.se/Wiki/wiki_index.php?action=showWikiEntries&wID="+wiki.ID;

    let navigate = useNavigate();
    const routeChange = () =>{ 
        let path = `/Edit`; 
        navigate(path);
    }
    
    saveLS('id', wiki['ID']);

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
    
    useEffect(() => {
        SendIt(API_URL);
        FetchEntries();
  
    },[]);
<<<<<<< HEAD
    useEffect(() => {
        FetchEntries();
    },[entries]);
    return ( 
        <div className="Showtext">
            <table>
                <tr><td>User ID</td><td>{JSON.stringify(wiki.uID)}</td></tr>
                <tr><h2><td>{JSON.stringify(wiki.title)}</td></h2></tr>
            </table>
            <div>{entry["Data"]?(entry["Data"]["Wiki_entry"].contents):("asd")}</div>
            
=======

    let user = loadLS('user');
    let token = loadLS('token');
    let ID = loadLS('id');

    const Delete = ()=> {
        let answer = window.confirm("är du säker på att du vill ta bort den här wikin?");
        if (answer){
        let path = `/start`;
        fetch("https://takeee.ntigskovde.se/Wiki/wiki_index.php?action=deleteWiki&uID="+user+"&token="+token+"&wID="+ID)
        .then((response) => response.json())
        .then((data) =>{
            navigate(path);
        });}
        else {
            return;
        }
    }

    return ( 
        <div className = "main">
            <WikiHeader wiki = {wiki}/>
            <p>{startPage?(startPage.contents):("")}</p> <br/>
            <EntryList entries = {entries} wiki = {wiki}/>
            <Link to="/CreateEntry" className = "EntryEdit" state={{wiki:wiki}} style={{textDecoration: "none", color:"black", fontSize:24}}>+</Link><br/>
            <button onClick={routeChange}>Redigera wiki</button>
            <button onClick={Delete}>Ta bort wiki</button>
>>>>>>> master
        </div>
    );
}

export default ShowWiki