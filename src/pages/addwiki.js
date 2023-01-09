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
    const sendData = () => {
        const API_URL ="https://takeee.ntigskovde.se/Wiki/wiki_index.php?action=createWiki&uID="+user+"&token="+token+"&title="+title+"&contents="+content;
        sendIt(API_URL);
    }
    const sendIt = async (url) => {
        const response = await fetch(`${url}`);
        const data = await response.json();
        console.log(data);
        if(data.Type=="Ok"){
            navigate('/Add', {state:{error:"Wiki created"}});
        } else if(data.Type=="Error"){
            navigate('/Add', {state:{error:"Something went wrong"}});
        }
    }
    
    return(
        <div className="Addform">
            <div className="error">{error}</div>
            <h1 className="header"> Skapa wiki </h1>
            <div><label>Titel: <input type="text" value={title} onChange={handleChangeTitle}></input></label></div>
            <div><label>Innehåll: <input className="WikiInput" type="text" value={content} onChange={handleChangeContent} style={{height: 100}}></input></label></div>
            <button onClick={() => sendData()}>Skapa</button>
        </div>
    )
}

export default AddWiki;