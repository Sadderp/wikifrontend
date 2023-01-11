import React from "react";
import { Link, useLocation } from "react-router-dom";
import { WikiHeader } from "../components/wikiHeader";

export default function ShowEntry() {
    const {state}= useLocation();
    console.log(state);
    const entry = state.entry;
    const wiki = state.wiki;

    return (
        <div className = "main">
            <WikiHeader wiki = {wiki}/>

            <div className = "Entry">
                <p className = "EntryTitle">{entry.title}</p>
                <p className = "EntryContent">{entry.contents}</p>
                <p className = "EntryStatus">{"Senast redigerad: " + entry.date + " av användare " + entry.uID + " (vi kan inte komma åt namnet lol)"}</p>
                <Link to="/EditEntry" className = "EntryEdit" state={{entry:entry, wiki:wiki}}>Redigera</Link>
            </div>
        </div>
    );
}