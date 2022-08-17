import { Link } from "react-router-dom";
import "./Nav.css";
export default function Nav() {
  return(
  <>
   <nav className="nav">
<Link to="/">Home</Link>
<Link to="about">About</Link>
<Link to="contact">Contact</Link>
<Link to="list">ListMessage</Link>
</nav>
</>
);
}
