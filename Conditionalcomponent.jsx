import Welcome from "./Welcome";
import Code from "./Code";


function Conditionalcomponent(){
    const display = false;
    const message = display ? "I am sad" : "I am happy";
   return (<div>{message}</div>);
}

export default Conditionalcomponent;