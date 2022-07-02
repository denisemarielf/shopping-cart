import "../assets/styles/Homepage.css";
import { useNavigate } from "react-router-dom";

export default function Homepage() {
  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/shop`;
    navigate(path);
  };

  return (
    <section className="homepage">
      <div className="homepage-img"></div>
      <div className="homepage-text">
        <h2 className="homepage-title">
          Introducing your new favorite products
        </h2>
        <button onClick={routeChange} className="homepage-text-button">
          SHOP NOW
        </button>
      </div>
    </section>
  );
}
