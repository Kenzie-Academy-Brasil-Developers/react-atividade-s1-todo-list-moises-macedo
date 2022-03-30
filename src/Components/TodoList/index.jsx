import "../../Css/components.css"
const TodoList =({todos,handleTodo})=>{
    return (
       
            <ul>
                {todos.map((item,index)=> (
                    <li key={index}>{item} <button onClick={()=> handleTodo(item)} className="button-geral"> Concluir Tarefa</button></li>
                 ))}
            </ul>

    )
}
export default TodoList