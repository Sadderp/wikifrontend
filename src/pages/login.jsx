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
            console.log('token', data.Data['Token']);
            console.log('userID', data.Data['uID'])
            navigate('/start');
        } else if(data.Type=="Error"){
            navigate('/login', {state:{error:"wrong username or password"}});
        }
    }
    
    return(
        <div className="loginform">
            <div className="error">{error}</div>
            <h1 className="header"> Login </h1>
            <div><label>Username: <input type="text" value={user} onChange={handleChangeUser}></input></label></div>
            <div><label>Password: <input type="password" value={password} onChange={handleChangePassword}></input></label></div>
            <button onClick={() => sendData()}>Log in</button>
        </div>
    )
}

export default Login;