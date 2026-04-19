import React from 'react';
import { Mail, Phone, MessageSquare, ShieldAlert } from 'lucide-react';

const Contacto = () => {
  return (
    <section id="contacto" style={styles.section}>
      <div style={styles.container}>
        <div style={styles.header}>
          <h2 className="display-large" style={styles.title}>
            Contacto
          </h2>
          <div style={styles.divider}></div>
          <p className="body-large" style={styles.intro}>
            Está listo para proteger tu empresa? Contáctanos ahora
          </p>
        </div>

        <div style={styles.contentWrapper}>
          {/* Contact Information */}
          <div style={styles.infoSection}>
            <h3 className="heading-2" style={styles.infoTitle}>
              Información de Contacto
            </h3>
            
            <div style={styles.contactItem}>
              <Mail size={24} color="#00FFD1" />
              <div>
                <p style={styles.contactLabel}>Email</p>
                <a href="mailto:nefila-df@protonmail.com" style={styles.contactLink}>
                  nefila-df@protonmail.com
                </a>
              </div>
            </div>

            <div style={styles.contactItem}>
              <Phone size={24} color="#00FFD1" />
              <div>
                <p style={styles.contactLabel}>Teléfono / WhatsApp</p>
                <a href="tel:+50762665041" style={styles.contactLink}>
                  +507 62665041
                </a>
              </div>
            </div>

            <div style={styles.contactItem}>
              <MessageSquare size={24} color="#00FFD1" />
              <div>
                <p style={styles.contactLabel}>Horario de Atención</p>
                <p style={styles.contactText}>Lun - Vie: 8:00 AM - 6:00 PM</p>
                <p style={styles.contactText}>Emergencias: 24/7</p>
              </div>
            </div>

            <div style={styles.urgencyBox}>
              <h4 style={styles.urgencyTitle}>¿Incidente de Seguridad?</h4>
              <p style={styles.urgencyText}>
                Si estás experimentando un incidente de seguridad activo, 
                llámanos inmediatamente.
              </p>
              <a href="tel:+50762665041" className="btn-red" style={styles.emergencyBtn}>
                Llamar Ahora
              </a>
            </div>
          </div>

          {/* Contact Summary */}
          <div style={styles.formSection}>
            <div style={styles.successMessage}>
              <ShieldAlert size={24} color="#00FFD1" />
              <div>
                <p style={styles.successTitle}>Formulario desactivado temporalmente</p>
                <p style={styles.successText}>
                  Esta version publica no recopila datos en linea.
                </p>
                <p style={styles.successText}>
                  Contactanos por correo o telefono para atencion personalizada.
                </p>
              </div>
            </div>

            <div style={styles.form}>
              <div style={styles.staticCard}>
                <h4 style={styles.staticTitle}>Canales directos</h4>
                <p style={styles.staticText}>Correo: nefila-df@protonmail.com</p>
                <p style={styles.staticText}>Telefono: +507 62665041</p>
                <p style={styles.staticText}>Horario: Lun - Vie, 8:00 AM - 6:00 PM</p>
              </div>

              <div style={styles.staticCard}>
                <h4 style={styles.staticTitle}>Cobertura</h4>
                <p style={styles.staticText}>Pentesting y auditorias</p>
                <p style={styles.staticText}>Respuesta a incidentes 24/7</p>
                <p style={styles.staticText}>Fortalecimiento continuo de seguridad</p>
              </div>

              <div style={styles.actionsRow}>
                <a href="mailto:nefila-df@protonmail.com" className="btn-primary" style={styles.contactBtn}>
                  Escribir por Correo
                </a>
                <a href="https://wa.me/50762665041" target="_blank" rel="noreferrer" className="btn-secondary" style={styles.contactBtn}>
                  Abrir WhatsApp
                </a>
              </div>
            </div>
          </div>
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
    background: '#00FFD1',
    margin: '20px auto',
  },
  intro: {
    color: 'rgba(255, 255, 255, 0.85)',
  },
  contentWrapper: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
    gap: '60px',
  },
  infoSection: {
    display: 'flex',
    flexDirection: 'column',
    gap: '32px',
  },
  infoTitle: {
    marginBottom: '20px',
    color: '#FFFFFF',
  },
  contactItem: {
    display: 'flex',
    gap: '20px',
    alignItems: 'flex-start',
    padding: '18px',
    background: 'rgba(18, 18, 18, 0.92)',
    border: '1px solid rgba(0, 255, 209, 0.28)',
    boxShadow: '0 0 0 1px rgba(0, 255, 209, 0.12) inset',
  },
  contactLabel: {
    fontSize: '14px',
    color: 'rgba(255, 255, 255, 0.7)',
    marginBottom: '4px',
    fontFamily: 'Fira Code, monospace',
  },
  contactLink: {
    fontSize: '18px',
    color: '#00FFD1',
    textDecoration: 'none',
    transition: 'color 0.3s ease',
    fontFamily: 'Fira Code, monospace',
  },
  contactText: {
    fontSize: '16px',
    color: 'rgba(255, 255, 255, 0.85)',
    marginBottom: '4px',
    fontFamily: 'Fira Code, monospace',
  },
  urgencyBox: {
    padding: '32px',
    background: 'rgba(255, 0, 64, 0.12)',
    border: '1px solid rgba(255, 0, 64, 0.48)',
    boxShadow: '0 0 0 1px rgba(255, 0, 64, 0.15) inset, 0 16px 32px rgba(0, 0, 0, 0.4)',
    borderRadius: '0px',
    marginTop: '20px',
  },
  urgencyTitle: {
    fontSize: '20px',
    fontWeight: 600,
    color: '#FF0040',
    marginBottom: '12px',
    fontFamily: 'Fira Code, monospace',
  },
  urgencyText: {
    fontSize: '16px',
    color: 'rgba(255, 255, 255, 0.85)',
    marginBottom: '20px',
    lineHeight: '1.5',
    fontFamily: 'Fira Code, monospace',
  },
  emergencyBtn: {
    display: 'inline-flex',
  },
  formSection: {
    background: 'var(--panel-bg)',
    padding: '40px',
    border: '1px solid var(--panel-border)',
    boxShadow: '0 0 0 1px rgba(255, 255, 255, 0.12) inset, 0 20px 36px rgba(0, 0, 0, 0.45)',
    borderRadius: '0px',
  },
  successMessage: {
    marginBottom: '32px',
    padding: '20px',
    background: 'rgba(0, 255, 209, 0.1)',
    border: '1px solid rgba(0, 255, 209, 0.45)',
    boxShadow: '0 0 0 1px rgba(0, 255, 209, 0.14) inset',
    borderRadius: '0px',
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
  },
  successTitle: {
    fontSize: '18px',
    fontWeight: 600,
    color: '#00FFD1',
    marginBottom: '4px',
  },
  successText: {
    fontSize: '16px',
    color: 'rgba(255, 255, 255, 0.85)',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
  },
  staticCard: {
    background: 'rgba(0, 0, 0, 0.6)',
    border: '1px solid rgba(255, 255, 255, 0.35)',
    padding: '18px',
  },
  staticTitle: {
    fontSize: '18px',
    fontWeight: 600,
    marginBottom: '8px',
    color: '#FFFFFF',
    fontFamily: 'Fira Code, monospace',
  },
  staticText: {
    fontSize: '16px',
    color: 'var(--panel-text)',
    fontFamily: 'Fira Code, monospace',
    marginBottom: '6px',
  },
  actionsRow: {
    display: 'flex',
    gap: '14px',
    flexWrap: 'wrap',
  },
  contactBtn: {
    minWidth: '220px',
  },
};

export default Contacto;