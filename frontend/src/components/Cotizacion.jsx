import React from 'react';
import { Calculator, Mail, Phone, MessageSquare } from 'lucide-react';

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
            Recibe una propuesta personalizada según las necesidades de tu empresa
          </p>
        </div>

        <div style={styles.form}>
          <div style={styles.staticIntro}>
            <h3 className="heading-2" style={styles.staticTitle}>
              Cotiza tu proyecto directamente
            </h3>
            <p className="body-large" style={styles.staticText}>
              Esta es una página estática. Escríbenos y te respondemos con una
              propuesta personalizada.
            </p>
          </div>

          <div style={styles.contactList}>
            <div style={styles.contactItem}>
              <Mail size={22} color="#00FFD1" />
              <div>
                <p style={styles.contactLabel}>Email</p>
                <a href="mailto:nefila-df@protonmail.com" style={styles.contactLink}>
                  nefila-df@protonmail.com
                </a>
              </div>
            </div>

            <div style={styles.contactItem}>
              <Phone size={22} color="#00FFD1" />
              <div>
                <p style={styles.contactLabel}>Teléfono / WhatsApp</p>
                <a href="https://wa.me/50762665041" style={styles.contactLink}>
                  +507 6266 5041
                </a>
              </div>
            </div>

            <div style={styles.contactItem}>
              <MessageSquare size={22} color="#00FFD1" />
              <div>
                <p style={styles.contactLabel}>Tiempo de respuesta</p>
                <p style={styles.contactText}>Lun - Vie: 8:00 AM - 6:00 PM</p>
              </div>
            </div>
          </div>

          <a
            href="https://wa.me/50762665041"
            className="btn-primary"
            style={styles.submitBtn}
          >
            Escribir por WhatsApp
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
  form: {
    background: '#121212',
    padding: '40px',
    border: '1px solid rgba(255, 255, 255, 0.25)',
    borderRadius: '0px',
  },
  staticIntro: {
    marginBottom: '28px',
  },
  staticTitle: {
    color: '#FFFFFF',
    marginBottom: '12px',
  },
  staticText: {
    color: 'rgba(255, 255, 255, 0.85)',
  },
  contactList: {
    display: 'grid',
    gap: '20px',
    marginBottom: '28px',
  },
  contactItem: {
    display: 'flex',
    gap: '16px',
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
  submitBtn: {
    width: '100%',
    marginTop: '20px',
  },
};

export default Cotizacion;
