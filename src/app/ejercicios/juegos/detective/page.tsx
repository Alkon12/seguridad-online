"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaArrowLeft, FaUserSecret, FaSearch, FaCheck, FaTimes, FaHome } from "react-icons/fa";

interface Pista {
  id: number;
  texto: string;
  esSenal: boolean;
  explicacion: string;
}

interface Caso {
  id: number;
  titulo: string;
  descripcion: string;
  tipo: "email" | "whatsapp" | "llamada" | "web";
  pistas: Pista[];
  contexto?: string;
}

export default function DetectiveDigital() {
  const [casoActual, setCasoActual] = useState(0);
  const [pistasEncontradas, setPistasEncontradas] = useState<number[]>([]);
  const [mostrarExplicacion, setMostrarExplicacion] = useState<number | null>(null);
  const [puntuacion, setPuntuacion] = useState(0);
  const [casoCompletado, setCasoCompletado] = useState(false);

  const casos: Caso[] = [
    {
      id: 1,
      titulo: "El Correo Sospechoso",
      descripcion: "Has recibido un correo electrónico de tu banco. Analiza cuidadosamente el mensaje y encuentra las señales de estafa.",
      tipo: "email",
      contexto: "From: banco-seguro@secure-bank.net\nSubject: ¡URGENTE! Problema con su cuenta\n\nEstimado cliente,\n\nHemos detectado actividad sospechosa en su cuenta. Por favor, verifique su identidad inmediatamente haciendo clic en el siguiente enlace: http://banco-seguro.verificacion.net\n\nSi no verifica en 24 horas, su cuenta será suspendida.\n\nAtentamente,\nEquipo de Seguridad",
      pistas: [
        {
          id: 1,
          texto: "El dominio del correo no es oficial",
          esSenal: true,
          explicacion: "Los bancos siempre usan sus dominios oficiales, no subdominios genéricos como 'secure-bank.net'"
        },
        {
          id: 2,
          texto: "Uso de urgencia y amenazas",
          esSenal: true,
          explicacion: "Los estafadores suelen crear sensación de urgencia y amenazar con consecuencias negativas"
        },
        {
          id: 3,
          texto: "Enlace sospechoso",
          esSenal: true,
          explicacion: "El enlace no corresponde al sitio oficial del banco"
        },
        {
          id: 4,
          texto: "Saludo genérico",
          esSenal: true,
          explicacion: "Los bancos suelen usar tu nombre completo, no 'Estimado cliente'"
        },
        {
          id: 5,
          texto: "Menciona problemas de seguridad",
          esSenal: false,
          explicacion: "Aunque menciona problemas de seguridad, esto por sí solo no es una señal de estafa, ya que los bancos también envían alertas legítimas"
        }
      ]
    },
    {
      id: 2,
      titulo: "La Oferta Tentadora",
      descripcion: "Estás navegando y encuentras una oferta increíble. Examina la página web y encuentra las señales sospechosas.",
      tipo: "web",
      contexto: "¡OFERTA ESPECIAL!\n\niPhone 15 Pro Max por solo $299\n¡Solo quedan 2 unidades!\n\n★★★★★ (10,547 reviews)\nEnvío GRATIS en 24h\n\nForma de pago: Solo transferencia bancaria o Western Union\nContacto: ventasseguras@hotmail.com",
      pistas: [
        {
          id: 1,
          texto: "Precio demasiado bajo",
          esSenal: true,
          explicacion: "Un precio extremadamente bajo para un producto de alto valor es una señal clara de estafa"
        },
        {
          id: 2,
          texto: "Urgencia artificial",
          esSenal: true,
          explicacion: "La táctica de 'solo quedan 2 unidades' busca presionar para una decisión rápida"
        },
        {
          id: 3,
          texto: "Método de pago sospechoso",
          esSenal: true,
          explicacion: "Solo aceptar transferencias o Western Union es sospechoso, las tiendas legítimas ofrecen múltiples opciones"
        },
        {
          id: 4,
          texto: "Correo no profesional",
          esSenal: true,
          explicacion: "Una tienda legítima no usaría una dirección de Hotmail para contacto"
        },
        {
          id: 5,
          texto: "Muchas reseñas positivas",
          esSenal: true,
          explicacion: "Un número muy alto de reseñas perfectas puede indicar que son falsas"
        }
      ]
    },
    {
      id: 3,
      titulo: "La Llamada Inesperada",
      descripcion: "Has recibido una llamada sobre un premio. Analiza la conversación y encuentra las señales de estafa.",
      tipo: "llamada",
      contexto: "Operador: ¡Felicidades! Ha sido seleccionado para recibir un premio de $5,000. Solo necesitamos verificar su identidad y que pague un pequeño cargo de gestión de $50.\n\nLa llamada es desde un número privado y el operador insiste en que la oferta expira en 1 hora.",
      pistas: [
        {
          id: 1,
          texto: "Premio sin participación",
          esSenal: true,
          explicacion: "No puedes ganar un sorteo en el que nunca participaste"
        },
        {
          id: 2,
          texto: "Número privado",
          esSenal: true,
          explicacion: "Las empresas legítimas no suelen usar números privados"
        },
        {
          id: 3,
          texto: "Pago por adelantado",
          esSenal: true,
          explicacion: "Nunca debes pagar para recibir un premio legítimo"
        },
        {
          id: 4,
          texto: "Límite de tiempo",
          esSenal: true,
          explicacion: "La presión por decidir rápidamente es una táctica común de estafa"
        },
        {
          id: 5,
          texto: "Monto específico del premio",
          esSenal: false,
          explicacion: "Mencionar un monto específico no es necesariamente una señal de estafa"
        }
      ]
    }
  ];

  const verificarPista = (pistaId: number) => {
    if (!pistasEncontradas.includes(pistaId)) {
      const pista = casos[casoActual].pistas.find(p => p.id === pistaId);
      if (pista && pista.esSenal) {
        setPuntuacion(prev => prev + 20);
        setPistasEncontradas([...pistasEncontradas, pistaId]);
      }
      setMostrarExplicacion(pistaId);
    }
  };

  const siguienteCaso = () => {
    if (casoActual < casos.length - 1) {
      setCasoActual(casoActual + 1);
      setPistasEncontradas([]);
      setMostrarExplicacion(null);
      setCasoCompletado(false);
    }
  };

  const verificarCasoCompletado = () => {
    const pistasCorrectas = casos[casoActual].pistas.filter(p => p.esSenal).length;
    const pistasEncontradasCorrectas = pistasEncontradas.filter(id => 
      casos[casoActual].pistas.find(p => p.id === id)?.esSenal
    ).length;
    
    if (pistasEncontradasCorrectas === pistasCorrectas) {
      setCasoCompletado(true);
    }
  };

  // Verificar si el caso está completado cuando cambian las pistas encontradas
  useEffect(() => {
    verificarCasoCompletado();
  }, [pistasEncontradas]);

  return (
    <div className="flex flex-col items-center min-h-screen p-8 gap-8 font-[family-name:var(--font-geist-sans)]">
      <motion.header 
        className="w-full max-w-4xl flex items-center justify-between"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-4">
          <Link href="/ejercicios/juegos" className="flex items-center gap-2 text-gray-600 hover:text-gray-900">
            <FaArrowLeft />
            <span>Volver a Juegos</span>
          </Link>
        </div>
        <div className="flex items-center gap-2">
          <FaUserSecret className="text-2xl text-red-500" />
          <h1 className="text-2xl font-bold">Detective Digital</h1>
        </div>
      </motion.header>

      <main className="w-full max-w-4xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Panel del Caso */}
          <motion.div 
            className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">{casos[casoActual].titulo}</h2>
              <span className="font-bold">Puntuación: {puntuacion}</span>
            </div>
            <p className="mb-4">{casos[casoActual].descripcion}</p>
            {casos[casoActual].contexto && (
              <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg mb-4 font-mono text-sm whitespace-pre-wrap">
                {casos[casoActual].contexto}
              </div>
            )}
          </motion.div>

          {/* Panel de Pistas */}
          <motion.div 
            className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h2 className="text-xl font-bold mb-4">Señales Sospechosas</h2>
            <div className="space-y-4">
              {casos[casoActual].pistas.map((pista) => (
                <button
                  key={pista.id}
                  onClick={() => verificarPista(pista.id)}
                  className={`w-full p-4 rounded-lg transition-colors flex items-center justify-between ${
                    pistasEncontradas.includes(pista.id)
                      ? pista.esSenal
                        ? 'bg-green-100 dark:bg-green-900'
                        : 'bg-red-100 dark:bg-red-900'
                      : 'bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <FaSearch className={
                      pistasEncontradas.includes(pista.id)
                        ? pista.esSenal
                          ? 'text-green-500'
                          : 'text-red-500'
                        : 'text-gray-500'
                    } />
                    <span>{pista.texto}</span>
                  </div>
                  {pistasEncontradas.includes(pista.id) && (
                    pista.esSenal ? <FaCheck className="text-green-500" /> : <FaTimes className="text-red-500" />
                  )}
                </button>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Panel de Explicación */}
        {mostrarExplicacion !== null && (
          <motion.div
            className="mt-8 bg-blue-50 dark:bg-blue-950 p-6 rounded-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h3 className="font-bold mb-2">Explicación:</h3>
            <p>{casos[casoActual].pistas.find(p => p.id === mostrarExplicacion)?.explicacion}</p>
            {casoCompletado && casoActual < casos.length - 1 && (
              <button
                onClick={siguienteCaso}
                className="mt-4 bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors"
              >
                Siguiente caso
              </button>
            )}
            {casoCompletado && casoActual === casos.length - 1 && (
              <div className="mt-4 text-center">
                <h4 className="font-bold text-lg mb-2">¡Has completado todos los casos!</h4>
                <p>Puntuación final: {puntuacion} puntos</p>
                <Link href="/ejercicios/juegos">
                  <button className="mt-4 bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition-colors">
                    Volver a Juegos
                  </button>
                </Link>
              </div>
            )}
          </motion.div>
        )}
      </main>
    </div>
  );
} 