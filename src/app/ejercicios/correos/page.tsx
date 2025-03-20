"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaEnvelope, FaArrowLeft, FaCheck, FaTimes, FaStar } from "react-icons/fa";
import Image from "next/image";

interface Correo {
  id: number;
  tipo: "texto" | "imagen" | "elementos";
  contenido: string;
  asunto?: string;
  remitente?: string;
  esEstafa: boolean;
  explicacion: string;
  opciones?: string[];
  respuestaCorrecta?: string | string[];
  contexto?: string;
  elementosSospechosos?: {
    texto: string;
    esSospechoso: boolean;
    explicacion: string;
  }[];
}

export default function EjerciciosPhishing() {
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

  const ejercicios: Correo[] = [
    {
      id: 1,
      tipo: "texto",
      asunto: "¡Su cuenta de Netflix será suspendida!",
      remitente: "Netflix <support@netf1ix-accounts.com>",
      contenido: "Estimado cliente, Hemos detectado un problema con su información de facturación. Si no actualiza sus datos en las próximas 24 horas, su cuenta será suspendida. Por favor, haga clic aquí para verificar su información: https://netflix-accounts-verify.com",
      esEstafa: true,
      explicacion: "Este es un correo fraudulento porque: 1) El dominio del remitente es falso (netf1ix con un '1'), 2) Usa tácticas de urgencia, 3) El enlace no es el sitio oficial de Netflix, 4) Netflix nunca pide verificar información por correo.",
      opciones: ["Es una estafa", "Es legítimo", "No estoy seguro"],
      respuestaCorrecta: "Es una estafa"
    },
    {
      id: 2,
      tipo: "imagen",
      contenido: "/Correos/ejemplo-phishing-google.jpg",
      esEstafa: true,
      explicacion: "Este es un ejemplo real de correo fraudulento. Observa los elementos típicos de phishing: urgencia, errores gramaticales, dominios falsos y solicitudes de información personal.",
      opciones: ["Es una estafa", "Es legítimo", "No estoy seguro"],
      respuestaCorrecta: "Es una estafa"
    },
    {
      id: 3,
      tipo: "elementos",
      asunto: "¡URGENTE! Su cuenta PayPal ha sido comprometida",
      remitente: "PayPal Security <security@paypa1-secure.net>",
      contenido: "Estimado usuario de PayPal:\n\nHemos detectado múltiples intentos de acceso no autorizados a su cuenta desde diferentes ubicaciones. Para proteger sus fondos, su cuenta ha sido temporalmente limitada.\n\nPara restaurar el acceso completo a su cuenta, debe verificar su identidad haciendo clic en el siguiente enlace seguro:\nhttps://paypal-secure-verification.net/auth\n\n¡ADVERTENCIA! Si no verifica su cuenta en las próximas 12 horas, será suspendida permanentemente.\n\nAtentamente,\nEquipo de Seguridad de PayPal",
      esEstafa: true,
      explicacion: "Has identificado correctamente los elementos sospechosos en este correo de phishing.",
      elementosSospechosos: [
        {
          texto: "PayPal Security <security@paypa1-secure.net>",
          esSospechoso: true,
          explicacion: "El dominio del remitente es falso. Usa '1' en lugar de 'l' y un dominio que intenta parecer oficial."
        },
        {
          texto: "¡URGENTE! Su cuenta PayPal ha sido comprometida",
          esSospechoso: true,
          explicacion: "Uso de lenguaje urgente y alarmista para provocar una reacción emocional."
        },
        {
          texto: "https://paypal-secure-verification.net/auth",
          esSospechoso: true,
          explicacion: "URL falsa que no pertenece al dominio oficial de PayPal (paypal.com)."
        },
        {
          texto: "Si no verifica su cuenta en las próximas 12 horas, será suspendida permanentemente",
          esSospechoso: true,
          explicacion: "Amenaza con un límite de tiempo para presionar al usuario."
        },
        {
          texto: "Equipo de Seguridad de PayPal",
          esSospechoso: false,
          explicacion: "Una firma genérica no es necesariamente sospechosa, pero debe verse en contexto con otros elementos."
        }
      ],
      opciones: [
        "Dominio del remitente sospechoso",
        "Lenguaje urgente y amenazante",
        "URL no oficial",
        "Límite de tiempo amenazante",
        "Firma del equipo de seguridad"
      ],
      respuestaCorrecta: [
        "Dominio del remitente sospechoso",
        "Lenguaje urgente y amenazante",
        "URL no oficial",
        "Límite de tiempo amenazante"
      ]
    },
    {
      id: 4,
      tipo: "texto",
      asunto: "Confirmación de tu pedido #45921",
      remitente: "Amazon.com <order-confirm@amazon.com>",
      contenido: "Hola, Gracias por tu compra en Amazon. Tu pedido #45921 ha sido confirmado y será enviado a tu dirección registrada. Puedes revisar los detalles de tu pedido en tu cuenta de Amazon. Si no realizaste esta compra, por favor contacta con nuestro servicio al cliente.",
      esEstafa: false,
      contexto: "Acabas de realizar una compra en Amazon",
      explicacion: "Este es un correo legítimo porque: 1) El dominio del remitente es correcto (amazon.com), 2) Incluye un número de pedido específico, 3) No pide hacer clic en enlaces ni información sensible, 4) Proporciona instrucciones de seguridad apropiadas.",
      opciones: ["Es una estafa", "Es legítimo", "No estoy seguro"],
      respuestaCorrecta: "Es legítimo"
    },
    {
      id: 5,
      tipo: "imagen",
      contenido: "/Correos/2017-07-24_13-58-39.jpg",
      esEstafa: true,
      explicacion: "Otro ejemplo real de phishing. Fíjate en cómo intentan suplantar la identidad de una empresa conocida pero con pequeñas diferencias en el diseño y los enlaces.",
      opciones: ["Es una estafa", "Es legítimo", "No estoy seguro"],
      respuestaCorrecta: "Es una estafa"
    },
    {
      id: 6,
      tipo: "imagen",
      contenido: "/Correos/Ejemplo-phishing-correo-02-castillayleons.jpg",
      esEstafa: true,
      explicacion: "Un tercer ejemplo de correo fraudulento real. Estos correos suelen tener características comunes: solicitud de acción urgente, amenazas, errores de formato y enlaces sospechosos.",
      opciones: ["Es una estafa", "Es legítimo", "No estoy seguro"],
      respuestaCorrecta: "Es una estafa"
    }
  ];

  const verificarRespuesta = (respuesta: string | string[]) => {
    let esCorrecta = false;
    
    if (ejercicios[ejercicioActual].tipo === "elementos") {
      const respuestasCorrectas = ejercicios[ejercicioActual].respuestaCorrecta as string[];
      if (Array.isArray(respuesta)) {
        esCorrecta = respuestasCorrectas.length === respuesta.length && 
                    respuestasCorrectas.every(r => respuesta.includes(r));
      }
    } else {
      esCorrecta = respuesta === ejercicios[ejercicioActual].respuestaCorrecta;
    }

    const nuevasRespuestas = [...respuestas];
    nuevasRespuestas[ejercicioActual] = esCorrecta;
    setRespuestas(nuevasRespuestas);
    setMostrarExplicacion(true);
    
    if (esCorrecta) {
      const respuestasCorrectas = nuevasRespuestas.filter(r => r).length;
      const nuevaPuntuacion = Math.round((respuestasCorrectas / ejercicios.length) * 100);
      setPuntuacion(nuevaPuntuacion);

      // Obtener ejercicios completados actuales
      const ejerciciosCompletadosStr = localStorage.getItem('phishingCompletados') || '[]';
      const ejerciciosCompletadosArr = JSON.parse(ejerciciosCompletadosStr);
      
      if (!ejerciciosCompletadosArr.includes(ejercicioActual)) {
        ejerciciosCompletadosArr.push(ejercicioActual);
        localStorage.setItem('phishingCompletados', JSON.stringify(ejerciciosCompletadosArr));
        
        // Guardar la puntuación de la sección
        localStorage.setItem('correosPuntuacion', nuevaPuntuacion.toString());
      }
    }
  };

  // Estado para manejar selección múltiple en ejercicios de elementos
  const [elementosSeleccionados, setElementosSeleccionados] = useState<string[]>([]);

  const toggleElemento = (elemento: string) => {
    setElementosSeleccionados(prev => 
      prev.includes(elemento)
        ? prev.filter(e => e !== elemento)
        : [...prev, elemento]
    );
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
            <div className="bg-blue-500 p-2 rounded-full">
              <FaEnvelope className="text-white text-2xl" />
            </div>
            <h2 className="text-2xl font-bold">Detector de Phishing</h2>
          </div>

          <div className="space-y-6">
            {ejercicios[ejercicioActual].contexto && (
              <div className="bg-blue-50 dark:bg-blue-950 p-4 rounded-lg">
                <p className="text-sm font-bold mb-1">Contexto:</p>
                <p className="text-lg">{ejercicios[ejercicioActual].contexto}</p>
              </div>
            )}
            
            <div className="bg-gray-50 dark:bg-gray-950 p-4 rounded-lg space-y-4">
              {ejercicios[ejercicioActual].tipo === "elementos" ? (
                <>
                  <div className="border-b pb-2">
                    <p className="text-sm text-gray-600 dark:text-gray-400">De: {ejercicios[ejercicioActual].remitente}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Asunto: {ejercicios[ejercicioActual].asunto}</p>
                  </div>
                  <p className="text-lg whitespace-pre-line">{ejercicios[ejercicioActual].contenido}</p>
                  <div className="mt-4">
                    <p className="font-bold mb-2">Selecciona todos los elementos sospechosos:</p>
                    <div className="space-y-2">
                      {ejercicios[ejercicioActual].opciones?.map((opcion, index) => (
                        <button
                          key={index}
                          onClick={() => !mostrarExplicacion && toggleElemento(opcion)}
                          disabled={mostrarExplicacion}
                          className={`w-full p-3 text-left rounded-lg transition-colors ${
                            elementosSeleccionados.includes(opcion)
                              ? 'bg-blue-100 dark:bg-blue-900'
                              : 'bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700'
                          }`}
                        >
                          {opcion}
                        </button>
                      ))}
                    </div>
                    {!mostrarExplicacion && (
                      <button
                        onClick={() => verificarRespuesta(elementosSeleccionados)}
                        className="mt-4 bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors"
                      >
                        Verificar selección
                      </button>
                    )}
                  </div>
                </>
              ) : ejercicios[ejercicioActual].tipo === "texto" ? (
                <>
                  <div className="border-b pb-2">
                    <p className="text-sm text-gray-600 dark:text-gray-400">De: {ejercicios[ejercicioActual].remitente}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Asunto: {ejercicios[ejercicioActual].asunto}</p>
                  </div>
                  <p className="text-lg">{ejercicios[ejercicioActual].contenido}</p>
                </>
              ) : (
                <div className="aspect-video bg-gray-200 dark:bg-gray-800 rounded-lg flex items-center justify-center overflow-hidden">
                  <Image 
                    src={ejercicios[ejercicioActual].contenido}
                    alt="Ejemplo de correo electrónico"
                    width={800}
                    height={450}
                    className="object-contain w-full h-full"
                  />
                </div>
              )}
            </div>

            {ejercicios[ejercicioActual].tipo !== "elementos" && (
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
            )}

            {mostrarExplicacion && (
              <motion.div 
                className="bg-blue-50 dark:bg-blue-950 p-4 rounded-lg"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <h3 className="font-bold mb-2">Explicación:</h3>
                <p>{ejercicios[ejercicioActual].explicacion}</p>
                {ejercicios[ejercicioActual].tipo === "elementos" && (
                  <div className="mt-4 space-y-4">
                    <h4 className="font-bold">Detalles de los elementos:</h4>
                    {ejercicios[ejercicioActual].elementosSospechosos?.map((elemento, index) => (
                      <div 
                        key={index}
                        className={`p-3 rounded-lg ${
                          elemento.esSospechoso 
                            ? 'bg-red-100 dark:bg-red-900' 
                            : 'bg-green-100 dark:bg-green-900'
                        }`}
                      >
                        <p className="font-bold">{elemento.texto}</p>
                        <p>{elemento.explicacion}</p>
                      </div>
                    ))}
                  </div>
                )}
                {ejercicioActual < ejercicios.length - 1 && (
                  <button
                    onClick={() => {
                      siguienteEjercicio();
                      setElementosSeleccionados([]);
                    }}
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
                          setElementosSeleccionados([]);
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