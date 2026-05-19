import React from 'react';

const REPORTS = [
  {
    id: "INC-2025-HTB-SILENTIUM",
    titulo: "Informe Ejecutivo de Seguridad — Silentium",
    fecha: "2025-05-19",
    resumen: "Compromiso completo de servidor Linux vía CVE-2025-8110 (Gogs RCE). Escalada a root mediante abuso de symlinks e inyección de sshCommand malicioso.",
    archivo: "Silentium_NIST_Report.html",
  },
  {
    id: "FOR-2026-BDO-QR-001",
    titulo: "Recuperación de Código QR Dañado",
    fecha: "2026-05-14",
    resumen: "CTF BDO Panamá: reconstrucción forense de un QR dañado y recuperación del payload.",
    archivo: "ForenseQR_BDO_CTF.html",
  },
];

const Reportes = () => {
  return (
    <section style={styles.page}>
      <div style={styles.container}>
        <h1 style={styles.title}>Reportes</h1>
        {REPORTS.length === 0 ? (
          <p style={styles.empty}>No hay reportes disponibles.</p>
        ) : (
          <div style={styles.grid}>
            {REPORTS.map((report) => (
              <a
                key={report.id}
                href={`${process.env.PUBLIC_URL}/reportes/${report.archivo}`}
                style={styles.card}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#00FFD1';
                  e.currentTarget.style.boxShadow = '0 0 20px rgba(0, 255, 209, 0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.25)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <span style={styles.id}>{report.id}</span>
                <h2 style={styles.cardTitle}>{report.titulo}</h2>
                <p style={styles.date}>{report.fecha}</p>
                <p style={styles.summary}>{report.resumen}</p>
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

const styles = {
  page: {
    background: '#000000',
    minHeight: '100vh',
    paddingTop: '100px',
    paddingBottom: '80px',
  },
  container: {
    maxWidth: '1400px',
    margin: '0 auto',
    padding: '0 7.6923%',
  },
  title: {
    color: '#FFFFFF',
    fontSize: '48px',
    fontWeight: 600,
    fontFamily: 'Fira Code, monospace',
    marginBottom: '48px',
    borderBottom: '1px solid rgba(255, 255, 255, 0.25)',
    paddingBottom: '24px',
  },
  empty: {
    color: '#4D4D4D',
    fontSize: '18px',
    fontFamily: 'Fira Code, monospace',
  },
  grid: {
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
  },
  card: {
    display: 'block',
    background: '#121212',
    border: '1px solid rgba(255, 255, 255, 0.25)',
    padding: '32px',
    textDecoration: 'none',
    transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
    cursor: 'pointer',
  },
  id: {
    color: '#00FFD1',
    fontSize: '12px',
    fontFamily: 'Fira Code, monospace',
    letterSpacing: '1px',
    display: 'block',
    marginBottom: '8px',
  },
  cardTitle: {
    color: '#FFFFFF',
    fontSize: '24px',
    fontWeight: 600,
    fontFamily: 'Fira Code, monospace',
    marginBottom: '8px',
  },
  date: {
    color: '#4D4D4D',
    fontSize: '14px',
    fontFamily: 'Fira Code, monospace',
    marginBottom: '16px',
  },
  summary: {
    color: 'rgba(255, 255, 255, 0.85)',
    fontSize: '16px',
    fontFamily: 'Fira Code, monospace',
    lineHeight: '1.6',
  },
};

export default Reportes;
