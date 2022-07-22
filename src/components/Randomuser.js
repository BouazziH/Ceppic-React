import "./Randomuser.css"
import { useState, useEffect } from "react";
export default function Randomuser() {
  const [users,setUsers] = useState([])
  useEffect( () => {
    fetch('https://randomuser.me/api/?results=10')
    .then(response => response.json())
    .then(data => setUsers(data.results))
},[]);

  

  return (
<div className="randomusers">
         
            {users.map((user) => (
            <figure key={user.id.value}> 
            <img src={user.picture.large} alt="{user.name.first}"/>
            <figcaption>
              <div>{user.name.first} {user.name.last}</div>
              <div>{user.email}</div>
                
              
            </figcaption>
            </figure>
            ))}
         
           
      
            
        </div>
)};
