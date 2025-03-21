"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import { FaUnlockAlt, FaEnvelope, FaExclamationTriangle, FaCheck, FaTimes, FaUserShield, FaHome, FaArrowLeft } from "react-icons/fa";

export default function Phishing() {
  const [example1Answer, setExample1Answer] = useState<string | null>(null);
  const [example2Answer, setExample2Answer] = useState<string | null>(null);

  return (
    <div className="flex flex-col items-center min-h-screen p-8 gap-8 font-[family-name:var(--font-geist-sans)]">
      <motion.header 
        className="w-full max-w-4xl flex items-center justify-between"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Link href="/" className="flex items-center gap-2 text-gray-600 hover:text-gray-900">
          <FaArrowLeft />
          <span>Volver al Inicio</span>
        </Link>
      </motion.header>

      <motion.div
        className="w-full max-w-4xl text-center mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Identificar Phishing</h1>
        <p className="text-xl md:text-2xl">Aprenda a detectar correos electrónicos y sitios web fraudulentos</p>
      </motion.div>

      <main className="w-full max-w-4xl flex flex-col gap-12">
        {/* Video de introducción */}
        <motion.section 
          className="bg-green-50 dark:bg-green-950 rounded-xl p-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center flex items-center justify-center gap-3">
            <FaUnlockAlt className="text-green-600 dark:text-green-400" />
            Video: ¿Qué es el Phishing?
          </h2>
          <div className="aspect-video bg-gray-200 dark:bg-gray-800 rounded-lg flex items-center justify-center mb-6">
            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/M2HaMR3H0Cg?si=epx7Kv9zys6IUv7Y&amp;controls=0" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
          </div>
          <div className="text-lg space-y-4">
            <p>En este video, aprenderá qué es el phishing y por qué es una de las formas más comunes de ataque en línea.</p>
          </div>
        </motion.section>

        {/* Información educativa */}
        <motion.section 
          className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
            <FaExclamationTriangle className="text-yellow-500" />
            Señales de alerta de Phishing
          </h2>
          
          <div className="space-y-6 mb-8">
            <div className="border-l-4 border-green-500 pl-4 py-2">
              <h3 className="text-xl font-bold mb-2">¿Qué es el phishing?</h3>
              <p className="text-lg">El phishing es cuando alguien intenta engañarlo para que revele información personal como contraseñas o números de tarjetas de crédito haciéndose pasar por una entidad confiable.</p>
            </div>
            
            <h3 className="text-xl font-bold flex items-center gap-2">
              <FaEnvelope className="text-green-600 dark:text-green-400" />
              Cómo identificar correos sospechosos:
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div 
                className="bg-red-50 dark:bg-red-950 p-4 rounded-lg"
                whileHover={{ scale: 1.02 }}
              >
                <h4 className="font-bold text-lg mb-2">1. Remitente desconocido</h4>
                <p>Verifique siempre la dirección de correo del remitente. Si es diferente al dominio oficial, es sospechoso.</p>
                <p className="mt-2"><strong>Ejemplo:</strong> <span className="line-through">banco.seguro@gmail.com</span> vs <span className="underline">soporte@bancoseguro.com</span></p>
              </motion.div>

              <motion.div 
                className="bg-red-50 dark:bg-red-950 p-4 rounded-lg"
                whileHover={{ scale: 1.02 }}
              >
                <h4 className="font-bold text-lg mb-2">2. Errores ortográficos</h4>
                <p>Las empresas legítimas no suelen tener errores de ortografía o gramática en sus comunicaciones oficiales.</p>
              </motion.div>

              <motion.div 
                className="bg-red-50 dark:bg-red-950 p-4 rounded-lg"
                whileHover={{ scale: 1.02 }}
              >
                <h4 className="font-bold text-lg mb-2">3. Urgencia sospechosa</h4>
                <p>Mensajes que crean urgencia ("Su cuenta será suspendida", "Acción inmediata requerida") buscan que actúe sin pensar.</p>
              </motion.div>

              <motion.div 
                className="bg-red-50 dark:bg-red-950 p-4 rounded-lg"
                whileHover={{ scale: 1.02 }}
              >
                <h4 className="font-bold text-lg mb-2">4. Solicitud de información personal</h4>
                <p>Las organizaciones legítimas nunca le pedirán información sensible por correo electrónico.</p>
              </motion.div>
            </div>
          </div>

          <div className="space-y-6 mb-8">
            <h3 className="text-xl font-bold flex items-center gap-2">
              <FaExclamationTriangle className="text-yellow-500" />
              Señales de alerta en enlaces y archivos:
            </h3>
            
            <motion.div 
              className="bg-yellow-100 dark:bg-yellow-900 p-6 rounded-lg space-y-4"
              initial={{ opacity: 0.8 }}
              whileHover={{ opacity: 1, scale: 1.01 }}
            >
              <h4 className="font-bold text-lg">Enlaces sospechosos:</h4>
              <ul className="list-none pl-0 space-y-3 text-lg">
                <li className="flex items-center gap-2">
                  <FaCheck className="text-green-500" />
                  <span><strong>Verifique la URL</strong> - Coloque el cursor sobre el enlace (sin hacer clic) para ver la dirección real</span>
                </li>
                <li className="flex items-center gap-2">
                  <FaCheck className="text-green-500" />
                  <span><strong>Busque errores pequeños</strong> - Por ejemplo: <span className="line-through">www.bankofamerica.co</span> en vez de <span className="underline">www.bankofamerica.com</span></span>
                </li>
                <li className="flex items-center gap-2">
                  <FaCheck className="text-green-500" />
                  <span><strong>Desconfíe de acortadores de URL</strong> - Enlaces como bit.ly pueden ocultar sitios maliciosos</span>
                </li>
              </ul>
              
              <h4 className="font-bold text-lg mt-4">Archivos adjuntos peligrosos:</h4>
              <ul className="list-none pl-0 space-y-3 text-lg">
                <li className="flex items-center gap-2">
                  <FaCheck className="text-green-500" />
                  <span><strong>Nunca abra</strong> archivos adjuntos que no esperaba recibir</span>
                </li>
                <li className="flex items-center gap-2">
                  <FaCheck className="text-green-500" />
                  <span><strong>Tenga cuidado</strong> con extensiones como .exe, .zip o .doc que pueden contener malware</span>
                </li>
                <li className="flex items-center gap-2">
                  <FaCheck className="text-green-500" />
                  <span><strong>Verifique con el remitente</strong> por otro medio antes de abrir un archivo sospechoso</span>
                </li>
              </ul>
            </motion.div>
          </div>
          
          <motion.div 
            className="bg-green-100 dark:bg-green-900 p-6 rounded-lg"
            initial={{ opacity: 0.8 }}
            whileHover={{ opacity: 1, scale: 1.01 }}
          >
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <FaUserShield className="text-green-600 dark:text-green-400" />
              Qué hacer si recibe un correo sospechoso:
            </h3>
            <ol className="list-decimal pl-6 space-y-3 text-lg">
              <li><strong>No haga clic</strong> en enlaces ni descargue archivos adjuntos</li>
              <li><strong>No responda</strong> al correo electrónico</li>
              <li><strong>Reporte el correo</strong> como spam o phishing</li>
              <li><strong>Elimine el mensaje</strong> después de reportarlo</li>
              <li>Si es de un banco o servicio que usa, <strong>contacte directamente</strong> a la empresa por teléfono</li>
            </ol>
          </motion.div>
        </motion.section>

        {/* Simulador interactivo */}
        <motion.section 
          className="bg-green-100 dark:bg-green-900 rounded-xl p-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center flex items-center justify-center gap-3">
            <FaUnlockAlt className="text-green-600 dark:text-green-400" />
            Ejercicio: ¿Real o Phishing?
          </h2>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg mb-8">
            <h3 className="text-xl font-bold mb-4">Ejemplo 1: Correo de su banco</h3>
            
            <div className="border border-gray-300 dark:border-gray-600 rounded-lg p-4 mb-6">
              <div className="border-b pb-2 mb-2">
                <p><strong>De:</strong> bancoservicio@bancoconfiable.net</p>
                <p><strong>Asunto:</strong> URGENTE: Su cuenta ha sido bloqueada</p>
              </div>
              <div className="space-y-3">
                <p>Estimado cliente,</p>
                <p>Hemos detectado actividad sospechosa en su cuenta. Su acceso ha sido temporalmente suspendido.</p>
                <p>Para restablecer el acceso, haga clic en el siguiente enlace e ingrese su número de tarjeta, fecha de vencimiento y código de seguridad.</p>
                <p className="bg-blue-100 dark:bg-blue-900 p-2 rounded">www.banco-confiable-verificacion.com/restablecer</p>
                <p>Actúe inmediatamente o su cuenta será cerrada permanentemente.</p>
                <p>Servicio al Cliente<br/>Banco Confiable</p>
              </div>
            </div>
            
            <div className="flex flex-col gap-4">
              <p className="text-lg font-bold">¿Este correo es legítimo o phishing?</p>
              <div className="flex gap-4">
                <motion.button 
                  className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-lg text-lg font-medium flex-1"
                  onClick={() => setExample1Answer("legitimo")}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Legítimo
                </motion.button>
                <motion.button 
                  className="bg-red-500 hover:bg-red-600 text-white p-3 rounded-lg text-lg font-medium flex-1"
                  onClick={() => setExample1Answer("phishing")}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Phishing
                </motion.button>
              </div>
              
              {example1Answer === "legitimo" && (
                <motion.div 
                  className="p-4 bg-red-100 dark:bg-red-900 rounded-lg mt-2"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <p className="text-lg flex items-center gap-2">
                    <FaTimes className="text-red-500" />
                    <strong>¡Incorrecto!</strong> Este es un correo de phishing.
                  </p>
                  <ul className="list-disc pl-6 mt-2">
                    <li>Crea una falsa sensación de urgencia</li>
                    <li>Solicita información personal sensible</li>
                    <li>El dominio del remitente no es oficial</li>
                    <li>El enlace es sospechoso</li>
                  </ul>
                </motion.div>
              )}
              
              {example1Answer === "phishing" && (
                <motion.div 
                  className="p-4 bg-green-100 dark:bg-green-900 rounded-lg mt-2"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                >
                  <p className="text-lg flex items-center gap-2">
                    <FaCheck className="text-green-500" />
                    <strong>¡Correcto!</strong> Este es un correo de phishing.
                  </p>
                  <ul className="list-disc pl-6 mt-2">
                    <li>Crea una falsa sensación de urgencia</li>
                    <li>Solicita información personal sensible</li>
                    <li>El dominio del remitente no es oficial</li>
                    <li>El enlace es sospechoso</li>
                  </ul>
                </motion.div>
              )}
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Ejemplo 2: Correo de actualización</h3>
            
            <div className="border border-gray-300 dark:border-gray-600 rounded-lg p-4 mb-6">
              <div className="border-b pb-2 mb-2">
                <p><strong>De:</strong> noreply@microsoft.com</p>
                <p><strong>Asunto:</strong> Actualización de seguridad disponible</p>
              </div>
              <div className="space-y-3">
                <p>Hola,</p>
                <p>Hay una nueva actualización de seguridad disponible para su cuenta de Microsoft.</p>
                <p>Para mantener su cuenta segura, le recomendamos acceder a su panel de configuración y revisar sus opciones de seguridad.</p>
                <p>Visite <span className="bg-blue-100 dark:bg-blue-900 p-1 rounded">https://account.microsoft.com</span> e inicie sesión con sus credenciales habituales.</p>
                <p>Atentamente,<br/>El equipo de Microsoft</p>
              </div>
            </div>
            
            <div className="flex flex-col gap-4">
              <p className="text-lg font-bold">¿Este correo es legítimo o phishing?</p>
              <div className="flex gap-4">
                <motion.button 
                  className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-lg text-lg font-medium flex-1"
                  onClick={() => setExample2Answer("legitimo")}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Legítimo
                </motion.button>
                <motion.button 
                  className="bg-red-500 hover:bg-red-600 text-white p-3 rounded-lg text-lg font-medium flex-1"
                  onClick={() => setExample2Answer("phishing")}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Phishing
                </motion.button>
              </div>
              
              {example2Answer === "legitimo" && (
                <motion.div 
                  className="p-4 bg-green-100 dark:bg-green-900 rounded-lg mt-2"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                >
                  <p className="text-lg flex items-center gap-2">
                    <FaCheck className="text-green-500" />
                    <strong>¡Correcto!</strong> Este parece ser un correo legítimo.
                  </p>
                  <ul className="list-disc pl-6 mt-2">
                    <li>El remitente es el dominio oficial</li>
                    <li>No crea urgencia innecesaria</li>
                    <li>No solicita información personal</li>
                    <li>El enlace es a la página oficial</li>
                    <li>Aún así, siempre es mejor escribir manualmente la URL en su navegador</li>
                  </ul>
                </motion.div>
              )}
              
              {example2Answer === "phishing" && (
                <motion.div 
                  className="p-4 bg-red-100 dark:bg-red-900 rounded-lg mt-2"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <p className="text-lg flex items-center gap-2">
                    <FaTimes className="text-red-500" />
                    <strong>¡Incorrecto!</strong> Este parece ser un correo legítimo.
                  </p>
                  <ul className="list-disc pl-6 mt-2">
                    <li>El remitente es el dominio oficial</li>
                    <li>No crea urgencia innecesaria</li>
                    <li>No solicita información personal</li>
                    <li>El enlace es a la página oficial</li>
                    <li>Aún así, siempre es mejor escribir manualmente la URL en su navegador</li>
                  </ul>
                </motion.div>
              )}
            </div>
          </div>
        </motion.section>

        {/* Navegación */}
        <div className="flex justify-between w-full mt-8">
          <Link href="/contrasenas" className="bg-gray-200 dark:bg-gray-800 px-6 py-3 rounded-full text-xl font-medium hover:opacity-90 transition-all flex items-center gap-2">
            ← Contraseñas
          </Link>
          <Link href="/fraudes" className="bg-foreground text-background px-6 py-3 rounded-full text-xl font-medium hover:opacity-90 transition-all flex items-center gap-2">
            Siguiente: Fraudes →
          </Link>
        </div>
      </main>

      <footer className="w-full max-w-4xl text-center mt-auto py-8">
        <p className="text-lg">Proyecto educativo de seguridad en línea para adultos mayores</p>
      </footer>
    </div>
  );
}
