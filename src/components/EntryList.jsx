import React from "react";
import EntryRow from "./EntryRow";

export function EntryList(props) {

    if(!props.entries || props.entries.length == 0) {
        return(<div>Den här wikin har inget innehåll!</div>)
    };

    return (
        <div>
            {props.entries.map(entry => {
                return (
                    <div key = {entry.pageNum}>
                        <EntryRow entry = {entry} wiki = {props.wiki}/>
                    </div>
                );
            })}
        </div>
    );
}