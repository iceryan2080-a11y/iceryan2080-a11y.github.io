import React from 'react';
import { Target, Layers, Lightbulb, TrendingUp } from 'lucide-react';

const QuienesSomos = () => {
  const valores = [
    {
      icon: <Target size={32} color="#00FFD1" />,
      titulo: 'Enfoque Práctico',
      descripcion: 'Soluciones reales para amenazas reales'
    },
    {
      icon: <Layers size={32} color="#00FFD1" />,
      titulo: 'Metodologías por Capas',
      descripcion: 'Análisis profundo en cada nivel de seguridad'
    },
    {
      icon: <Lightbulb size={32} color="#00FFD1" />,
      titulo: 'Experiencia Real',
      descripcion: 'Proyectos ejecutados en entornos críticos'
    },
    {
      icon: <TrendingUp size={32} color="#00FFD1" />,
      titulo: 'Visión Empresarial',
      descripcion: 'Seguridad alineada con objetivos de negocio'
    },
  ];

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <div style={styles.header}>
          <h2 className="display-large" style={styles.title}>
            ¿Quiénes Somos?
          </h2>
          <div style={styles.divider}></div>
        </div>

        <p className="body-large" style={styles.description}>
          Nefila Defense es una empresa especializada en ciberseguridad que combina 
          técnicas ofensivas y defensivas para identificar, mitigar y responder a amenazas digitales.
        </p>
        
        <p className="body-large" style={styles.description}>
          Nuestro enfoque se basa en el análisis profundo, el pensamiento crítico y la aplicación 
          de tecnologías modernas para anticiparnos a los ataques antes de que ocurran.
        </p>

        <div style={styles.valoresGrid}>
          {valores.map((valor, index) => (
            <div key={index} style={styles.valorCard} className="dark-hover dark-transition">
              <div style={styles.iconBox}>
                {valor.icon}
              </div>
              <h3 className="heading-3" style={styles.valorTitulo}>
                {valor.titulo}
              </h3>
              <p className="body-small" style={styles.valorDesc}>
                {valor.descripcion}
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
    position: 'relative',
  },
  container: {
    maxWidth: '1400px',
    margin: '0 auto',
  },
  header: {
    textAlign: 'center',
    marginBottom: '60px',
  },
  title: {
    marginBottom: '20px',
  },
  divider: {
    width: '100px',
    height: '3px',
    background: '#00FFD1',
    margin: '0 auto',
  },
  description: {
    textAlign: 'center',
    maxWidth: '900px',
    margin: '0 auto 40px',
    lineHeight: '1.8',
  },
  valoresGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '40px',
    marginTop: '80px',
  },
  valorCard: {
    padding: '40px 30px',
    background: 'var(--panel-bg)',
    border: '1px solid var(--panel-border)',
    boxShadow: '0 0 0 1px rgba(0, 255, 209, 0.14) inset, 0 16px 30px rgba(0, 0, 0, 0.42)',
    borderRadius: '0px',
    textAlign: 'center',
    cursor: 'pointer',
  },
  iconBox: {
    marginBottom: '24px',
    display: 'flex',
    justifyContent: 'center',
  },
  valorTitulo: {
    marginBottom: '12px',
    color: '#FFFFFF',
  },
  valorDesc: {
    color: 'var(--panel-text)',
    lineHeight: '1.6',
  },
};

export default QuienesSomos;