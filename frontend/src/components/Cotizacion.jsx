import React from 'react';
import { Calculator, ShieldCheck, Zap, Target } from 'lucide-react';

const Cotizacion = () => {
  return (
    <section id="cotizacion" style={styles.section}>
      <div style={styles.container}>
        <div style={styles.header}>
          <div style={styles.iconTitle}>
            <Calculator size={48} color="#00FFD1" />
          </div>
          <h2 className="display-large" style={styles.title}>
            Solicitar Cotización
          </h2>
          <div style={styles.divider}></div>
          <p className="body-large" style={styles.intro}>
            Estamos preparando el sistema de cotizaciones en linea. Mientras tanto,
            conoce las lineas de servicio y contactanos por correo o WhatsApp.
          </p>
        </div>

        <div style={styles.noticeMessage}>
          <ShieldCheck size={24} color="#00FFD1" />
          <div>
            <p style={styles.noticeTitle}>Cotizacion temporalmente manual</p>
            <p style={styles.noticeText}>
              En esta version publica no almacenamos datos ni formularios.
            </p>
            <p style={styles.noticeText}>
              Escribenos a nefila-df@protonmail.com para recibir una propuesta personalizada.
            </p>
          </div>
        </div>

        <div style={styles.cardsGrid}>
          <div style={styles.infoCard} className="dark-transition dark-hover">
            <div style={styles.infoIcon}><Target size={24} color="#00FFD1" /></div>
            <h3 className="heading-3" style={styles.cardTitle}>Diagnostico Inicial</h3>
            <p className="body-small" style={styles.cardText}>
              Revisamos contexto tecnico, industria y nivel de exposicion para definir un plan realista.
            </p>
          </div>

          <div style={styles.infoCard} className="dark-transition dark-hover">
            <div style={styles.infoIcon}><Zap size={24} color="#00FFD1" /></div>
            <h3 className="heading-3" style={styles.cardTitle}>Implementacion</h3>
            <p className="body-small" style={styles.cardText}>
              Ejecutamos auditorias y controles priorizados segun impacto, urgencia y presupuesto.
            </p>
          </div>
        </div>

        <div style={styles.actionsRow}>
          <a href="mailto:nefila-df@protonmail.com" className="btn-primary" style={styles.actionBtn}>
            Solicitar por Correo
          </a>
          <a href="https://wa.me/50762665041" target="_blank" rel="noreferrer" className="btn-secondary" style={styles.actionBtn}>
            Solicitar por WhatsApp
          </a>
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
    maxWidth: '1000px',
    margin: '0 auto',
  },
  header: {
    textAlign: 'center',
    marginBottom: '60px',
  },
  iconTitle: {
    marginBottom: '24px',
    display: 'flex',
    justifyContent: 'center',
  },
  title: {
    marginBottom: '20px',
  },
  divider: {
    width: '100px',
    height: '3px',
    background: '#00FFD1',
    margin: '20px auto',
  },
  intro: {
    color: 'rgba(255, 255, 255, 0.85)',
  },
  noticeMessage: {
    marginBottom: '40px',
    padding: '24px',
    background: 'rgba(0, 255, 209, 0.1)',
    border: '1px solid rgba(0, 255, 209, 0.45)',
    boxShadow: '0 0 0 1px rgba(0, 255, 209, 0.14) inset',
    borderRadius: '0px',
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
  },
  noticeTitle: {
    fontSize: '18px',
    fontWeight: 600,
    color: '#00FFD1',
    marginBottom: '4px',
  },
  noticeText: {
    fontSize: '16px',
    color: 'rgba(255, 255, 255, 0.85)',
    marginBottom: '4px',
  },
  cardsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '24px',
    marginBottom: '32px',
  },
  infoCard: {
    background: 'var(--panel-bg)',
    border: '1px solid var(--panel-border-green)',
    boxShadow: '0 0 0 1px rgba(0, 255, 209, 0.14) inset, 0 18px 34px rgba(0, 0, 0, 0.45)',
    padding: '28px',
    borderRadius: '0px',
  },
  infoIcon: {
    marginBottom: '14px',
  },
  cardTitle: {
    color: '#FFFFFF',
    marginBottom: '10px',
  },
  cardText: {
    color: 'var(--panel-text)',
    lineHeight: '1.6',
  },
  actionsRow: {
    display: 'flex',
    gap: '16px',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  actionBtn: {
    minWidth: '250px',
  },
};

export default Cotizacion;