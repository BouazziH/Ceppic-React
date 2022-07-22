import "./footer.css";
export default function Footer() {
  const currentyear = () => {
    return new Date().getFullYear();
  };
  return (
    <footer>
      <p>&copy; - {currentyear()} CEPPIC-REACTJS</p>
    </footer>
  );
}
