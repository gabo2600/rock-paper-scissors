import React from "react";
import '../css/game.css';
import Icon from "./icon";

var Game = (props) => {
  let banner, housePick, userPick ;

  if (props.win === true) {
    banner = <h1 className="win"> YOU WIN </h1>;
    userPick = <div> <Icon type={props.userPick} />  <div id="win3">  <div id="win2">  <div id="win1"> </div> </div></div> </div>
    housePick = <Icon type={props.housePick} />

  } else{
    banner = <h1 className="lose"> YOU LOSE </h1>;
    housePick = <div> <Icon type={props.housePick} />   <div id="win3">  <div id="win2">  <div id="win1"> </div> </div></div> </div>
    userPick = <Icon type={props.userPick} />
  }
  

  
  return (
    <div className="Game">
      <div className="col-1">
        <h2>YOUR PICK</h2>
        {userPick}
      </div>
      <div className="col-2">
        <div className="sub-col">
          {banner}
          <button className="bt-again" onClick={props.onClick} >PLAY AGAIN</button>
        </div>
        
      </div>

      <div className="col-3">
        <h2>HOUSE PICK</h2>
        {housePick}
      </div>

    </div>
  );
}

export default Game;
