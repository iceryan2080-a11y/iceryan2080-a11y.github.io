import React from "react";
import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";
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
import Reportes from "./components/Reportes";

function LandingPage() {
  return (
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
  );
}

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/reportes" element={<Reportes />} />
        </Routes>
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
