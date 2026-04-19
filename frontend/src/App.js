import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
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

function App() {
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
