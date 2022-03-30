import { useState } from "react"
import "../../Css/components.css"

const Form =({addTodo})=>{
    const [userInput,setUserInput] = useState("");

    const eventTodo =(e) =>setUserInput(e.target.value);

    
    const formSubmit = (e) => {
        e.preventDefault();
        setUserInput("");
    };
    
    return(
            <form onSubmit={formSubmit} className='container-geral'>
                <input type="text" onChange={eventTodo} placeholder="Nova tarefa" className="input-app"/>
                <button onClick={()=> addTodo(userInput)} className="button-geral">Enviar</button>
            </form>    
    )
}
export default Form