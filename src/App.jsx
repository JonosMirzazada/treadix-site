import './App.css'

// Main maintenance page shown while the full TREADIX site is being prepared.
function App() {
  return (
    <div className="maintenance-bg">
      <div className="maintenance-overlay">
        <div className="maintenance-content">
          {/* Logo card: uses public/logo7.png as the central brand mark. */}
          <div className="maintenance-logo-frame">
            <img src="/logo7.png" alt="TREADIX logo" className="maintenance-logo" />
          </div>

          {/* Brand label, headline, and current site status. */}
          <span className="maintenance-kicker">TREADIX</span>
          <h1>We are building something bigger</h1>
          <div className="maintenance-status" aria-label="Status">
            <span>Under maintenance</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App
