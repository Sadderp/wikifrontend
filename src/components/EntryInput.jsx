import React from "react";
import { Link, useNavigate } from "react-router-dom";

export function EntryInput(props) {
    return (
        <div className = "Entry">
            <p>{props.text}</p> <br/>
            <form onSubmit={props.submitCallback}>
                <label for = "TitleInput">Titel</label> <br/>
                <input 
                    type = "text" 
                    id = "TitleInput"
                    value = {props.title} 
                    onChange={(e) => props.titleCallback(e.target.value)}
                /> <br/> <br/>
                
                <label for = "TextInput">Innehåll</label> <br/>
                <textarea 
                    style = {{height:200, marginTop:8}} 
                    id = "TextInput"
                    value = {props.content}
                    onChange={(e) => props.contentCallback(e.target.value)}
                    ></textarea> <br />
                <input type = "submit" className = "EntrySubmit" value = "Spara" id = "SubmitInput"></input>
            </form>
        </div>
    );
}