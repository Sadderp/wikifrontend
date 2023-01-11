
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { loadLS } from "../components/functions";
import '../App.css';

function EditWiki(props){
    const { state } = useLocation();
    const wiki = state.wiki;
    console.log(wiki);

    let error = "";
    if(state != null){
        error = state.error;
    }
    let user = loadLS('user');
    let token = loadLS('token');
    let navigate = useNavigate();
    const [title, setTitle ] = useState();

    const handleChangeTitle = (e) => {
        setTitle(e.target.value);
    }

    const sendData = () => {
        const API_URL ="https://takeee.ntigskovde.se/Wiki/wiki_index.php?action=editWiki&uID="+user+"&token="+token+"&wID="+wiki.ID+"&wikiIndex="+"1"+"&title="+title;
        sendIt(API_URL);
    }
    const sendIt = async (url) => {
        const response = await fetch(`${url}`);
        const data = await response.json();
        console.log(data);
        if(data.Type=="Ok"){
            navigate('/start', {state:{error:"Wiki created"}});
        } else if(data.Type=="Error"){
            navigate('/Add', {state:{error:"Something went wrong"}});
        }
    }
    
    return(
        <div className = "main">
            <br/><br/><br/><h1 className="header"> Redigera wiki </h1><br/><br/>
            <div className="error">{error}</div>
            <form>
                <br/><label>Titel:</label><br/>
                <input type="text" id = "WikiInput1" value={title} onChange={handleChangeTitle}></input><br/>
                <button className="SubmitButton" onClick={() => sendData()}>Spara</button>
            </form>
        </div>
    )
}

export default EditWiki;