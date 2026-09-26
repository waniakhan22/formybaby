import { useNavigate } from "react-router-dom";
import "./home.css";

function Home() {
  const navigate = useNavigate();

  return (
    <main className="home-page">
      <picture className="home-picture">
        <source media="(max-width: 768px)" srcSet="/home-mobile.jpg" />
        <img
          src="/home-desktop.jpg"
          alt="Home background"
          className="home-image"
        />
      </picture>

      <button
        type="button"
        className="home-next-button"
        onClick={() => navigate("/next")}
      >
        Next
      </button>
    </main>
  );
}

export default Home;