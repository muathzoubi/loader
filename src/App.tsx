import { useEffect } from "react";
import "./styles.css";

export default function App() {
  useEffect(() => {
    setTimeout(() => {
      window.location.href = "www.google.com";
      window.location.replace("https://jo9465635.wixsite.com/tamini");
    }, 3000);
  }, []);
  return (
    <div className="App">
      <span className="loader"></span>
    </div>
  );
}
