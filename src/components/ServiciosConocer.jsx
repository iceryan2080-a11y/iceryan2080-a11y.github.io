import React from 'react';
import { Search, Users, Globe, Smartphone, Cloud, Cpu, Code } from 'lucide-react';
import { serviciosConocer } from '../mock';

const iconMap = {
  0: <Search size={28} />,
  1: <Users size={28} />,
  2: <Globe size={28} />,
  3: <Smartphone size={28} />,
  4: <Cloud size={28} />,
  5: <Cpu size={28} />,
  6: <Code size={28} />,
};

const ServiciosConocer = () => {
  return (
    <section id="servicios" style={styles.section}>
      <div style={styles.container}>
        <div style={styles.header}>
          <div style={styles.iconTitle}>
            <Search size={48} color="#00FFD1" />
          </div>
          <h2 className="display-large" style={styles.title}>
            Conocer - Identificamos riesgos antes de que se conviertan en ataques
          </h2>
          <div style={styles.divider}></div>
          <p className="body-large" style={styles.intro}>
            Estas auditorías permiten entender la superficie de ataque real de tu organización.
          </p>
        </div>

        <div style={styles.servicesGrid}>
          {serviciosConocer.map((servicio, index) => (
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
    background: '#00FFD1',
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
    background: '#121212',
    border: '1px solid rgba(0, 255, 209, 0.2)',
    borderRadius: '0px',
    cursor: 'pointer',
  },
  cardIcon: {
    color: '#00FFD1',
    marginBottom: '20px',
  },
  serviceTitle: {
    marginBottom: '12px',
    color: '#FFFFFF',
  },
  serviceDesc: {
    color: 'rgba(255, 255, 255, 0.85)',
  },
};

export default ServiciosConocer;