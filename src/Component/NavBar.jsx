import '../styles/navbar.css'
import '../styles/ui.css'

const Navbar = ({favoritesCount}) => {
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
        <span className="home-pill">Favs ({favoritesCount})</span>
        <button type="button" className="home-button">
          Surprise Me
        </button>
      </div>
    </header>
  )
}

export default Navbar
