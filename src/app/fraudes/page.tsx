"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import { FaExclamationTriangle, FaPhoneAlt, FaUserShield, FaCheck, FaTimes, FaCommentDots, FaLock } from "react-icons/fa";

export default function Fraudes() {
  const [ejemplo1Respuesta, setEjemplo1Respuesta] = useState<string | null>(null);
  const [ejemplo2Respuesta, setEjemplo2Respuesta] = useState<string | null>(null);

  return (
    <div className="flex flex-col items-center min-h-screen p-8 gap-8 font-[family-name:var(--font-geist-sans)]">
      <motion.header 
        className="w-full max-w-4xl text-center mt-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Fraudes en Línea y Llamadas Sospechosas</h1>
        <p className="text-xl md:text-2xl">Aprenda a identificar estafas comunes y proteger su información personal</p>
      </motion.header>

      <main className="w-full max-w-4xl flex flex-col gap-12">
        {/* Video de introducción */}
        <motion.section 
          className="bg-purple-50 dark:bg-purple-950 rounded-xl p-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center flex items-center justify-center gap-3">
            <FaExclamationTriangle className="text-yellow-500" />
            Video: Tipos de Fraudes Comunes
          </h2>
          <div className="aspect-video bg-gray-200 dark:bg-gray-800 rounded-lg flex items-center justify-center mb-6">
            <p className="text-lg">Video embed - Explicación sobre fraudes comunes</p>
          </div>
          <div className="text-lg space-y-4">
            <p>En este video, conocerá los fraudes más habituales y cómo evitar caer en ellos.</p>
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
            <FaCommentDots className="text-purple-600 dark:text-purple-400" />
            Estafas Comunes en WhatsApp y SMS
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            <motion.div 
              className="bg-purple-100 dark:bg-purple-900 p-6 rounded-lg"
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="text-xl font-bold mb-4">Suplantación de identidad</h3>
              <div className="flex gap-4 items-start mb-4">
                <div className="bg-purple-200 dark:bg-purple-800 p-3 rounded-full">
                  <FaUserShield className="text-purple-700 dark:text-purple-300 text-2xl" />
                </div>
                <div>
                  <p className="text-lg mb-2">"Hola mamá, este es mi nuevo número. Necesito que me envíes dinero para una emergencia."</p>
                  <p className="font-bold text-red-600 dark:text-red-400">¡ALERTA! Estafadores se hacen pasar por familiares.</p>
                </div>
              </div>
              <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded-lg">
                <p className="font-bold">Cómo protegerse:</p>
                <ul className="list-none pl-0 mt-2">
                  <li className="flex items-center gap-2">
                    <FaCheck className="text-green-500 flex-shrink-0" />
                    <span>Siempre verifique la identidad llamando al número original que conoce</span>
                  </li>
                  <li className="flex items-center gap-2 mt-2">
                    <FaCheck className="text-green-500 flex-shrink-0" />
                    <span>Nunca envíe dinero sin confirmar por otro medio</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            <motion.div 
              className="bg-purple-100 dark:bg-purple-900 p-6 rounded-lg"
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="text-xl font-bold mb-4">Falsos premios y sorteos</h3>
              <div className="flex gap-4 items-start mb-4">
                <div className="bg-purple-200 dark:bg-purple-800 p-3 rounded-full">
                  <FaExclamationTriangle className="text-yellow-500 dark:text-yellow-300 text-2xl" />
                </div>
                <div>
                  <p className="text-lg mb-2">"¡Felicidades! Ha ganado un iPhone. Haga clic aquí para reclamar su premio."</p>
                  <p className="font-bold text-red-600 dark:text-red-400">¡ALERTA! Si no participó en un concurso, no puede ganar nada.</p>
                </div>
              </div>
              <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded-lg">
                <p className="font-bold">Cómo protegerse:</p>
                <ul className="list-none pl-0 mt-2">
                  <li className="flex items-center gap-2">
                    <FaCheck className="text-green-500 flex-shrink-0" />
                    <span>Las empresas legítimas no anuncian premios por SMS</span>
                  </li>
                  <li className="flex items-center gap-2 mt-2">
                    <FaCheck className="text-green-500 flex-shrink-0" />
                    <span>Nunca pague para recibir un premio (tasas, impuestos, envío)</span>
                  </li>
                  <li className="flex items-center gap-2 mt-2">
                    <FaCheck className="text-green-500 flex-shrink-0" />
                    <span>No comparta información personal para "verificar su identidad"</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
            <FaLock className="text-red-600 dark:text-red-400" />
            Estafas de "Cuenta Bloqueada"
          </h2>
          
          <motion.div 
            className="bg-orange-100 dark:bg-orange-900 p-6 rounded-lg mb-10"
            whileHover={{ scale: 1.01 }}
          >
            <div className="flex gap-4 items-start mb-6">
              <div className="bg-orange-200 dark:bg-orange-800 p-3 rounded-full">
                <FaExclamationTriangle className="text-yellow-500 dark:text-yellow-300 text-2xl" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Mensajes de alerta falsos</h3>
                <p className="text-lg my-2">"Su cuenta bancaria ha sido bloqueada por actividad sospechosa. Confirme sus datos para desbloquearla."</p>
                <p className="font-bold text-red-600 dark:text-red-400">¡ALERTA! Los bancos nunca le pedirán información completa por mensajes.</p>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
              <p className="font-bold text-lg mb-2">Señales de advertencia:</p>
              <ul className="list-none pl-0 space-y-2 mb-4">
                <li className="flex items-center gap-2">
                  <FaExclamationTriangle className="text-yellow-500 flex-shrink-0" />
                  <span>Crean urgencia para que actúe sin pensar</span>
                </li>
                <li className="flex items-center gap-2">
                  <FaExclamationTriangle className="text-yellow-500 flex-shrink-0" />
                  <span>Solicitan información personal o bancaria</span>
                </li>
                <li className="flex items-center gap-2">
                  <FaExclamationTriangle className="text-yellow-500 flex-shrink-0" />
                  <span>Contienen enlaces a sitios falsos que imitan a empresas reales</span>
                </li>
                <li className="flex items-center gap-2">
                  <FaExclamationTriangle className="text-yellow-500 flex-shrink-0" />
                  <span>Pueden tener errores de ortografía o gramática</span>
                </li>
              </ul>
              
              <div className="border-t pt-4">
                <p className="font-bold text-lg mb-2">Qué hacer:</p>
                <ul className="list-none pl-0 space-y-2">
                  <li className="flex items-center gap-2">
                    <FaCheck className="text-green-500 flex-shrink-0" />
                    <span>Nunca haga clic en enlaces de mensajes sospechosos</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <FaCheck className="text-green-500 flex-shrink-0" />
                    <span>Contacte directamente a su banco desde la aplicación oficial o el número en su tarjeta</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <FaCheck className="text-green-500 flex-shrink-0" />
                    <span>No responda al mensaje ni llame a números proporcionados en él</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
            <FaPhoneAlt className="text-red-600 dark:text-red-400" />
            Llamadas Telefónicas Sospechosas
          </h2>
          
          <div className="space-y-6">
            <div className="border-l-4 border-red-500 pl-4 py-2">
              <h3 className="text-xl font-bold mb-2">¿Cómo identificarlas?</h3>
              <p className="text-lg">Las llamadas fraudulentas suelen crear una sensación de urgencia o miedo para obtener información personal o dinero.</p>
            </div>
            
            <motion.div 
              className="bg-red-100 dark:bg-red-900 p-6 rounded-lg space-y-4"
              whileHover={{ scale: 1.01 }}
            >
              <h4 className="font-bold text-lg">Tipos comunes de llamadas sospechosas:</h4>
              
              <motion.div 
                className="bg-white dark:bg-gray-800 p-4 rounded-lg mb-3"
                whileHover={{ scale: 1.01 }}
              >
                <p className="font-bold">1. Soporte técnico falso</p>
                <p>"Somos de Microsoft/Apple y detectamos un virus peligroso en su computadora"</p>
                <p className="text-sm italic mt-1">Buscan acceso remoto a su dispositivo o venderle software innecesario</p>
              </motion.div>
              
              <motion.div 
                className="bg-white dark:bg-gray-800 p-4 rounded-lg mb-3"
                whileHover={{ scale: 1.01 }}
              >
                <p className="font-bold">2. Impuestos o multas gubernamentales</p>
                <p>"Es del gobierno y debe pagar inmediatamente o será arrestado"</p>
                <p className="text-sm italic mt-1">Las agencias gubernamentales no amenazan por teléfono</p>
              </motion.div>
              
              <motion.div 
                className="bg-white dark:bg-gray-800 p-4 rounded-lg"
                whileHover={{ scale: 1.01 }}
              >
                <p className="font-bold">3. Supuesta familia en problemas</p>
                <p>"Su nieto está en la cárcel y necesita dinero para la fianza"</p>
                <p className="text-sm italic mt-1">Siempre verifique con otros familiares antes de enviar dinero</p>
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="bg-green-100 dark:bg-green-900 p-6 rounded-lg"
              whileHover={{ scale: 1.01 }}
            >
              <h4 className="font-bold text-lg mb-3">Qué hacer ante llamadas sospechosas:</h4>
              <ol className="list-none pl-0 space-y-3 text-lg">
                <li className="flex items-center gap-2">
                  <div className="bg-green-200 dark:bg-green-800 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">1</div>
                  <span><strong>Mantenga la calma</strong> y no se deje presionar</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="bg-green-200 dark:bg-green-800 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">2</div>
                  <span><strong>Nunca dé</strong> información personal, contraseñas o datos bancarios</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="bg-green-200 dark:bg-green-800 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">3</div>
                  <span><strong>Cuelgue</strong> si sospecha que es una estafa</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="bg-green-200 dark:bg-green-800 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">4</div>
                  <span><strong>Verifique</strong> llamando directamente a la empresa o institución por su número oficial</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="bg-green-200 dark:bg-green-800 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">5</div>
                  <span><strong>Reporte</strong> las llamadas sospechosas a las autoridades</span>
                </li>
              </ol>
            </motion.div>
          </div>
        </motion.section>

        {/* Simulador interactivo */}
        <motion.section 
          className="bg-purple-100 dark:bg-purple-900 rounded-xl p-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center flex items-center justify-center gap-3">
            <FaUserShield className="text-purple-600 dark:text-purple-400" />
            Práctica: Identificando Estafas
          </h2>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg mb-8">
            <h3 className="text-xl font-bold mb-4">Escenario 1: Mensaje de WhatsApp</h3>
            
            <div className="border border-gray-300 dark:border-gray-600 rounded-lg p-4 mb-6">
              <div className="flex items-start gap-3 mb-4">
                <div className="bg-green-200 dark:bg-green-800 p-2 rounded-full">
                  <FaUserShield className="text-green-700 dark:text-green-300 text-xl" />
                </div>
                <div>
                  <p className="font-bold">+52 1 555 123 4567</p>
                  <p className="text-xs text-gray-500">15:30</p>
                </div>
              </div>
              <div className="space-y-3 pl-10">
                <p>Hola tía, soy tu sobrino Carlos.</p>
                <p>Perdí mi teléfono y este es mi nuevo número.</p>
                <p>Estoy en un apuro, necesito que me prestes $500 para pagar una factura urgente.</p>
                <p>Te puedo devolver el dinero la próxima semana.</p>
                <p>¿Me podrías hacer una transferencia ahora?</p>
              </div>
            </div>
            
            <div className="flex flex-col gap-4">
              <p className="text-lg font-bold">¿Qué haría usted en esta situación?</p>
              <div className="space-y-3">
                <motion.button 
                  className="bg-red-500 hover:bg-red-600 text-white p-3 rounded-lg text-lg font-medium w-full text-left px-4"
                  onClick={() => setEjemplo1Respuesta("transferir")}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Transferir el dinero de inmediato para ayudar
                </motion.button>
                <motion.button 
                  className="bg-yellow-500 hover:bg-yellow-600 text-white p-3 rounded-lg text-lg font-medium w-full text-left px-4"
                  onClick={() => setEjemplo1Respuesta("pedir_info")}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Pedirle más información sobre la factura
                </motion.button>
                <motion.button 
                  className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-lg text-lg font-medium w-full text-left px-4"
                  onClick={() => setEjemplo1Respuesta("verificar")}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Llamar al número original de su sobrino para verificar
                </motion.button>
              </div>
              
              {ejemplo1Respuesta === "transferir" && (
                <motion.div 
                  className="p-4 bg-red-100 dark:bg-red-900 rounded-lg mt-2"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <p className="text-lg flex items-center gap-2">
                    <FaTimes className="text-red-500" />
                    <strong>¡Cuidado!</strong> Esta es probablemente una estafa.
                  </p>
                  <p className="mt-2">Nunca debe enviar dinero sin verificar primero la identidad de quien lo solicita, especialmente si recibe un mensaje desde un número desconocido.</p>
                </motion.div>
              )}
              
              {ejemplo1Respuesta === "pedir_info" && (
                <motion.div 
                  className="p-4 bg-yellow-100 dark:bg-yellow-900 rounded-lg mt-2"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <p className="text-lg flex items-center gap-2">
                    <span className="text-yellow-500 text-xl">⚠️</span>
                    <strong>Mejor precaución.</strong> Aunque pedir más detalles parece razonable, un estafador tendrá respuestas preparadas.
                  </p>
                  <p className="mt-2">Es más seguro verificar directamente con su sobrino usando el número que ya conoce u otro método de contacto.</p>
                </motion.div>
              )}
              
              {ejemplo1Respuesta === "verificar" && (
                <motion.div 
                  className="p-4 bg-green-100 dark:bg-green-900 rounded-lg mt-2"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                >
                  <p className="text-lg flex items-center gap-2">
                    <FaCheck className="text-green-500" />
                    <strong>¡Correcto!</strong> Siempre debe verificar la identidad llamando al número que ya conoce.
                  </p>
                  <p className="mt-2">Esta es una estafa común donde los estafadores se hacen pasar por familiares para solicitar dinero.</p>
                </motion.div>
              )}
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Escenario 2: Llamada telefónica</h3>
            
            <div className="border border-gray-300 dark:border-gray-600 rounded-lg p-4 mb-6">
              <p className="italic text-lg mb-4">"Buenos días, le llamo del departamento técnico de Microsoft. Hemos detectado un virus peligroso en su computadora que está robando su información personal. Podemos solucionarlo ahora mismo si nos permite acceso remoto a su equipo..."</p>
              
              <div className="bg-yellow-100 dark:bg-yellow-900 p-3 rounded-lg">
                <p className="font-bold">Recuerde: Microsoft nunca llama proactivamente para ofrecer soporte técnico. Esta es una estafa común.</p>
              </div>
            </div>
            
            <div className="flex flex-col gap-4">
              <p className="text-lg font-bold">¿Cuál es la respuesta correcta?</p>
              <div className="space-y-3">
                <motion.button 
                  className="bg-red-500 hover:bg-red-600 text-white p-3 rounded-lg text-lg font-medium w-full text-left px-4"
                  onClick={() => setEjemplo2Respuesta("dar_acceso")}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Dar acceso remoto para solucionar el problema
                </motion.button>
                <motion.button 
                  className="bg-yellow-500 hover:bg-yellow-600 text-white p-3 rounded-lg text-lg font-medium w-full text-left px-4"
                  onClick={() => setEjemplo2Respuesta("pedir_info")}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Pedir más información sobre el virus
                </motion.button>
                <motion.button 
                  className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-lg text-lg font-medium w-full text-left px-4"
                  onClick={() => setEjemplo2Respuesta("colgar")}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Colgar inmediatamente y no proporcionar información
                </motion.button>
              </div>
              
              {ejemplo2Respuesta === "dar_acceso" && (
                <motion.div 
                  className="p-4 bg-red-100 dark:bg-red-900 rounded-lg mt-2"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <p className="text-lg flex items-center gap-2">
                    <FaTimes className="text-red-500" />
                    <strong>¡Peligro!</strong> Nunca dé acceso remoto a su computadora a personas desconocidas.
                  </p>
                  <p className="mt-2">Los estafadores podrían instalar software malicioso, robar sus datos personales o incluso bloquear su equipo y exigir un rescate para desbloquearlo.</p>
                </motion.div>
              )}
              
              {ejemplo2Respuesta === "pedir_info" && (
                <motion.div 
                  className="p-4 bg-yellow-100 dark:bg-yellow-900 rounded-lg mt-2"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <p className="text-lg flex items-center gap-2">
                    <span className="text-yellow-500 text-xl">⚠️</span>
                    <strong>No es la mejor opción.</strong> Continuar la conversación solo les da la oportunidad de convencerlo.
                  </p>
                  <p className="mt-2">Los estafadores están entrenados para sonar convincentes y tener respuestas técnicas que parecen reales.</p>
                </motion.div>
              )}
              
              {ejemplo2Respuesta === "colgar" && (
                <motion.div 
                  className="p-4 bg-green-100 dark:bg-green-900 rounded-lg mt-2"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                >
                  <p className="text-lg flex items-center gap-2">
                    <FaCheck className="text-green-500" />
                    <strong>¡Correcto!</strong> Colgar es la mejor opción.
                  </p>
                  <p className="mt-2">Las empresas tecnológicas como Microsoft, Apple o Google nunca lo llamarán para avisarle de problemas en su dispositivo.</p>
                </motion.div>
              )}
            </div>
          </div>
        </motion.section>

        {/* Navegación */}
        <div className="flex justify-between w-full mt-8">
          <Link href="/phishing" className="bg-gray-200 dark:bg-gray-800 px-6 py-3 rounded-full text-xl font-medium hover:opacity-90 transition-all flex items-center gap-2">
            ← Phishing
          </Link>
          <Link href="/" className="bg-foreground text-background px-6 py-3 rounded-full text-xl font-medium hover:opacity-90 transition-all flex items-center gap-2">
            Regresar al Inicio
          </Link>
        </div>
      </main>

      <footer className="w-full max-w-4xl text-center mt-auto py-8">
        <p className="text-lg">Proyecto educativo de seguridad en línea para adultos mayores</p>
      </footer>
    </div>
  );
}