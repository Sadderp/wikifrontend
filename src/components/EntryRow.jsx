import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function EntryRow(props) {
    let navigate = useNavigate();
    //let id = wiki['ID'];

    return ( 
        <div className = "entryRow">
            <Link to="/ShowEntry" className = "wikiHeaderToStart" state={{entry:props.entry, wiki: props.wiki}}>{props.entry.title}</Link>
        </div>
    );
}