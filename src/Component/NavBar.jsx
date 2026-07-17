import { useNavigate } from 'react-router-dom'
import '../styles/navbar.css'
import '../styles/ui.css'

const Navbar = ({favoritesCount}) => {
const navigate= useNavigate();
  return (
    <header className="home-navbar">
      <div className="home-navbar__brand">
        <div className="home-navbar__logo" aria-hidden="true">
          🍴
        </div>
        <div>
          <h1 className="home-navbar__title">What&apos;s For Dinner?</h1>
          <p className="home-navbar__subtitle">Find your next comfort meal.</p>
        </div>
      </div>

      <div className="home-navbar__actions">
        
          <button type="button" className="home-pill" onClick={() => navigate("/favorites")}>Favs ({favoritesCount})</button>
        <button type="button" className="home-button" onClick={() => navigate("/random")}>
          Surprise Me old
        </button>
      </div>
    </header>
  )
}

export default Navbar
