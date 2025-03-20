"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaArrowLeft, FaCheck, FaTimes, FaStar } from "react-icons/fa";

interface Llamada {
  id: number;
  situacion: string;
  esEstafa: boolean;
  explicacion: string;
  opciones?: string[];
  respuestaCorrecta?: string;
  contexto?: string;
}

export default function EjerciciosLlamadas() {
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

  const ejercicios: Llamada[] = [
    {
      id: 1,
      situacion: "Recibes una llamada de alguien que dice ser del soporte técnico de Microsoft. Te dice que han detectado un virus en tu computadora y necesita acceso remoto para solucionarlo.",
      esEstafa: true,
      explicacion: "Microsoft nunca llama proactivamente por problemas técnicos. Los estafadores usan esta táctica para obtener acceso a tu computadora y robar información personal.",
      opciones: ["Es una estafa", "Es legítimo", "No estoy seguro"],
      respuestaCorrecta: "Es una estafa"
    },
    {
      id: 2,
      situacion: "Tu banco te llama para confirmar una transacción inusual en tu tarjeta de crédito. Te piden verificar la última compra que realizaste, pero NO te piden datos de tu tarjeta ni claves.",
      esEstafa: false,
      contexto: "Acabas de hacer una compra en una tienda en línea que nunca habías usado antes",
      explicacion: "Esta es una llamada legítima porque: 1) El banco está verificando actividad inusual, 2) No piden información sensible, 3) Solo quieren confirmar transacciones que ya conocen.",
      opciones: ["Es una estafa", "Es legítimo", "No estoy seguro"],
      respuestaCorrecta: "Es legítimo"
    },
    {
      id: 3,
      situacion: "Alguien que dice ser tu nieto llama llorando, diciendo que está en la cárcel y necesita que le envíes dinero urgentemente para pagar la fianza.",
      esEstafa: true,
      explicacion: "Esta es una estafa común conocida como 'la estafa del nieto'. Los estafadores juegan con las emociones y la urgencia. Siempre verifica llamando directamente a tu familiar.",
      opciones: ["Es una estafa", "Es legítimo", "No estoy seguro"],
      respuestaCorrecta: "Es una estafa"
    },
    {
      id: 4,
      situacion: "Tu médico habitual te llama para recordarte tu cita programada para mañana. Te dice la hora y el consultorio, sin pedirte ninguna información adicional.",
      esEstafa: false,
      contexto: "Tienes una cita médica programada para mañana",
      explicacion: "Esta es una llamada legítima porque: 1) Es un recordatorio de un servicio que ya conoces, 2) No solicita información personal, 3) Coincide con una cita que ya tenías programada.",
      opciones: ["Es una estafa", "Es legítimo", "No estoy seguro"],
      respuestaCorrecta: "Es legítimo"
    },
    {
      id: 5,
      situacion: "Recibes una llamada informándote que has ganado un premio en un sorteo. Para reclamarlo, debes hacer un pequeño pago por gastos de envío.",
      esEstafa: true,
      explicacion: "Los sorteos legítimos nunca requieren que pagues para recibir un premio. Si no participaste en ningún sorteo, es imposible que hayas ganado algo.",
      opciones: ["Es una estafa", "Es legítimo", "No estoy seguro"],
      respuestaCorrecta: "Es una estafa"
    },
    {
      id: 6,
      situacion: "Alguien que dice ser del gobierno te llama diciendo que tu número de seguro social está comprometido y necesita que lo verifiques por teléfono.",
      esEstafa: true,
      explicacion: "Las agencias gubernamentales nunca llaman para pedir información personal por teléfono. Esta es una táctica común para robar identidades.",
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
      const ejerciciosCompletadosStr = localStorage.getItem('llamadasCompletados') || '[]';
      const ejerciciosCompletadosArr = JSON.parse(ejerciciosCompletadosStr);
      
      if (!ejerciciosCompletadosArr.includes(ejercicioActual)) {
        ejerciciosCompletadosArr.push(ejercicioActual);
        localStorage.setItem('llamadasCompletados', JSON.stringify(ejerciciosCompletadosArr));
        
        // Guardar la puntuación de la sección
        localStorage.setItem('llamadasPuntuacion', nuevaPuntuacion.toString());
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
        <Link href="/ejercicios" className="flex items-center gap-2 text-gray-600 hover:text-gray-900">
          <FaArrowLeft />
          <span>Volver a Ejercicios</span>
        </Link>
        <div className="flex items-center gap-4">
          <div className="bg-purple-100 dark:bg-purple-900 px-4 py-2 rounded-lg">
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
            <div className="bg-purple-500 p-2 rounded-full">
              <FaPhoneAlt className="text-white text-2xl" />
            </div>
            <h2 className="text-2xl font-bold">Simulador de Llamadas</h2>
          </div>

          <div className="space-y-6">
            {ejercicios[ejercicioActual].contexto && (
              <div className="bg-blue-50 dark:bg-blue-950 p-4 rounded-lg">
                <p className="text-sm font-bold mb-1">Contexto:</p>
                <p className="text-lg">{ejercicios[ejercicioActual].contexto}</p>
              </div>
            )}
            
            <div className="bg-purple-50 dark:bg-purple-950 p-4 rounded-lg">
              <p className="text-lg">{ejercicios[ejercicioActual].situacion}</p>
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