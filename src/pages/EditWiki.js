import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { saveLS } from "../components/functions";
import { loadLS } from "../components/functions";
import '../App.css';


function EditWiki(props){
    let user = loadLS('user');
    let token = loadLS('Token');
    let ID = loadLS('id');

    const API_URL ="https://takeee.ntigskovde.se/Wiki/wiki_index.php?action=createWiki&uID="+user+"&token="+token+"&wID="+ID;
}



export default EditWiki;