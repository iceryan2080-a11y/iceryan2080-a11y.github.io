import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import axios from "axios";
import Header from "./components/Header";
import Hero from "./components/Hero";
import QuienesSomos from "./components/QuienesSomos";
import ServiciosConocer from "./components/ServiciosConocer";
import ServiciosFortalecer from "./components/ServiciosFortalecer";
import ServiciosResistir from "./components/ServiciosResistir";
import Metodologia from "./components/Metodologia";
import Cotizacion from "./components/Cotizacion";
import Contacto from "./components/Contacto";
import Footer from "./components/Footer";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

function App() {
  // Test backend connection
  useEffect(() => {
    const testBackend = async () => {
      try {
        const response = await axios.get(`${API}/`);
        console.log('Backend conectado:', response.data.message);
      } catch (e) {
        console.error('Error conectando con backend:', e);
      }
    };
    testBackend();
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <main>
          <Hero />
          <QuienesSomos />
          <ServiciosConocer />
          <ServiciosFortalecer />
          <ServiciosResistir />
          <Metodologia />
          <Cotizacion />
          <Contacto />
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
