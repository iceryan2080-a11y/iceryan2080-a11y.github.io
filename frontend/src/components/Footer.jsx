import React from 'react';
import { Shield, Mail, Phone, ArrowRight } from 'lucide-react';
import logo from '../NEFILALOGO.png';

const Footer = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer style={styles.footer}>
      {/* CTA Final */}
      <div style={styles.ctaSection}>
        <div style={styles.container}>
          <h2 className="display-large" style={styles.ctaTitle}>
            La seguridad no es opcional.
            <br />
            Protege tu negocio antes de que sea tarde.
          </h2>
          <button 
            className="btn-red"
            onClick={() => scrollToSection('contacto')}
            style={styles.ctaButton}
          >
            Hablar con un Especialista
            <ArrowRight size={20} />
          </button>
        </div>
      </div>

      {/* Footer Content */}
      <div style={styles.footerContent}>
        <div style={styles.container}>
          <div style={styles.footerGrid}>
            {/* Brand Section */}
            <div style={styles.brandSection}>
              <div style={styles.footerLogo}>
                <img
                  src={logo}
                  alt="Nefila Defense Logo"
                  style={styles.logoImg}
                />
                <span style={styles.logoText}>NEFILA DEFENSE</span>
              </div>
              <p style={styles.tagline}>
                Tejiendo defensa, atrapando amenazas
              </p>
              <div style={styles.iconWrapper}>
                <Shield size={32} color="#00FFD1" strokeWidth={1.5} />
              </div>
            </div>

            {/* Services Links */}
            <div style={styles.linkSection}>
              <h4 style={styles.linkTitle}>Servicios</h4>
              <ul style={styles.linkList}>
                <li style={styles.linkItem}>
                  <button onClick={() => scrollToSection('servicios')} style={styles.link}>
                    Auditorías de Seguridad
                  </button>
                </li>
                <li style={styles.linkItem}>
                  <button onClick={() => scrollToSection('servicios')} style={styles.link}>
                    Respuesta a Incidentes
                  </button>
                </li>
                <li style={styles.linkItem}>
                  <button onClick={() => scrollToSection('servicios')} style={styles.link}>
                    Gestión de Vulnerabilidades
                  </button>
                </li>
                <li style={styles.linkItem}>
                  <button onClick={() => scrollToSection('cotizacion')} style={styles.link}>
                    Cotización
                  </button>
                </li>
              </ul>
            </div>

            {/* Company Links */}
            <div style={styles.linkSection}>
              <h4 style={styles.linkTitle}>Empresa</h4>
              <ul style={styles.linkList}>
                <li style={styles.linkItem}>
                  <button onClick={() => scrollToSection('inicio')} style={styles.link}>
                    Inicio
                  </button>
                </li>
                <li style={styles.linkItem}>
                  <button onClick={() => scrollToSection('servicios')} style={styles.link}>
                    Quiénes Somos
                  </button>
                </li>
                <li style={styles.linkItem}>
                  <button onClick={() => scrollToSection('metodologia')} style={styles.link}>
                    Metodología
                  </button>
                </li>
                <li style={styles.linkItem}>
                  <button onClick={() => scrollToSection('contacto')} style={styles.link}>
                    Contacto
                  </button>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div style={styles.linkSection}>
              <h4 style={styles.linkTitle}>Contacto</h4>
              <ul style={styles.linkList}>
                <li style={styles.contactItem}>
                  <Mail size={16} color="#00FFD1" />
                  <a href="mailto:nefila-df@protonmail.com" style={styles.contactLink}>
                    nefila-df@protonmail.com
                  </a>
                </li>
                <li style={styles.contactItem}>
                  <Phone size={16} color="#00FFD1" />
                  <a href="tel:+50762665041" style={styles.contactLink}>
                    +507 62665041
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div style={styles.copyright}>
            <p style={styles.copyrightText}>
              © {new Date().getFullYear()} Nefila Defense. Todos los derechos reservados.
            </p>
            <p style={styles.copyrightSubtext}>
              Protegiendo infraestructuras digitales con excelencia
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    background: '#000000',
    borderTop: '1px solid rgba(255, 255, 255, 0.1)',
  },
  ctaSection: {
    padding: '100px 7.6923%',
    background: '#000000',
    textAlign: 'center',
  },
  container: {
    maxWidth: '1400px',
    margin: '0 auto',
  },
  ctaTitle: {
    marginBottom: '40px',
    color: '#FFFFFF',
  },
  ctaButton: {
    fontSize: '20px',
    padding: '18px 36px',
  },
  footerContent: {
    padding: '80px 7.6923% 40px',
    background: '#000000',
    borderTop: '1px solid rgba(255, 255, 255, 0.1)',
  },
  footerGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '60px',
    marginBottom: '60px',
  },
  brandSection: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  footerLogo: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
  },
  logoImg: {
    height: '40px',
    width: 'auto',
    objectFit: 'contain',
  },
  logoText: {
    fontSize: '18px',
    fontWeight: 600,
    color: '#00FFD1',
    letterSpacing: '1px',
  },
  tagline: {
    fontSize: '16px',
    color: 'rgba(255, 255, 255, 0.85)',
    fontFamily: 'Fira Code, monospace',
  },
  iconWrapper: {
    marginTop: '10px',
  },
  linkSection: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  linkTitle: {
    fontSize: '18px',
    fontWeight: 600,
    color: '#FFFFFF',
    marginBottom: '8px',
    fontFamily: 'Fira Code, monospace',
  },
  linkList: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  },
  linkItem: {
    margin: 0,
  },
  link: {
    fontSize: '16px',
    color: '#4D4D4D',
    textDecoration: 'none',
    transition: 'color 0.3s ease',
    cursor: 'pointer',
    background: 'none',
    border: 'none',
    padding: 0,
    fontFamily: 'Fira Code, monospace',
    textAlign: 'left',
  },
  contactItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  },
  contactLink: {
    fontSize: '16px',
    color: '#00FFD1',
    textDecoration: 'none',
    transition: 'color 0.3s ease',
    fontFamily: 'Fira Code, monospace',
  },
  copyright: {
    textAlign: 'center',
    paddingTop: '40px',
    borderTop: '1px solid rgba(255, 255, 255, 0.1)',
  },
  copyrightText: {
    fontSize: '16px',
    color: 'rgba(255, 255, 255, 0.85)',
    marginBottom: '8px',
    fontFamily: 'Fira Code, monospace',
  },
  copyrightSubtext: {
    fontSize: '14px',
    color: '#4D4D4D',
    fontFamily: 'Fira Code, monospace',
  },
};

// Add hover styles
const styleSheet = document.createElement('style');
styleSheet.textContent = `
  footer button[style*="color: #4D4D4D"]:hover {
    color: #FFFFFF !important;
  }
  
  footer a[style*="color: #00FFD1"]:hover {
    color: #6FD2C0 !important;
  }
`;
document.head.appendChild(styleSheet);

export default Footer;
