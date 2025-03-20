"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaArrowLeft, FaGamepad, FaLock, FaShieldAlt, FaUserSecret, FaHome } from "react-icons/fa";

interface Juego {
  id: number;
  titulo: string;
  descripcion: string;
  icono: React.ReactElement;
  ruta: string;
  disponible: boolean;
}

export default function JuegosSeguridad() {
  const juegos: Juego[] = [
    {
      id: 1,
      titulo: "Creador de Contraseñas",
      descripcion: "¡Aprende a crear contraseñas seguras de forma divertida! Combina diferentes elementos para crear la contraseña más fuerte posible.",
      icono: <FaLock className="text-3xl text-red-500" />,
      ruta: "/ejercicios/juegos/password-creator",
      disponible: true
    },
    {
      id: 2,
      titulo: "Detective Digital",
      descripcion: "Conviértete en un detective y encuentra las señales de estafa en diferentes situaciones. ¡Gana puntos por cada pista que descubras!",
      icono: <FaUserSecret className="text-3xl text-red-500" />,
      ruta: "/ejercicios/juegos/detective",
      disponible: true
    },
    {
      id: 3,
      titulo: "Protege tu Casa Digital",
      descripcion: "Juego de estrategia donde debes proteger tu dispositivo de diferentes amenazas. ¡Construye defensas y mantén tus datos seguros!",
      icono: <FaShieldAlt className="text-3xl text-red-500" />,
      ruta: "/ejercicios/juegos/protect-device",
      disponible: false
    }
  ];

  return (
    <div className="flex flex-col items-center min-h-screen p-8 gap-8 font-[family-name:var(--font-geist-sans)]">
      <motion.header 
        className="w-full max-w-4xl flex items-center justify-between"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-4">
          <Link href="/ejercicios" className="flex items-center gap-2 text-gray-600 hover:text-gray-900">
            <FaArrowLeft />
            <span>Volver a Ejercicios</span>
          </Link>
          <Link href="/" className="flex items-center gap-2 text-gray-600 hover:text-gray-900">
            <FaHome />
            <span>Inicio</span>
          </Link>
        </div>
        <div className="flex items-center gap-2">
          <FaGamepad className="text-2xl text-red-500" />
          <h1 className="text-2xl font-bold">Juegos de Seguridad</h1>
        </div>
      </motion.header>

      <main className="w-full max-w-4xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {juegos.map((juego) => (
            <motion.div
              key={juego.id}
              className={`relative bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg ${
                !juego.disponible ? 'opacity-75' : ''
              }`}
              whileHover={juego.disponible ? { scale: 1.02 } : {}}
            >
              {juego.disponible ? (
                <Link href={juego.ruta} className="block">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-red-100 dark:bg-red-900 rounded-lg">
                      {juego.icono}
                    </div>
                    <div>
                      <h2 className="text-xl font-bold mb-2">{juego.titulo}</h2>
                      <p className="text-gray-600 dark:text-gray-400">{juego.descripcion}</p>
                    </div>
                  </div>
                </Link>
              ) : (
                <div>
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-red-100 dark:bg-red-900 rounded-lg">
                      {juego.icono}
                    </div>
                    <div>
                      <h2 className="text-xl font-bold mb-2">{juego.titulo}</h2>
                      <p className="text-gray-600 dark:text-gray-400">{juego.descripcion}</p>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-white/80 dark:bg-gray-900/80 rounded-xl flex items-center justify-center">
                    <span className="text-lg font-bold text-red-500">Próximamente</span>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-12 bg-red-50 dark:bg-red-950 p-6 rounded-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h2 className="text-xl font-bold mb-4">¿Por qué jugar para aprender?</h2>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <FaGamepad className="text-red-500 mt-1" />
              <p>Aprender jugando hace que la información sea más fácil de recordar</p>
            </li>
            <li className="flex items-start gap-3">
              <FaGamepad className="text-red-500 mt-1" />
              <p>Los juegos permiten practicar en un entorno seguro sin riesgos reales</p>
            </li>
            <li className="flex items-start gap-3">
              <FaGamepad className="text-red-500 mt-1" />
              <p>Ganar puntos y superar niveles motiva a seguir aprendiendo</p>
            </li>
          </ul>
        </motion.div>
      </main>
    </div>
  );
} 