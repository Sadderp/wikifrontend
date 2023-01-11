import React from "react";
import { Link, useNavigate } from "react-router-dom";



export function WikiHeader(props) {
    return(
        <div className = "wikiHeader">
            <Link to="/ShowWiki" className = "wikiHeaderToStart" state={{wiki: props.wiki}}>{props.wiki.title}</Link>
            <Link to="/start" className = "wikiHeaderToWikis">Se alla wikis</Link>
        </div>
    )
}