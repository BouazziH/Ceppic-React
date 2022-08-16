import { useState } from "react";

export default function Contact() {
  const [nom, setNom] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();
const [submitted, setSubmitted] = useState(false);

const handelSubmit = (event) => {
    /* c'est pour dire au formulaire ne pas recharger la page preventDefault() */
    event.preventDefault();
    const contacts = {nom,email,message};
    console.log(contacts);
    setSubmitted(true);
}
if(submitted){
    return(
        <>
        <p>
            Merci de votre message.
        </p>
        </>
    )
}



  return (
    <div className="contact">
      <h1>Contact</h1>
      {/* pour envoyer a formulaire en methode post */}
      <form method="POST" onSubmit={handelSubmit}>
        <div>
          <input
            type="text"
            name="nom"
            placeholder="Votre nom"
            required
            onChange={(event) => setNom(event.target.value)}
          />
        </div>
        <div>
          <input
            type="email"
            placeholder="Votre email"
            required
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div>
          <textarea
            name="message"
            placeholder="Votre message"
            required
            onChange={(event) => setMessage(event.target.value)}
          ></textarea>
        </div>
        <div>
          <button type="submit">Envoyer le message</button>
        </div>
      </form>
    </div>
  );
}
