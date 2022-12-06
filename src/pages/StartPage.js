import { useState } from "react";
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

    return(
        <div className="App">
        <header className="App-header">
            <div className="graRuta">
                
            </div>
            <div className="SearchBar">
            Search
            </div>
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
            Wiki
            </div>
            <div className="ContentText">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae ante quis arcu lobortis hendrerit. Suspendisse at ex ut nibh dictum commodo porta a arcu. 
            Vestibulum varius commodo arcu, ac scelerisque erat euismod non. Vivamus non est non augue condimentum blandit consequat et odio. Curabitur id purus turpis. 
            Vestibulum a ipsum sed sapien sollicitudin lacinia. Fusce ut convallis nisl. Praesent in suscipit orci. Quisque leo magna, tristique quis nisl vitae, pretium ornare ex.
            In ipsum leo, tincidunt vitae sagittis ac, porta at orci. Phasellus sit amet urna eget justo maximus convallis. Suspendisse quis auctor ante. Sed mollis viverra est id ultrices. 
            Integer at lacinia velit. Etiam consequat velit sodales, suscipit ex ut, convallis dui. Vivamus vulputate nulla sapien, id viverra nisl blandit id. 
            Donec mollis nulla ut est iaculis, vel pretium leo rutrum. Mauris at dolor lacinia, luctus elit vitae, consequat enim. Morbi nec consectetur velit. 
            Curabitur facilisis finibus lobortis. In lobortis sagittis purus eget sagittis. Aenean commodo nec nisi quis congue. Etiam pulvinar, massa et pellentesque feugiat, 
            enim nisl semper ante, quis scelerisque mi tellus ac ligula. Sed congue nibh vel tristique luctus.
            Aliquam faucibus velit sit amet sapien pharetra, non molestie turpis maximus. Mauris eget imperdiet ante, a tincidunt ex.
            </div>
            <p>
            </p>
            <a>
            </a>
        </header>
        </div>)
    }

export default StartPage;