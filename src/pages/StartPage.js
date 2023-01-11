import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { saveLS } from "../components/functions";
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
    /*useEffect(() => {
        ShowWikis();
    });*/

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
                
                <button className="WikiPenna"onClick={routeChange}>Redigera wiki</button>
                
                <button className="WikiSlang">Tabort wiki</button>
            </div>
            <div className="WikiPageMeny">
                <div className="WikiPageText">
                    Wikisida
                </div>
                
                <button className="WikiPagePlus">Skapa wikisida</button>
                <button className="WikiPagePenna">Redigera wikisida</button>
                <button className="WikiPageSlang">Tabort wikisida</button>
            </div>
            <div className="TitleText">
                <ShowWikis/>
            </div>
            
        </header>
        </div>)
    }

export default StartPage;