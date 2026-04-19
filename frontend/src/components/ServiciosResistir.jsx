import React from 'react';
import { Zap, Target, FileSearch, Play } from 'lucide-react';
import { serviciosResistir } from '../mock';

const iconMap = {
  0: <Zap size={28} />,
  1: <Target size={28} />,
  2: <FileSearch size={28} />,
  3: <Play size={28} />,
};

const ServiciosResistir = () => {
  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <div style={styles.header}>
          <div style={styles.iconTitle}>
            <Zap size={48} color="#FF0040" />
          </div>
          <h2 className="display-large" style={styles.title}>
            Resistir - Respuesta inmediata ante amenazas reales
          </h2>
          <div style={styles.divider}></div>
          <p className="body-large" style={styles.intro}>
            Disponibilidad, rapidez y contención efectiva de incidentes.
          </p>
        </div>

        <div style={styles.servicesGrid}>
          {serviciosResistir.map((servicio, index) => (
            <div key={servicio.id} style={styles.serviceCard} className="dark-hover dark-transition">
              <div style={styles.cardIcon}>
                {iconMap[index]}
              </div>
              <h3 className="heading-3" style={styles.serviceTitle}>
                {servicio.titulo}
              </h3>
              <p className="body-small" style={styles.serviceDesc}>
                {servicio.descripcion}
              </p>
              <div style={styles.urgentBadge}>
                RESPUESTA 24/7
              </div>
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
  iconTitle: {
    marginBottom: '24px',
    display: 'flex',
    justifyContent: 'center',
  },
  title: {
    marginBottom: '20px',
    maxWidth: '1000px',
    margin: '0 auto 20px',
  },
  divider: {
    width: '100px',
    height: '3px',
    background: '#FF0040',
    margin: '20px auto',
  },
  intro: {
    color: 'rgba(255, 255, 255, 0.85)',
    maxWidth: '800px',
    margin: '0 auto',
  },
  servicesGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
    gap: '30px',
  },
  serviceCard: {
    padding: '32px 24px',
    background: 'var(--panel-bg)',
    border: '1px solid var(--panel-border-red)',
    boxShadow: '0 0 0 1px rgba(255, 0, 64, 0.18) inset, 0 18px 34px rgba(0, 0, 0, 0.45)',
    borderRadius: '0px',
    cursor: 'pointer',
    position: 'relative',
  },
  cardIcon: {
    color: '#FF0040',
    marginBottom: '20px',
  },
  serviceTitle: {
    marginBottom: '12px',
    color: '#FFFFFF',
  },
  serviceDesc: {
    color: 'var(--panel-text)',
    lineHeight: '1.65',
    marginBottom: '20px',
  },
  urgentBadge: {
    display: 'inline-block',
    padding: '6px 12px',
    background: 'rgba(255, 0, 64, 0.16)',
    border: '1px solid #FF0040',
    color: '#FFD7E0',
    fontSize: '12px',
    fontWeight: 600,
    letterSpacing: '1px',
  },
};

export default ServiciosResistir;