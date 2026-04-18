import React, { useState } from 'react';
import { Calculator, CheckCircle2 } from 'lucide-react';
import { enviarCotizacion } from '../mock';

const Cotizacion = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    empresa: '',
    email: '',
    telefono: '',
    tipoServicio: '',
    empleados: '',
    presupuesto: '',
    descripcion: '',
  });
  
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [cotizacionId, setCotizacionId] = useState('');

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
      const response = await enviarCotizacion(formData);
      if (response.success) {
        setSuccess(true);
        setCotizacionId(response.cotizacionId);
        setFormData({
          nombre: '',
          empresa: '',
          email: '',
          telefono: '',
          tipoServicio: '',
          empleados: '',
          presupuesto: '',
          descripcion: '',
        });
        
        setTimeout(() => {
          setSuccess(false);
          setCotizacionId('');
        }, 5000);
      }
    } catch (error) {
      console.error('Error al enviar cotización:', error);
    } finally {
      setLoading(false);
    }
  };

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

        {success && (
          <div style={styles.successMessage}>
            <CheckCircle2 size={24} color="#00FFD1" />
            <div>
              <p style={styles.successTitle}>Cotización Recibida</p>
              <p style={styles.successText}>ID: {cotizacionId}</p>
              <p style={styles.successText}>Nos pondremos en contacto en las próximas 24 horas</p>
            </div>
          </div>
        )}

        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.formGrid}>
            <div style={styles.formGroup}>
              <label style={styles.label}>Nombre Completo *</label>
              <input
                type="text"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                required
                style={styles.input}
                placeholder="Juan Pérez"
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
                placeholder="contacto@empresa.com"
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
              <label style={styles.label}>Tipo de Servicio *</label>
              <select
                name="tipoServicio"
                value={formData.tipoServicio}
                onChange={handleChange}
                required
                style={styles.select}
              >
                <option value="">Seleccionar...</option>
                <option value="pentesting">Pentesting</option>
                <option value="auditoria">Auditoría de Seguridad</option>
                <option value="respuesta">Respuesta a Incidentes</option>
                <option value="gestion">Gestión de Vulnerabilidades</option>
                <option value="edr">EDR/XDR Management</option>
                <option value="threat">Threat Intelligence</option>
                <option value="otro">Otro</option>
              </select>
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label}>Número de Empleados</label>
              <select
                name="empleados"
                value={formData.empleados}
                onChange={handleChange}
                style={styles.select}
              >
                <option value="">Seleccionar...</option>
                <option value="1-10">1-10</option>
                <option value="11-50">11-50</option>
                <option value="51-200">51-200</option>
                <option value="201-500">201-500</option>
                <option value="500+">500+</option>
              </select>
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label}>Presupuesto Estimado</label>
              <select
                name="presupuesto"
                value={formData.presupuesto}
                onChange={handleChange}
                style={styles.select}
              >
                <option value="">Seleccionar...</option>
                <option value="5k-10k">$5,000 - $10,000</option>
                <option value="10k-25k">$10,000 - $25,000</option>
                <option value="25k-50k">$25,000 - $50,000</option>
                <option value="50k+">$50,000+</option>
                <option value="consultar">Consultar</option>
              </select>
            </div>

            <div style={{...styles.formGroup, gridColumn: '1 / -1'}}>
              <label style={styles.label}>Descripción del Proyecto</label>
              <textarea
                name="descripcion"
                value={formData.descripcion}
                onChange={handleChange}
                style={styles.textarea}
                rows="5"
                placeholder="Describe brevemente tus necesidades de seguridad..."
              />
            </div>
          </div>

          <button 
            type="submit" 
            className="btn-primary"
            disabled={loading}
            style={{...styles.submitBtn, opacity: loading ? 0.6 : 1}}
          >
            {loading ? 'Enviando...' : 'Solicitar Cotización'}
          </button>
        </form>
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
  successMessage: {
    marginBottom: '40px',
    padding: '24px',
    background: 'rgba(0, 255, 209, 0.05)',
    border: '1px solid rgba(0, 255, 209, 0.3)',
    borderRadius: '0px',
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
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
    marginBottom: '4px',
  },
  form: {
    background: '#121212',
    padding: '40px',
    border: '1px solid rgba(255, 255, 255, 0.25)',
    borderRadius: '0px',
  },
  formGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '24px',
    marginBottom: '32px',
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
    width: '100%',
    marginTop: '20px',
  },
};

// Add focus styles
const styleSheet = document.createElement('style');
styleSheet.textContent = `
  input:focus, select:focus, textarea:focus {
    outline: none;
    border-color: #00FFD1 !important;
  }
`;
document.head.appendChild(styleSheet);

export default Cotizacion;