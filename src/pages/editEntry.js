import React, { useEffect } from "react";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { EntryInput } from "../components/EntryInput";
import { getEntry, loadLS } from "../components/functions";
import { WikiHeader } from "../components/wikiHeader";

export default function EditEntry() {
    const {state}= useLocation();
    const wiki = state.wiki;
    const entry = state.entry;

    let navigate = useNavigate();

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        
        let uID = loadLS("user");
        let token = loadLS("token");
        console.log(entry);
        const url = "https://takeee.ntigskovde.se/Wiki/wiki_index.php?action=editEntry&uID="+uID+"&token="+token+"&wiki="+wiki.ID+"&title="+title+"&contents="+content+"&page="+entry.oID;
        SubmitEntry(url);
    }

    const SubmitEntry = async (url) => {
        const response = await fetch(url);
        const data = await response.json();
        if(data.Type == "Ok") {
            navigate('/ShowWiki', {state:{wiki:wiki}});
        } else {
            alert("ERROR: " + data.Data);
        }
    }

    const setDefault = () => {
        setTitle(entry.title);
        setContent(entry.contents);
    }

    useEffect(() => {
        setDefault();
    },[]);

    return(
        <div className = "main">
            <WikiHeader wiki = {wiki} />
            <EntryInput
                text = "Redigera sida"
                title = {title}
                titleCallback = {setTitle}
                content = {content}
                contentCallback = {setContent}
                submitCallback = {handleSubmit}
            />
       </div> 
    );
}