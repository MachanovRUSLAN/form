import React, { useEffect } from "react";

 import axios from "axios"

function Todo({userId}) {
    console.log(userId);

    useEffect(()=>{
        axios.get(`http://localhost:5173/todos?userId=${userId}`)
        .then(res => console.log(res.data))
    },[])
     

    return ( 
        <div>
         <h1>Todo Application</h1>
         <div className="todoapp">
            <form action="">
                <input type="text" />
                <input type="submit" value="APPtodo"/>
            </form>
            <table>
             <tr>
             <th>Todo title</th>
             <th>Actions</th>
             </tr>
             <tr>
                <td>Todo Etdim</td>
                <td>
                    <button>delete</button>
                    <button>update</button>
                </td>
             </tr>
            </table>
         </div>
        </div>
     );
}

export default Todo;