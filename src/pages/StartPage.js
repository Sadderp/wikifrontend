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
            <div className="Ruta">
                <h2>Wiki-who?</h2>
            </div>
          
            <div className="WikiText">
                <button className="WikiPlus" onClick={routeChange}>Skapa wiki</button>
            </div>
<<<<<<< HEAD
            <div className="container">
                <ShowWikis/>
            </div>
                
=======
            <div className="TitleText">
                <ShowWikis/>
            </div>
>>>>>>> master
        </header>
            
        
        </div>)
    }

export default StartPage;