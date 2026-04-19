import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { metodologia } from '../mock';

const Metodologia = () => {
  return (
    <section id="metodologia" style={styles.section}>
      <div style={styles.container}>
        <div style={styles.header}>
          <h2 className="display-large" style={styles.title}>
            Metodología de Trabajo
          </h2>
          <div style={styles.divider}></div>
          <p className="body-large" style={styles.intro}>
            Un proceso claro y sistemático para proteger tu infraestructura digital
          </p>
        </div>

        <div style={styles.metodologiaGrid}>
          {metodologia.map((paso) => (
            <div key={paso.paso} style={styles.pasoCard} className="dark-transition">
              <div style={styles.pasoNumber}>
                {paso.paso}
              </div>
              <div style={styles.checkIcon}>
              <CheckCircle2 size={24} color="#7F00B2" />
              </div>
              <h3 className="heading-3" style={styles.pasoTitulo}>
                {paso.titulo}
              </h3>
              <p className="body-small" style={styles.pasoDesc}>
                {paso.descripcion}
              </p>
              {paso.paso < metodologia.length && (
                <div style={styles.arrow}>↓</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const styles = {
  section: {
    padding: '100px 7.6923%',
    background: '#000000',
    borderTop: '1px solid rgba(255, 255, 255, 0.1)',
  },
  container: {
    maxWidth: '1400px',
    margin: '0 auto',
  },
  header: {
    textAlign: 'center',
    marginBottom: '80px',
  },
  title: {
    marginBottom: '20px',
  },
   divider: {
     width: '100px',
     height: '3px',
     background: '#7F00B2',
     margin: '20px auto',
   },
  intro: {
    color: 'rgba(255, 255, 255, 0.85)',
    maxWidth: '800px',
    margin: '0 auto',
  },
  metodologiaGrid: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0',
    maxWidth: '800px',
    margin: '0 auto',
  },
   pasoCard: {
     padding: '40px',
     background: 'var(--panel-bg)',
     border: '1px solid rgba(127, 0, 178, 0.6)',
     boxShadow: '0 0 0 1px rgba(127, 0, 178, 0.18) inset, 0 18px 32px rgba(0, 0, 0, 0.45)',
     borderRadius: '0px',
     position: 'relative',
     marginBottom: '20px',
   },
   pasoNumber: {
     position: 'absolute',
     top: '20px',
     right: '20px',
     width: '50px',
     height: '50px',
     background: '#7F00B2',
     color: '#FFFFFF',
     display: 'flex',
     alignItems: 'center',
     justifyContent: 'center',
     fontSize: '24px',
     fontWeight: 700,
     borderRadius: '0px',
   },
  checkIcon: {
    marginBottom: '16px',
  },
  pasoTitulo: {
    marginBottom: '12px',
    color: '#FFFFFF',
  },
  pasoDesc: {
    color: 'var(--panel-text)',
    lineHeight: '1.6',
  },
   arrow: {
     position: 'absolute',
     bottom: '-30px',
     left: '50%',
     transform: 'translateX(-50%)',
     fontSize: '32px',
     color: '#7F00B2',
   },
};

export default Metodologia;
