import React from 'react';
import { Mail, Phone, MessageSquare } from 'lucide-react';

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
                <a href="https://wa.me/50762665041" style={styles.contactLink}>
                  +507 6266 5041
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
                escríbenos directamente por WhatsApp.
              </p>
              <a href="https://wa.me/50762665041" className="btn-red" style={styles.emergencyBtn}>
                Escribir Ahora
              </a>
            </div>
          </div>

          <div style={styles.formSection}>
            <h3 className="heading-2" style={styles.formTitle}>
              Escríbenos y te respondemos
            </h3>
            <p style={styles.formText}>
              Esta es una página estática. Usa los canales directos para iniciar
              tu solicitud.
            </p>
            <div style={styles.formActions}>
              <a href="https://wa.me/50762665041" className="btn-primary">
                WhatsApp directo
              </a>
              <a href="mailto:nefila-df@protonmail.com" className="btn-red">
                Enviar Email
              </a>
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
  },
  contactLabel: {
    fontSize: '14px',
    color: '#4D4D4D',
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
    background: 'rgba(255, 0, 64, 0.05)',
    border: '1px solid rgba(255, 0, 64, 0.3)',
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
    background: '#121212',
    padding: '40px',
    border: '1px solid rgba(255, 255, 255, 0.25)',
    borderRadius: '0px',
  },
  formTitle: {
    marginBottom: '16px',
    color: '#FFFFFF',
  },
  formText: {
    marginBottom: '28px',
    color: 'rgba(255, 255, 255, 0.85)',
  },
  formActions: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '16px',
  },
};

// Add hover styles
const styleSheet = document.createElement('style');
styleSheet.textContent = `
  a[style*="color: #00FFD1"]:hover {
    color: #6FD2C0 !important;
  }
  a.btn-red:hover {
    color: #FFFFFF !important;
  }
`;
document.head.appendChild(styleSheet);

export default Contacto;
