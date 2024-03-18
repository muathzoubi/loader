import { useEffect } from "react";
import "./styles.css";

export default function App() {
  useEffect(() => {
    setTimeout(() => {
      window.location.href = "www.google.com";
      window.location.replace("https://amouol.wixsite.com/ramada");
    }, 5000);
  }, []);
  return (
    <div className="App">
      <span className="loader"></span>
    </div>
  );
}
