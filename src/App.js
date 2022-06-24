import {useState} from 'react'
import './App.css';


function App() {
  const [toDos,setTodos] = useState([])
  const [toDo,setToDo] = useState('')

  const deleteTask = (index)=> {

    var ask = window.confirm("Do you want to delete the task?");
    if (ask) {
      const test = [...toDos];
        test.splice(index, 1);

        setTodos(test)
    }else {
      console.log("Don't delete");
    }
  }

  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        {/* <h2>Whoop, it's Wednesday 🌝 ☕ </h2> */}
      </div>
      <div className="input">
        <input value={toDo} onChange={(event)=>setToDo(event.target.value)} type="text" placeholder="🖊️ Add item..." />
        <i onClick={()=>setTodos([...toDos,{id:Date.now(), text : toDo, status:false}])} className="fas fa-plus"></i>
      </div>
      <div className="todos">
        {
          toDos.map((value,index)=>{
            return(
        <div className="todo">
          <div className="left">
            <input onChange={(e)=>{
              console.log(e.target.checked);//boolean check box value
              console.log(value);//full object of map todo
              console.log(index);
              setTodos(toDos.filter(value2=>{
                if(value2.id === value.id){
                  value2.status = e.target.checked
                  
                }
                return value2
              }))
              
            }} type="checkbox" name="" id="" />
            <p>{value.text}</p>
          </div>
          <div className="right">
            <i onClick={()=>deleteTask(index)} className="fas fa-times"></i>
          </div>
        </div>
            ) 
        })
}
{
  toDos.map((value)=>{
    if(value.status){
      return(<h1>{value.text}</h1> )
    }
    return null;
  })
}
      </div>
    </div>
  );
}

export default App;

