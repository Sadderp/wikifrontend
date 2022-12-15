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
            <div ><input type={"text"} placeholder={"Search"} className={"Searchbar"}></input></div>

            <div className="WikiMeny">
                <div className="WikiText">
                    Wiki
                </div>
                <button className="WikiPlus" onClick={routeChange}>Create wiki</button>
                <div className="WikiPenna">
                    P
                </div>
                <div className="WikiSlang">
                    S
                </div>
            </div>
            <div className="WikiPageMeny">
                <div className="WikiPageText">
                    Wikisida
                </div>
                <div className="WikiPagePlus">
                    +
                </div>
                <div className="WikiPagePenna">
                    P
                </div>
                <div className="WikiPageSlang">
                    S
                </div>
            </div>
            <div className="TitleText">
                <ShowWikis/>
            </div>
            
        </header>
        </div>)
    }

export default StartPage;