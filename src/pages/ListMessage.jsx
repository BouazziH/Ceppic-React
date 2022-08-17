import "./ListContacts.css";
import x from "../data/dbContact.json";
export default function ListMessage() {
  return (
    <div className="box">
      <h1>la liste des messages.</h1>
      <ul>
        {x.contacts.map((contact) => (
          <li key={contact.id}>
            <table>
                <thead>
              <tr>
                <th scope="col">Nom</th>
                <th scope="col">Message</th>
              </tr>
              </thead>
             <tbody>
                 <tr>
                
                <td>{contact.nom}</td>
                <td>{contact.message}</td>
              </tr>
              </tbody>
            </table>
          </li>
        ))}
      </ul>
    </div>
  );
}
