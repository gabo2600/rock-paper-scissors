import React from "react";
import '../css/mainWin.css';
import Icon from "./icon";

var mainWin = (props)=>{

    return (
      <div className="mainWin">
          <Icon onClick={props.onClick} type={0}/>
          <Icon onClick={props.onClick} type={1}/>
          <Icon onClick={props.onClick} type={2}/>
      </div>
    );
}

export default mainWin;
