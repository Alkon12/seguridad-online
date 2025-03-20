"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaShieldAlt, FaUnlockAlt, FaExclamationTriangle, FaGraduationCap } from "react-icons/fa";

export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen p-8 gap-8 font-[family-name:var(--font-geist-sans)]">
      <header className="w-full max-w-4xl text-center mt-8">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Seguridad en Línea para Adultos Mayores</h1>
        <p className="text-xl md:text-2xl">Aprenda a navegar de forma segura en internet</p>
      </header>

      <main className="w-full max-w-4xl flex flex-col gap-8">
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <Link href="/contrasenas" className="bg-blue-100 dark:bg-blue-900 rounded-xl p-6 flex flex-col items-center text-center hover:shadow-lg transition-all h-70">
              <div className="bg-blue-200 dark:bg-blue-800 p-4 rounded-full mb-4 text-4xl text-blue-700 dark:text-blue-300">
                <FaShieldAlt />
              </div>
              <h2 className="text-2xl font-bold mb-2">Contraseñas Seguras</h2>
              <p className="text-lg">Aprenda a crear contraseñas fuertes y por qué no reutilizarlas</p>
            </Link>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Link href="/phishing" className="bg-green-100 dark:bg-green-900 rounded-xl p-6 flex flex-col items-center text-center hover:shadow-lg transition-all h-70">
              <div className="bg-green-200 dark:bg-green-800 p-4 rounded-full mb-4 text-4xl text-green-700 dark:text-green-300">
                <FaUnlockAlt />
              </div>
              <h2 className="text-2xl font-bold mb-2">Identificar Phishing</h2>
              <p className="text-lg">Reconozca correos electrónicos sospechosos y enlaces maliciosos</p>
            </Link>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Link href="/fraudes" className="bg-purple-100 dark:bg-purple-900 rounded-xl p-6 flex flex-col items-center text-center hover:shadow-lg transition-all h-70">
              <div className="bg-purple-200 dark:bg-purple-800 p-4 rounded-full mb-4 text-4xl text-purple-700 dark:text-purple-300">
                <FaExclamationTriangle />
              </div>
              <h2 className="text-2xl font-bold mb-2">Fraudes y Estafas</h2>
              <p className="text-lg">Protéjase de estafas comunes y llamadas sospechosas</p>
            </Link>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Link href="/ejercicios" className="bg-red-100 dark:bg-red-900 rounded-xl p-6 flex flex-col items-center text-center hover:shadow-lg transition-all h-70">
              <div className="bg-red-200 dark:bg-red-800 p-4 rounded-full mb-4 text-4xl text-red-700 dark:text-red-300">
                <FaGraduationCap />
              </div>
              <h2 className="text-2xl font-bold mb-2">Ejercicios Prácticos</h2>
              <p className="text-lg">Practique lo aprendido con ejercicios interactivos y juegos educativos</p>
            </Link>
          </motion.div>
        </section>

        <section className="bg-gray-100 dark:bg-gray-800 rounded-xl p-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">¿Por qué es importante la seguridad en línea?</h2>
          <p className="text-lg md:text-xl mb-6">
            Navegar por internet puede ser divertido y útil, pero también presenta riesgos.
            Aprenda a protegerse mientras disfruta de los beneficios de la tecnología.
          </p>
          <Link href="/contrasenas" className="bg-foreground text-background px-6 py-3 rounded-full text-xl font-medium hover:opacity-90 transition-all">
            Comenzar ahora
          </Link>
        </section>
      </main>

      <footer className="w-full max-w-4xl text-center mt-auto py-8">
        <p className="text-lg">Proyecto educativo de seguridad en línea para adultos mayores</p>
      </footer>
    </div>
  );
}
