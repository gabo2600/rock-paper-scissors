import React from "react";
import '../css/rules.css';

//images
import R from "../images/image-rules.svg";
import C from "../images/icon-close.svg";

const Rules = (props) => {

    if (window.innerWidth > 700)
        return <div>
            <div className="overlay" />
            <div className="Rules">
                <div class="modal-header">
                    <h1>Rules</h1>
                    <button className="bt-close" onClick={props.onClick}>
                        <img src={C} alt="close" />
                    </button>
                </div>
                <img src={R} className="img-rules" alt="" />
            </div>
        </div>
        else
            return <div>
                <div className="overlay" />
                <div className="Rules">
                    <h1>Rules</h1>
                    <img src={R} className="img-rules" alt="" />

                    <button className="bt-close" onClick={props.onClick}>
                        <img src={C} alt="close" />
                    </button>
                </div>
                </div>
}

export default Rules;