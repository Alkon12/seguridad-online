"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { FaGamepad, FaWhatsapp, FaEnvelope, FaPhoneAlt, FaStar, FaArrowLeft, FaHome } from "react-icons/fa";

export default function Ejercicios() {
  const [puntuacionTotal, setPuntuacionTotal] = useState(0);
  const [ejerciciosCompletados, setEjerciciosCompletados] = useState(0);

  // Total de ejercicios disponibles por sección
  const totalEjercicios = {
    whatsapp: 6,
    correos: 6,
    llamadas: 6
  };

  // Total de ejercicios sumando todas las secciones
  const totalEjerciciosDisponibles = Object.values(totalEjercicios).reduce((a, b) => a + b, 0);

  useEffect(() => {
    const actualizarEstadisticas = () => {
      try {
        // Obtener ejercicios completados de cada sección
        const whatsappCompletados = new Set(JSON.parse(localStorage.getItem('whatsappCompletados') || '[]'));
        const correosCompletados = new Set(JSON.parse(localStorage.getItem('phishingCompletados') || '[]'));
        const llamadasCompletados = new Set(JSON.parse(localStorage.getItem('llamadasCompletados') || '[]'));

        // Calcular total de ejercicios únicos completados
        const totalCompletados = whatsappCompletados.size + correosCompletados.size + llamadasCompletados.size;
        setEjerciciosCompletados(totalCompletados);

        // Calcular puntuación promedio
        let puntuacionAcumulada = 0;
        let seccionesConPuntuacion = 0;

        if (whatsappCompletados.size > 0) {
          const whatsappPuntuacion = parseInt(localStorage.getItem('whatsappPuntuacion') || '0');
          if (!isNaN(whatsappPuntuacion)) {
            puntuacionAcumulada += whatsappPuntuacion;
            seccionesConPuntuacion++;
          }
        }

        if (correosCompletados.size > 0) {
          const correosPuntuacion = parseInt(localStorage.getItem('correosPuntuacion') || '0');
          if (!isNaN(correosPuntuacion)) {
            puntuacionAcumulada += correosPuntuacion;
            seccionesConPuntuacion++;
          }
        }

        if (llamadasCompletados.size > 0) {
          const llamadasPuntuacion = parseInt(localStorage.getItem('llamadasPuntuacion') || '0');
          if (!isNaN(llamadasPuntuacion)) {
            puntuacionAcumulada += llamadasPuntuacion;
            seccionesConPuntuacion++;
          }
        }

        const puntuacionPromedio = seccionesConPuntuacion > 0 
          ? Math.round(puntuacionAcumulada / seccionesConPuntuacion) 
          : 0;

        setPuntuacionTotal(puntuacionPromedio);
      } catch (error) {
        console.error('Error al actualizar estadísticas:', error);
      }
    };

    // Verificar si es la primera vez que se carga la página
    const primeraVisita = !localStorage.getItem('visitado');
    if (primeraVisita) {
      localStorage.clear();
      localStorage.setItem('visitado', 'true');
    }

    // Configurar intervalo para actualizar estadísticas
    actualizarEstadisticas();
    const intervalo = setInterval(actualizarEstadisticas, 1000);

    // Agregar listener para cambios en localStorage
    window.addEventListener('storage', actualizarEstadisticas);

    return () => {
      clearInterval(intervalo);
      window.removeEventListener('storage', actualizarEstadisticas);
    };
  }, []);

  return (
    <div className="flex flex-col items-center min-h-screen p-8 gap-8 font-[family-name:var(--font-geist-sans)]">
      <motion.header 
        className="w-full max-w-4xl"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex justify-between items-center mb-8">
          <Link 
            href="/" 
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <FaArrowLeft className="text-xl" />
            <span className="font-medium">Volver al Inicio</span>
          </Link>
          <Link
            href="/"
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <FaHome className="text-xl" />
            <span className="font-medium">Página Principal</span>
          </Link>
        </div>

        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Ejercicios Prácticos de Seguridad</h1>
          <p className="text-xl md:text-2xl">Pon a prueba tus conocimientos con simulaciones realistas</p>
          
          <div className="mt-6 flex justify-center gap-6">
            <div className="bg-green-100 dark:bg-green-900 p-4 rounded-lg">
              <p className="text-lg font-bold">Puntuación Global</p>
              <p className="text-3xl font-bold text-green-600 dark:text-green-400">{puntuacionTotal}%</p>
            </div>
            <div className="bg-blue-100 dark:bg-blue-900 p-4 rounded-lg">
              <p className="text-lg font-bold">Ejercicios Completados</p>
              <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                {ejerciciosCompletados}/{totalEjerciciosDisponibles}
              </p>
            </div>
          </div>
        </div>
      </motion.header>

      <main className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Sección de WhatsApp */}
        <motion.section 
          className="bg-green-50 dark:bg-green-950 rounded-xl p-6 shadow-md"
          whileHover={{ scale: 1.02 }}
        >
          <Link href="/ejercicios/whatsapp" className="block">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <FaWhatsapp className="text-green-600" />
              Simulador de WhatsApp
            </h2>
            <p className="mb-4">Aprende a identificar mensajes sospechosos y estafas comunes en WhatsApp.</p>
            <div className="flex items-center gap-2">
              <FaStar className="text-yellow-500" />
              <span>{totalEjercicios.whatsapp} ejercicios disponibles</span>
            </div>
          </Link>
        </motion.section>

        {/* Sección de Correos */}
        <motion.section 
          className="bg-blue-50 dark:bg-blue-950 rounded-xl p-6 shadow-md"
          whileHover={{ scale: 1.02 }}
        >
          <Link href="/ejercicios/correos" className="block">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <FaEnvelope className="text-blue-600" />
              Detector de Phishing
            </h2>
            <p className="mb-4">Identifica correos electrónicos maliciosos y aprende a proteger tu información.</p>
            <div className="flex items-center gap-2">
              <FaStar className="text-yellow-500" />
              <span>{totalEjercicios.correos} ejercicios disponibles</span>
            </div>
          </Link>
        </motion.section>

        {/* Sección de Llamadas */}
        <motion.section 
          className="bg-purple-50 dark:bg-purple-950 rounded-xl p-6 shadow-md"
          whileHover={{ scale: 1.02 }}
        >
          <Link href="/ejercicios/llamadas" className="block">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <FaPhoneAlt className="text-purple-600" />
              Simulador de Llamadas
            </h2>
            <p className="mb-4">Practica cómo responder a llamadas sospechosas y evitar estafas telefónicas.</p>
            <div className="flex items-center gap-2">
              <FaStar className="text-yellow-500" />
              <span>{totalEjercicios.llamadas} ejercicios disponibles</span>
            </div>
          </Link>
        </motion.section>

        {/* Sección de Juegos */}
        <motion.section 
          className="bg-red-50 dark:bg-red-950 rounded-xl p-6 shadow-md"
          whileHover={{ scale: 1.02 }}
        >
          <Link href="/ejercicios/juegos" className="block">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <FaGamepad className="text-red-600" />
              Juegos de Seguridad
            </h2>
            <p className="mb-4">Diviértete mientras aprendes con juegos interactivos sobre seguridad en línea.</p>
            <div className="flex items-center gap-2">
              <FaStar className="text-yellow-500" />
              <span>2 Juegos disponibles</span>
            </div>
          </Link>
        </motion.section>
      </main>
    </div>
  );
} 