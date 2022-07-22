import { userList } from "../data/date";
import Card from "./Card";
import "./USers.css";

export default function Users() {
  return (
    <section className="users">
   <ul>
        {userList.map((user) => (
    <Card key={user.id} user={user} />
    ))}
    </ul>  
        </section>
  );
}
