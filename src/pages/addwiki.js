import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { loadLS } from "../components/functions";
import '../App.css';

function AddWiki(props){
    const { state } = useLocation();
    let error = "";
    if(state != null){
        error = state.error;
    }
    let user = loadLS('user');
    let token = loadLS('token');
    let navigate = useNavigate();
    const [title, setTitle ] = useState();
    const [content, setContent ] = useState();

    const handleChangeTitle = (e) => {
        setTitle(e.target.value);
    }
    const handleChangeContent = (e) => {
        setContent(e.target.value);
    }
    const sendData = (event) => {
        event.preventDefault();
        const API_URL ="https://takeee.ntigskovde.se/Wiki/wiki_index.php?action=createWiki&uID="+user+"&token="+token+"&title="+title+"&contents="+content;
        sendIt(API_URL);
    }
    const sendIt = async (url) => {
        const response = await fetch(`${url}`);
        const data = await response.json();
        console.log(data);
        if(data.Type=="Ok"){
            navigate('/start', {state:{error:"Wiki created"}});
        } else if(data.Type=="Error"){
            alert("ERROR: " + data.Data);
        }
    }
    
    return(
        <div className = "main">
            <br/><br/><br/><h1 className="header"> Skapa wiki </h1><br/><br/>
            <div className="error">{error}</div>
            <form onSubmit = {sendData}>
                <br/><label>Titel:</label><br/>
                <input type="text" id = "WikiInput1" value={title} onChange={handleChangeTitle}></input><br/>
                <br/><label>Beskrivning:</label><br/>
                <textarea className="WikiInput" id = "WikiInput2" type="text" value={content} onChange={handleChangeContent} style={{height: 100}}></textarea><br/>
                <input type="submit" className="SubmitButton" value = "Skapa"></input>
            </form>
        </div>
    )
}

export default AddWiki;