import { useState } from "react";

function Form(){
    const [name, setName] = useState({firstName:"", lastName:""});
    function handleChange(event){
        setName({...name, firstName: event.target.value},
            { lastName: event.target.value}
        );
    }
    return <div>
        <form>
            <input onChange={handleChange} type="text" value={name.firstName}/>
            <input onChange={handleChange} type="text" value={name.lastName}/>
        </form>
    </div>
}

export default Form;