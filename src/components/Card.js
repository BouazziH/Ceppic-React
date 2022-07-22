
export default function Card({user}) {
  return (
    <li>
      <div> Id:{user.userId}</div>
      <div> nom :{user.nom} </div>
      <div>prenom :{user.prenom}</div>
      <div> telephone : {user.telephone}</div>
      <div>email: {user.email}</div>
      <div> profession: {user.profession}</div>
    </li>
  );
}
