import { useNavigate } from "react-router-dom";
import { loadLS } from "../components/functions";
import '../App.css';
import ShowWikis from './ShowWikis'

function StartPage(props){
    let user = loadLS('user');
    let token = loadLS('Token');
    let navigate = useNavigate();
    const routeChange = () =>{ 
        let path = `/Add`; 
        navigate(path);
    }

    return(
        <div className="App">
        <header className="App-header">
            <div className="graRuta">
                
            </div>
            <div ><input type={"text"} placeholder={"Sök "} className={"Searchbar"}></input></div>

            <div className="WikiMeny">
                <div className="WikiText">
                    Wiki
                </div>
                <button className="WikiPlus" onClick={routeChange}>Skapa wiki</button>
            </div>
            <div className="TitleText">
                <ShowWikis/>
            </div>
        </header>
        </div>)
    }

export default StartPage;