import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false);
    }
  };

  return (
    <header style={styles.header}>
      <div style={styles.container}>
        <div style={styles.logo}>
          <img 
            src="https://customer-assets.emergentagent.com/job_threatshield-56/artifacts/8k9zpc4a_ChatGPT%20Image%20Oct%2023%2C%202025%2C%2005_07_32%20PM.png" 
            alt="Nefila Defense Logo" 
            style={styles.logoImg}
          />
          <span style={styles.logoText}>NEFILA DEFENSE</span>
        </div>

        {/* Desktop Navigation */}
        <nav style={{...styles.nav, display: menuOpen ? 'none' : 'flex'}} className="desktop-nav">
          <button onClick={() => scrollToSection('inicio')} style={styles.navLink}>Inicio</button>
          <button onClick={() => scrollToSection('servicios')} style={styles.navLink}>Servicios</button>
          <button onClick={() => scrollToSection('metodologia')} style={styles.navLink}>Metodología</button>
          <button onClick={() => scrollToSection('cotizacion')} style={styles.navLink}>Cotización</button>
          <button onClick={() => scrollToSection('contacto')} style={styles.navLink}>Contacto</button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          style={styles.menuButton} 
          onClick={() => setMenuOpen(!menuOpen)}
          className="mobile-menu-btn"
        >
          {menuOpen ? <X size={24} color="#00FFD1" /> : <Menu size={24} color="#00FFD1" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div style={styles.mobileMenu}>
          <button onClick={() => scrollToSection('inicio')} style={styles.mobileNavLink}>Inicio</button>
          <button onClick={() => scrollToSection('servicios')} style={styles.mobileNavLink}>Servicios</button>
          <button onClick={() => scrollToSection('metodologia')} style={styles.mobileNavLink}>Metodología</button>
          <button onClick={() => scrollToSection('cotizacion')} style={styles.mobileNavLink}>Cotización</button>
          <button onClick={() => scrollToSection('contacto')} style={styles.mobileNavLink}>Contacto</button>
        </div>
      )}
    </header>
  );
};

const styles = {
  header: {
    background: '#000000',
    borderBottom: '1px solid rgba(255, 255, 255, 0.25)',
    position: 'fixed',
    top: 0,
    width: '100%',
    height: '80px',
    zIndex: 1000,
    boxSizing: 'border-box',
  },
  container: {
    padding: '16px 7.6923%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '100%',
    maxWidth: '1400px',
    margin: '0 auto',
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    cursor: 'pointer',
  },
  logoImg: {
    height: '50px',
    width: 'auto',
    objectFit: 'contain',
  },
  logoText: {
    fontSize: '20px',
    fontWeight: 600,
    color: '#00FFD1',
    letterSpacing: '1px',
  },
  nav: {
    display: 'flex',
    alignItems: 'center',
    gap: '32px',
  },
  navLink: {
    color: '#4D4D4D',
    background: 'none',
    border: 'none',
    textDecoration: 'none',
    fontSize: '18px',
    fontWeight: 400,
    transition: 'color 0.3s ease',
    cursor: 'pointer',
    fontFamily: 'Fira Code, monospace',
  },
  menuButton: {
    display: 'none',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    padding: '8px',
  },
  mobileMenu: {
    position: 'absolute',
    top: '80px',
    left: 0,
    width: '100%',
    background: '#121212',
    borderBottom: '1px solid rgba(255, 255, 255, 0.25)',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },
  mobileNavLink: {
    color: '#FFFFFF',
    background: 'none',
    border: 'none',
    fontSize: '18px',
    fontWeight: 400,
    cursor: 'pointer',
    padding: '12px',
    textAlign: 'left',
    transition: 'color 0.3s ease',
    fontFamily: 'Fira Code, monospace',
  },
};

// Add media query styles via CSS
const styleSheet = document.createElement('style');
styleSheet.textContent = `
  @media (max-width: 768px) {
    .desktop-nav {
      display: none !important;
    }
    .mobile-menu-btn {
      display: block !important;
    }
  }
  
  .desktop-nav button:hover {
    color: #FFFFFF;
  }
  
  .desktop-nav button.active {
    color: #6FD2C0;
  }
  
  .mobile-menu button:hover {
    color: #00FFD1;
  }
`;
document.head.appendChild(styleSheet);

export default Header;