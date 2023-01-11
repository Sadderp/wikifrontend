import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { saveLS } from "../components/functions";
import '../App.css';

function Login(props){
    const { state } = useLocation();
    let error = "";
    if(state != null){
        error = state.error;
    }
    let navigate = useNavigate();
    const [user, setUser ] = useState();
    const [password, setPassword ] = useState();

    const handleChangeUser = (e) => {
        setUser(e.target.value);
    }
    const handleChangePassword = (e) => {
        setPassword(e.target.value);
    }
    const sendData = () => {
        const API_URL ="https://takeee.ntigskovde.se/login.php?username="+user+"&password="+password;
        sendIt(API_URL);
    }
    const sendIt = async (url) => {
        const response = await fetch(`${url}`);
        const data = await response.json();
        if(data.Type=="Ok"){
            saveLS('token', data.Data['Token']);
            saveLS('user', data.Data['uID']);
            navigate('/start');
        } else if(data.Type=="Error"){
            navigate('/login', {state:{error:"Wrong username or password!"}});
        }
    }
    
    return(
        <div className="loginform">
                <div className="error">{error}</div>
                <h1 className="header"> Logga in </h1>
                <div><input type="text" placeholder="Användarnamn" value={user} onChange={handleChangeUser}></input></div>
                <div><input type="password" placeholder="Lösenord" value={password} onChange={handleChangePassword}></input></div>
                <button onClick={() => sendData()}>Fortsätt</button>
        </div>
    )
    
}

export default Login;