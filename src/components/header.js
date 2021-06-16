import React from "react";
import '../css/header.css';
//images
import H from "../images/logo.svg";

const Header = (props)=>{
    
    return <div className="Header">
        <img src={H} alt="RockPaperScissors"/>

        <div className="scoreContainer">
            <div className="scoreTitle">SCORE</div>
            <div className="score">{props.score}</div>
        </div>
    </div>
}

export default Header;
