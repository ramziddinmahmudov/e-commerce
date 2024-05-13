import "./App.css";
import {useState } from "react";

function App() {
   const [users, setUsers] = useState([]);


   async function userGet(){
      const response = await fetch('https://jsonplaceholder.typicode.com/todos');
      const data = await response.json();
      setUsers(data);
   }

   userGet()


   return (
     <div className="container">
        <h1>Check</h1>
        <div>
           {
             users &&
             <>
                {users.map((user)=> (
                  <>
                     <h1>{user.title}</h1>
                     <h5>{user.userId}</h5>
                     <p>{user.id}</p>
                  </>
                ))}
             </>
           }
        </div>
     </div>
   );
}

export default App;