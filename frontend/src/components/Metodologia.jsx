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
                <CheckCircle2 size={24} color="rgb(127, 0, 178)" />
              </div>
              <h3 className="heading-3" style={styles.pasoTitulo}>
                {paso.titulo}
              </h3>
              <p className="body-small" style={styles.pasoDesc}>
                {paso.descripcion}
              </p>
              {paso.paso < metodologia.length && (
                <div style={styles.arrow}>→</div>
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
    background: 'rgb(127, 0, 178)',
    margin: '20px auto',
  },
  intro: {
    color: 'rgba(255, 255, 255, 0.85)',
    maxWidth: '800px',
    margin: '0 auto',
  },
  metodologiaGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
    gap: '24px',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  pasoCard: {
    padding: '40px',
    background: '#121212',
    border: '1px solid rgba(127, 0, 178, 0.35)',
    borderRadius: '0px',
    position: 'relative',
    marginBottom: '0',
  },
  pasoNumber: {
    position: 'absolute',
    top: '20px',
    right: '20px',
    width: '50px',
    height: '50px',
    background: 'rgb(127, 0, 178)',
    color: '#000000',
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
    color: 'rgba(255, 255, 255, 0.85)',
  },
  arrow: {
    position: 'absolute',
    right: '-24px',
    top: '50%',
    transform: 'translateY(-50%)',
    fontSize: '28px',
    color: 'rgb(127, 0, 178)',
  },
};

export default Metodologia;
