"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaArrowLeft, FaLock, FaStar, FaCheck, FaTimes } from "react-icons/fa";

interface ElementoContrasena {
  id: number;
  tipo: string;
  valor: string;
  puntos: number;
  descripcion: string;
}

export default function CreadorContrasenas() {
  const [contrasenaActual, setContrasenaActual] = useState<string[]>([]);
  const [puntuacion, setPuntuacion] = useState(0);
  const [mensaje, setMensaje] = useState("");
  const [nivelSeguridad, setNivelSeguridad] = useState(0);

  const elementosDisponibles: ElementoContrasena[] = [
    {
      id: 1,
      tipo: "letra-mayuscula",
      valor: "A",
      puntos: 10,
      descripcion: "Letras mayúsculas (A-Z)"
    },
    {
      id: 2,
      tipo: "letra-minuscula",
      valor: "a",
      puntos: 10,
      descripcion: "Letras minúsculas (a-z)"
    },
    {
      id: 3,
      tipo: "numero",
      valor: "1",
      puntos: 15,
      descripcion: "Números (0-9)"
    },
    {
      id: 4,
      tipo: "simbolo",
      valor: "@",
      puntos: 20,
      descripcion: "Símbolos especiales (@, #, $, etc.)"
    },
    {
      id: 5,
      tipo: "longitud",
      valor: "···",
      puntos: 5,
      descripcion: "Longitud (más caracteres = más segura)"
    }
  ];

  const agregarElemento = (elemento: ElementoContrasena) => {
    if (contrasenaActual.length >= 12) {
      setMensaje("¡La contraseña ya es suficientemente larga!");
      return;
    }

    let nuevoElemento = elemento.valor;
    if (elemento.tipo === "letra-mayuscula") {
      nuevoElemento = String.fromCharCode(65 + Math.floor(Math.random() * 26));
    } else if (elemento.tipo === "letra-minuscula") {
      nuevoElemento = String.fromCharCode(97 + Math.floor(Math.random() * 26));
    } else if (elemento.tipo === "numero") {
      nuevoElemento = Math.floor(Math.random() * 10).toString();
    } else if (elemento.tipo === "simbolo") {
      const simbolos = "@#$%&*!?";
      nuevoElemento = simbolos[Math.floor(Math.random() * simbolos.length)];
    }

    setContrasenaActual([...contrasenaActual, nuevoElemento]);
    calcularPuntuacion([...contrasenaActual, nuevoElemento]);
  };

  const calcularPuntuacion = (contrasena: string[]) => {
    let puntos = 0;
    let tieneMayuscula = false;
    let tieneMinuscula = false;
    let tieneNumero = false;
    let tieneSimbolo = false;

    contrasena.forEach(char => {
      if (/[A-Z]/.test(char)) tieneMayuscula = true;
      if (/[a-z]/.test(char)) tieneMinuscula = true;
      if (/[0-9]/.test(char)) tieneNumero = true;
      if (/[@#$%&*!?]/.test(char)) tieneSimbolo = true;
    });

    if (tieneMayuscula) puntos += 10;
    if (tieneMinuscula) puntos += 10;
    if (tieneNumero) puntos += 15;
    if (tieneSimbolo) puntos += 20;
    puntos += contrasena.length * 5;

    setPuntuacion(puntos);
    
    // Calcular nivel de seguridad (0-3)
    let nivel = 0;
    if (puntos >= 30) nivel = 1;
    if (puntos >= 60) nivel = 2;
    if (puntos >= 90) nivel = 3;
    setNivelSeguridad(nivel);

    // Actualizar mensaje
    if (nivel === 0) {
      setMensaje("Tu contraseña es muy débil. ¡Sigue agregando elementos!");
    } else if (nivel === 1) {
      setMensaje("Tu contraseña es débil. Intenta agregar más tipos de caracteres.");
    } else if (nivel === 2) {
      setMensaje("¡Bien! Tu contraseña es moderadamente segura.");
    } else {
      setMensaje("¡Excelente! Has creado una contraseña muy segura.");
    }
  };

  const reiniciarContrasena = () => {
    setContrasenaActual([]);
    setPuntuacion(0);
    setMensaje("");
    setNivelSeguridad(0);
  };

  return (
    <div className="flex flex-col items-center min-h-screen p-8 gap-8 font-[family-name:var(--font-geist-sans)]">
      <motion.header 
        className="w-full max-w-4xl flex items-center justify-between"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Link href="/ejercicios/juegos" className="flex items-center gap-2 text-gray-600 hover:text-gray-900">
          <FaArrowLeft />
          <span>Volver a Juegos</span>
        </Link>
        <div className="flex items-center gap-2">
          <FaLock className="text-2xl text-red-500" />
          <h1 className="text-2xl font-bold">Creador de Contraseñas</h1>
        </div>
      </motion.header>

      <main className="w-full max-w-4xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Panel de Contraseña */}
          <motion.div 
            className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h2 className="text-xl font-bold mb-4">Tu Contraseña</h2>
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg mb-4 min-h-[60px] flex items-center justify-center text-2xl font-mono">
              {contrasenaActual.length > 0 ? contrasenaActual.join("") : "···"}
            </div>
            <div className="flex justify-between items-center mb-4">
              <div className="flex gap-1">
                {[...Array(3)].map((_, i) => (
                  <FaStar 
                    key={i}
                    className={`text-2xl ${
                      i < nivelSeguridad ? 'text-yellow-500' : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <span className="font-bold">Puntuación: {puntuacion}</span>
            </div>
            <p className={`text-center p-2 rounded-lg ${
              nivelSeguridad === 0 ? 'bg-red-100 dark:bg-red-900' :
              nivelSeguridad === 1 ? 'bg-orange-100 dark:bg-orange-900' :
              nivelSeguridad === 2 ? 'bg-yellow-100 dark:bg-yellow-900' :
              'bg-green-100 dark:bg-green-900'
            }`}>
              {mensaje}
            </p>
          </motion.div>

          {/* Panel de Elementos */}
          <motion.div 
            className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h2 className="text-xl font-bold mb-4">Elementos Disponibles</h2>
            <div className="space-y-4">
              {elementosDisponibles.map((elemento) => (
                <button
                  key={elemento.id}
                  onClick={() => agregarElemento(elemento)}
                  className="w-full p-4 bg-red-50 dark:bg-red-950 rounded-lg hover:bg-red-100 dark:hover:bg-red-900 transition-colors flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    <div className="bg-red-100 dark:bg-red-900 p-2 rounded">
                      <span className="text-xl font-mono">{elemento.valor}</span>
                    </div>
                    <span>{elemento.descripcion}</span>
                  </div>
                  <span className="text-sm font-bold text-red-500">+{elemento.puntos} pts</span>
                </button>
              ))}
            </div>
            <button
              onClick={reiniciarContrasena}
              className="w-full mt-4 p-3 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              Reiniciar Contraseña
            </button>
          </motion.div>
        </div>

        {/* Panel de Consejos */}
        <motion.div
          className="mt-8 bg-red-50 dark:bg-red-950 p-6 rounded-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h2 className="text-xl font-bold mb-4">Consejos para Contraseñas Seguras</h2>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <FaCheck className="text-green-500 mt-1" />
              <p>Usa una combinación de letras mayúsculas y minúsculas, números y símbolos</p>
            </li>
            <li className="flex items-start gap-3">
              <FaCheck className="text-green-500 mt-1" />
              <p>Crea contraseñas largas, de al menos 12 caracteres</p>
            </li>
            <li className="flex items-start gap-3">
              <FaCheck className="text-green-500 mt-1" />
              <p>Evita usar información personal como fechas de nacimiento o nombres</p>
            </li>
            <li className="flex items-start gap-3">
              <FaTimes className="text-red-500 mt-1" />
              <p>No uses la misma contraseña en diferentes sitios</p>
            </li>
          </ul>
        </motion.div>
      </main>
    </div>
  );
} 