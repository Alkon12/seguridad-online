"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaWhatsapp, FaArrowLeft, FaCheck, FaTimes, FaStar, FaHome } from "react-icons/fa";

interface Mensaje {
  id: number;
  texto: string;
  esEstafa: boolean;
  explicacion: string;
  opciones?: string[];
  respuestaCorrecta?: string;
  contexto?: string;
}

export default function EjerciciosWhatsApp() {
  const [ejercicioActual, setEjercicioActual] = useState(0);
  const [respuestas, setRespuestas] = useState<boolean[]>([]);
  const [mostrarExplicacion, setMostrarExplicacion] = useState(false);
  const [puntuacion, setPuntuacion] = useState(0);
  const [ejerciciosCompletados, setEjerciciosCompletados] = useState(0);

  useEffect(() => {
    // No limpiar el storage al iniciar
    setPuntuacion(0);
    setEjerciciosCompletados(0);
  }, []);

  const ejercicios: Mensaje[] = [
    {
      id: 1,
      texto: "¡Hola! Soy tu hijo. Perdí mi teléfono y este es mi nuevo número. Necesito que me envíes $500 urgentemente para pagar una factura.",
      esEstafa: true,
      explicacion: "Los estafadores suelen hacerse pasar por familiares y pedir dinero urgentemente. Siempre verifica llamando al número original.",
      opciones: ["Es una estafa", "Es legítimo", "No estoy seguro"],
      respuestaCorrecta: "Es una estafa"
    },
    {
      id: 2,
      texto: "Hola mamá, te escribo del grupo de tejido. Este sábado a las 4pm tenemos reunión en la casa de María como siempre. ¿Vas a venir? Recuerda traer tus agujas del número 5.",
      esEstafa: false,
      contexto: "Mensaje de una compañera del grupo de tejido al que asistes regularmente",
      explicacion: "Este es un mensaje legítimo porque: 1) Menciona detalles específicos que un estafador no conocería, 2) No pide dinero ni información personal, 3) Es consistente con una actividad regular.",
      opciones: ["Es una estafa", "Es legítimo", "No estoy seguro"],
      respuestaCorrecta: "Es legítimo"
    },
    {
      id: 3,
      texto: "¡Felicidades! Has sido seleccionado para ganar un iPhone 15. Haz clic en este enlace para reclamar tu premio: bit.ly/premio-iphone",
      esEstafa: true,
      explicacion: "Los sorteos falsos son muy comunes. Si no participaste en ningún concurso, es imposible que hayas ganado algo.",
      opciones: ["Es una estafa", "Es legítimo", "No estoy seguro"],
      respuestaCorrecta: "Es una estafa"
    },
    {
      id: 4,
      texto: "Buenas tardes, soy Juan del supermercado. Su pedido #4523 está listo para entrega. Llegará entre 15:00-16:00. Si necesita cambiar el horario, responda este mensaje.",
      esEstafa: false,
      contexto: "Realizaste un pedido en línea en tu supermercado habitual",
      explicacion: "Este es un mensaje legítimo porque: 1) Incluye un número de pedido específico, 2) Es de un servicio que utilizaste, 3) No solicita información sensible ni pagos.",
      opciones: ["Es una estafa", "Es legítimo", "No estoy seguro"],
      respuestaCorrecta: "Es legítimo"
    },
    {
      id: 5,
      texto: "BANCO SEGURO: Su cuenta ha sido bloqueada por actividad sospechosa. Ingrese aquí para verificar su identidad: banco-seguro.web.com",
      esEstafa: true,
      explicacion: "Los bancos nunca te pedirán verificar tu identidad por WhatsApp o enlaces externos. Siempre ve directamente al sitio oficial.",
      opciones: ["Es una estafa", "Es legítimo", "No estoy seguro"],
      respuestaCorrecta: "Es una estafa"
    },
    {
      id: 6,
      texto: "Hola abuel@, ¿podrías enviarme una foto del frente y reverso de tu tarjeta de crédito? Necesito hacer una compra urgente.",
      esEstafa: true,
      explicacion: "Nunca compartas fotos de tus tarjetas de crédito, ni siquiera con familiares. Los estafadores suelen suplantar identidades.",
      opciones: ["Es una estafa", "Es legítimo", "No estoy seguro"],
      respuestaCorrecta: "Es una estafa"
    }
  ];

  const verificarRespuesta = (respuesta: string) => {
    const esCorrecta = respuesta === ejercicios[ejercicioActual].respuestaCorrecta;
    const nuevasRespuestas = [...respuestas];
    nuevasRespuestas[ejercicioActual] = esCorrecta;
    setRespuestas(nuevasRespuestas);
    setMostrarExplicacion(true);
    
    if (esCorrecta) {
      const respuestasCorrectas = nuevasRespuestas.filter(r => r).length;
      const nuevaPuntuacion = Math.round((respuestasCorrectas / ejercicios.length) * 100);
      setPuntuacion(nuevaPuntuacion);

      // Obtener ejercicios completados actuales
      const ejerciciosCompletadosStr = localStorage.getItem('whatsappCompletados') || '[]';
      const ejerciciosCompletadosArr = JSON.parse(ejerciciosCompletadosStr);
      
      if (!ejerciciosCompletadosArr.includes(ejercicioActual)) {
        ejerciciosCompletadosArr.push(ejercicioActual);
        localStorage.setItem('whatsappCompletados', JSON.stringify(ejerciciosCompletadosArr));
        
        // Guardar la puntuación de la sección
        localStorage.setItem('whatsappPuntuacion', nuevaPuntuacion.toString());
      }
    }
  };

  const siguienteEjercicio = () => {
    if (ejercicioActual < ejercicios.length - 1) {
      setEjercicioActual(ejercicioActual + 1);
      setMostrarExplicacion(false);
    }
  };

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
        <div className="flex items-center gap-4">
          <div className="bg-green-100 dark:bg-green-900 px-4 py-2 rounded-lg">
            <p className="text-lg font-bold">Puntuación actual: {puntuacion}%</p>
          </div>
          <div className="flex">
            {ejercicios.map((_, index) => (
              <FaStar 
                key={index}
                className={`text-2xl ${
                  respuestas[index] ? 'text-yellow-500' : 'text-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </motion.header>

      <main className="w-full max-w-2xl">
        <motion.div 
          className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-green-500 p-2 rounded-full">
              <FaWhatsapp className="text-white text-2xl" />
            </div>
            <h2 className="text-2xl font-bold">Simulador de WhatsApp</h2>
          </div>

          <div className="space-y-6">
            {ejercicios[ejercicioActual].contexto && (
              <div className="bg-blue-50 dark:bg-blue-950 p-4 rounded-lg">
                <p className="text-sm font-bold mb-1">Contexto:</p>
                <p className="text-lg">{ejercicios[ejercicioActual].contexto}</p>
              </div>
            )}
            
            <div className="bg-green-50 dark:bg-green-950 p-4 rounded-lg">
              <p className="text-lg">{ejercicios[ejercicioActual].texto}</p>
            </div>

            <div className="space-y-3">
              {ejercicios[ejercicioActual].opciones?.map((opcion, index) => (
                <button
                  key={index}
                  onClick={() => verificarRespuesta(opcion)}
                  disabled={mostrarExplicacion}
                  className={`w-full p-3 text-left rounded-lg transition-colors ${
                    mostrarExplicacion
                      ? opcion === ejercicios[ejercicioActual].respuestaCorrecta
                        ? 'bg-green-100 dark:bg-green-900'
                        : 'bg-red-100 dark:bg-red-900'
                      : 'bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
                >
                  {opcion}
                </button>
              ))}
            </div>

            {mostrarExplicacion && (
              <motion.div 
                className="bg-blue-50 dark:bg-blue-950 p-4 rounded-lg"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <h3 className="font-bold mb-2">Explicación:</h3>
                <p>{ejercicios[ejercicioActual].explicacion}</p>
                {ejercicioActual < ejercicios.length - 1 && (
                  <button
                    onClick={siguienteEjercicio}
                    className="mt-4 bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors"
                  >
                    Siguiente ejercicio
                  </button>
                )}
                {ejercicioActual === ejercicios.length - 1 && (
                  <div className="mt-4 text-center">
                    <h4 className="font-bold text-lg mb-2">¡Has completado todos los ejercicios!</h4>
                    <p>Puntuación en esta sesión: {puntuacion}%</p>
                    {puntuacion === 100 ? (
                      <Link href="/ejercicios">
                        <button
                          className="mt-4 bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition-colors"
                        >
                          Volver a Ejercicios
                        </button>
                      </Link>
                    ) : (
                      <button
                        onClick={() => {
                          setEjercicioActual(0);
                          setRespuestas([]);
                          setPuntuacion(0);
                          setMostrarExplicacion(false);
                        }}
                        className="mt-4 bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors"
                      >
                        Intentar de nuevo
                      </button>
                    )}
                  </div>
                )}
              </motion.div>
            )}
          </div>
        </motion.div>
      </main>
    </div>
  );
} 