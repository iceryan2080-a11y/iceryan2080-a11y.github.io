import React from 'react';
import { Shield, ArrowRight, AlertTriangle } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" style={styles.hero}>
      <div style={styles.container}>
        <div style={styles.content}>
          <div style={styles.iconWrapper}>
            <Shield size={80} color="#00FFD1" strokeWidth={1.5} />
          </div>
          
          <h1 className="display-huge" style={styles.title}>
            Nefila Defense
          </h1>
          
          <h2 className="display-medium" style={styles.subtitle}>
            Tejiendo defensa, atrapando amenazas
          </h2>
          
          <p className="body-large" style={styles.description}>
            Protegemos infraestructuras digitales mediante auditorías avanzadas,
            <br />
            gestión de vulnerabilidades y respuesta a incidentes.
          </p>
          
          <div style={styles.buttonGroup}>
            <button 
              className="btn-primary"
              onClick={() => scrollToSection('cotizacion')}
            >
              Solicitar Auditoría
              <ArrowRight size={20} />
            </button>
            
            <button 
              className="btn-secondary"
              onClick={() => scrollToSection('contacto')}
            >
              Contactar Ahora
            </button>
          </div>

          {/* Decorative network visualization */}
          <div style={styles.networkWrapper}>
            <div style={styles.networkNode}></div>
            <div style={{...styles.networkNode, left: '30%', animationDelay: '0.5s'}}></div>
            <div style={{...styles.networkNode, left: '60%', animationDelay: '1s'}}></div>
            <div style={{...styles.networkNode, left: '85%', animationDelay: '1.5s'}}></div>
          </div>
        </div>

        {/* Alert indicator */}
        <div style={styles.alertBox}>
          <AlertTriangle size={24} color="#FF0040" />
          <div>
            <p style={styles.alertTitle}>¿Tu empresa está protegida?</p>
            <p style={styles.alertText}>El 43% de ciberataques afectan a pequeñas empresas</p>
          </div>
        </div>
      </div>
    </section>
  );
};

const styles = {
  hero: {
    minHeight: '100vh',
    background: '#000000',
    position: 'relative',
    paddingTop: '80px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  container: {
    maxWidth: '1400px',
    margin: '0 auto',
    padding: '100px 7.6923%',
    width: '100%',
  },
  content: {
    textAlign: 'center',
    position: 'relative',
    zIndex: 2,
  },
  iconWrapper: {
    marginBottom: '40px',
    display: 'flex',
    justifyContent: 'center',
    animation: 'pulse 3s ease-in-out infinite',
  },
  title: {
    marginBottom: '20px',
    textTransform: 'uppercase',
    letterSpacing: '2px',
  },
  subtitle: {
    marginBottom: '30px',
    color: '#00FFD1',
  },
  description: {
    marginBottom: '60px',
    maxWidth: '800px',
    margin: '0 auto 60px',
  },
  buttonGroup: {
    display: 'flex',
    gap: '20px',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  networkWrapper: {
    position: 'absolute',
    bottom: '20%',
    left: '0',
    width: '100%',
    height: '2px',
    background: 'rgba(0, 255, 209, 0.1)',
    zIndex: 1,
  },
  networkNode: {
    position: 'absolute',
    width: '12px',
    height: '12px',
    background: '#00FFD1',
    borderRadius: '50%',
    boxShadow: '0 0 10px rgba(0, 255, 209, 0.5)',
    animation: 'moveNode 3s ease-in-out infinite',
    left: '10%',
    top: '-5px',
  },
  alertBox: {
    marginTop: '80px',
    padding: '24px',
    background: 'rgba(255, 0, 64, 0.05)',
    border: '1px solid rgba(255, 0, 64, 0.3)',
    borderRadius: '0px',
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
    maxWidth: '600px',
    margin: '80px auto 0',
  },
  alertTitle: {
    fontSize: '18px',
    fontWeight: 600,
    color: '#FF0040',
    marginBottom: '4px',
  },
  alertText: {
    fontSize: '16px',
    color: 'rgba(255, 255, 255, 0.85)',
  },
};

// Add animations
const styleSheet = document.createElement('style');
styleSheet.textContent = `
  @keyframes pulse {
    0%, 100% { opacity: 1; transform: scale(1); }
    50% { opacity: 0.7; transform: scale(1.05); }
  }
  
  @keyframes moveNode {
    0% { left: 10%; }
    50% { left: 90%; }
    100% { left: 10%; }
  }
  
  @media (max-width: 768px) {
    .display-huge {
      font-size: 42px;
    }
    .display-medium {
      font-size: 28px;
    }
  }
`;
document.head.appendChild(styleSheet);

export default Hero;