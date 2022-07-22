import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Increm from "./components/Increm";
import Plusun from "./components/Plusun";
import Users from "./components/Users";
import Randomuser from "./components/Randomuser";

function App() {
  //use state

  // etat
  //ici ou tape le code
  const message = <h1>hello word</h1>;
  const message2 = (
    <div>
      <h3>Block html</h3>
      <p>Une petite paragraphe.</p>
        </div>
  );

  const calcule = <h2>Cette operation 2 * 6 = {2 * 6}</h2>;
  const loggedId = false;
  const Voitures = ["Mercedes", "Audi", "Bmw", "Nissan"];
  const Voitures2 = [
    { id: 1, nom: "Honda", color: "red" },
    { id: 2, nom: "Volkswagen", color: "blue" },
    { id: 3, nom: "Ferrari", color: "green" },
    { id: 4, nom: "LAmbo", color: "yellow" },
  ];

  //comportement

  //rendu

  return (
    <div className="App">
      <Header title="logo" text="React JS" />

      {/*ici ou on fait l'appel de nos fonction */}
      {message}
      {message2}
      {calcule}
      {loggedId && <p> Vous etes connecte</p>}
      {/*condition ternaire si oui on met ? si non on met :*/}
      {loggedId ? <p>Vous etes connecté</p> : <p>Vous etes pas connecté</p>}
      {/*la fonction map c'est pour parcourir notre tableau  */}
      <ul>
        {Voitures.map((voiture) => (
          <li key={voiture}>{voiture}</li>
        ))}
      </ul>
      <ul>
        {Voitures2.map((voiture) => (
          <li key={voiture.id}>
            {voiture.nom} {voiture.color}
          </li>
        ))}
      </ul>

      <Plusun text="Click :" nb={0} />
      <Increm text="on incrimente en 10 :" nb={10} />

<Randomuser />

<Users />

      <Footer />
    </div>
  );
}

export default App;
