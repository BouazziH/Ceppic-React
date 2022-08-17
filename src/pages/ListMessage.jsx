import "./ListContacts.css";
import x from "../data/dbContact.json";
export default function ListMessage() {
  return (
    <div>
      <h1>la liste des messages.</h1>
      <ul>
        {x.contacts.map((contact) => (
          <li key={contact.id}>
            <table>
              <tr>
                <td>Nom</td>
                <td>Message</td>
              </tr>
              <tr>
                <td>{contact.nom}</td>
                <td>{contact.message}</td>
              </tr>
            </table>
          </li>
        ))}
      </ul>
    </div>
  );
}
