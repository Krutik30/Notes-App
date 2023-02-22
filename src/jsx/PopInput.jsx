import React , {useState} from "react";

function PopInput(prop){

    return (prop.trigger) ? ( 
        <div className="pop-box">
            <button className="btn btn-danger">X</button>
        </div>
    ) : "";
}

export default PopInput;