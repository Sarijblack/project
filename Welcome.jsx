import { useState } from "react";

function Welcome(props){
    var myAge = 16;
    console.log(myAge);
    return <div><p>{props.name}</p><p>{props.number}</p><p>{props.age}</p></div>
}

export default Welcome;