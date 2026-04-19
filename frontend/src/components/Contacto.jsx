import React, { useState } from 'react';
import { Mail, Phone, MessageSquare, CheckCircle2 } from 'lucide-react';
import { enviarFormularioContacto, tiposServicio } from '../mock';

const Contacto = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    empresa: '',
    email: '',
    telefono: '',
    tipoServicio: '',
    mensaje: '',
  });
  
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const response = await enviarFormularioContacto(formData);
      if (response.success) {
        setSuccess(true);
        setFormData({
          nombre: '',
          empresa: '',
          email: '',
          telefono: '',
          tipoServicio: '',
          mensaje: '',
        });
        
        setTimeout(() => {
          setSuccess(false);
        }, 5000);
      }
    } catch (error) {
      console.error('Error al enviar formulario:', error);
    } finally {
      setLoading(false);
    }
  };

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
                <a href="mailto:contacto@nefiladefense.com" style={styles.contactLink}>
                  contacto@nefiladefense.com
                </a>
              </div>
            </div>

            <div style={styles.contactItem}>
              <Phone size={24} color="#00FFD1" />
              <div>
                <p style={styles.contactLabel}>Teléfono / WhatsApp</p>
                <a href="tel:+50768921269" style={styles.contactLink}>
                  +507 68921269
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
              <a href="tel:+50768921269" className="btn-red" style={styles.emergencyBtn}>
                Llamar Ahora
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div style={styles.formSection}>
            {success && (
              <div style={styles.successMessage}>
                <CheckCircle2 size={24} color="#00FFD1" />
                <div>
                  <p style={styles.successTitle}>Mensaje Enviado</p>
                  <p style={styles.successText}>Nos pondremos en contacto pronto</p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} style={styles.form}>
              <div style={styles.formGroup}>
                <label style={styles.label}>Nombre *</label>
                <input
                  type="text"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  required
                  style={styles.input}
                  placeholder="Tu nombre"
                />
              </div>

              <div style={styles.formGroup}>
                <label style={styles.label}>Empresa *</label>
                <input
                  type="text"
                  name="empresa"
                  value={formData.empresa}
                  onChange={handleChange}
                  required
                  style={styles.input}
                  placeholder="Nombre de tu empresa"
                />
              </div>

              <div style={styles.formGroup}>
                <label style={styles.label}>Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  style={styles.input}
                  placeholder="tu@email.com"
                />
              </div>

              <div style={styles.formGroup}>
                <label style={styles.label}>Teléfono *</label>
                <input
                  type="tel"
                  name="telefono"
                  value={formData.telefono}
                  onChange={handleChange}
                  required
                  style={styles.input}
                  placeholder="68921269"
                />
              </div>

              <div style={styles.formGroup}>
                <label style={styles.label}>Tipo de Servicio Requerido *</label>
                <select
                  name="tipoServicio"
                  value={formData.tipoServicio}
                  onChange={handleChange}
                  required
                  style={styles.select}
                >
                  <option value="">Seleccionar...</option>
                  {tiposServicio.map((tipo) => (
                    <option key={tipo} value={tipo}>{tipo}</option>
                  ))}
                </select>
              </div>

              <div style={{...styles.formGroup, gridColumn: '1 / -1'}}>
                <label style={styles.label}>Mensaje *</label>
                <textarea
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleChange}
                  required
                  style={styles.textarea}
                  rows="5"
                  placeholder="Cuéntanos sobre tus necesidades de seguridad..."
                />
              </div>

              <button 
                type="submit" 
                className="btn-primary"
                disabled={loading}
                style={{...styles.submitBtn, opacity: loading ? 0.6 : 1}}
              >
                {loading ? 'Enviando...' : 'Enviar Mensaje'}
              </button>
            </form>
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
  successMessage: {
    marginBottom: '32px',
    padding: '20px',
    background: 'rgba(0, 255, 209, 0.05)',
    border: '1px solid rgba(0, 255, 209, 0.3)',
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
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '24px',
  },
  formGroup: {
    display: 'flex',
    flexDirection: 'column',
  },
  label: {
    fontSize: '16px',
    fontWeight: 500,
    color: '#FFFFFF',
    marginBottom: '8px',
    fontFamily: 'Fira Code, monospace',
  },
  input: {
    padding: '12px 16px',
    background: '#000000',
    border: '1px solid rgba(255, 255, 255, 0.25)',
    borderRadius: '0px',
    color: '#FFFFFF',
    fontSize: '16px',
    fontFamily: 'Fira Code, monospace',
    transition: 'border-color 0.3s ease',
  },
  select: {
    padding: '12px 16px',
    background: '#000000',
    border: '1px solid rgba(255, 255, 255, 0.25)',
    borderRadius: '0px',
    color: '#FFFFFF',
    fontSize: '16px',
    fontFamily: 'Fira Code, monospace',
    transition: 'border-color 0.3s ease',
  },
  textarea: {
    padding: '12px 16px',
    background: '#000000',
    border: '1px solid rgba(255, 255, 255, 0.25)',
    borderRadius: '0px',
    color: '#FFFFFF',
    fontSize: '16px',
    fontFamily: 'Fira Code, monospace',
    resize: 'vertical',
    transition: 'border-color 0.3s ease',
  },
  submitBtn: {
    gridColumn: '1 / -1',
  },
};

// Add hover styles
const styleSheet = document.createElement('style');
styleSheet.textContent = `
  a[style*="color: #00FFD1"]:hover {
    color: #6FD2C0 !important;
  }
`;
document.head.appendChild(styleSheet);

export default Contacto;