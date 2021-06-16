import React from "react";
import '../css/icon.css';

//images
import R from "../images/icon-rock.svg";
import P from "../images/icon-paper.svg";
import S from "../images/icon-scissors.svg";



const Icon = (props)=>{
    let imgSrc,classN;
    switch (props.type){
        case 0:
            imgSrc = R;
            classN = 'red';
            break;
        case 1:
            imgSrc = P;
            classN = 'blue';
            break;
        default:
            imgSrc = S;
            classN = 'yellow';
            break;
    }
    if (props.onClick!== undefined){
        return (
        <button className={"icon "+classN} onClick={()=>{props.onClick(props.type)}}> 
            <div class="innerCircle">
                <img src={imgSrc} alt=""/>
            </div>
        </button>
        );
    }
    else{
        return (
            <div className={"icon "+classN}> 
                <div class="innerCircle">
                    <img src={imgSrc} alt=""/>
                </div>
            </div>
        );
    }
}

export default Icon;