"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaShieldAlt, FaLock, FaKey, FaCheck, FaTimes, FaHome, FaArrowLeft } from "react-icons/fa";
import { useState, useEffect } from "react";

export default function Contrasenas() {
  const [password, setPassword] = useState("");
  const [passwordStrength, setPasswordStrength] = useState(0);
  const [strengthMessage, setStrengthMessage] = useState("Por favor ingrese una contraseña");
  const [generatedPassword, setGeneratedPassword] = useState("N8$pR2!xZ@5bF7");
  const [passwordLength, setPasswordLength] = useState(12);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);

  // Evaluador de fortaleza de contraseña
  useEffect(() => {
    if (!password) {
      setPasswordStrength(0);
      setStrengthMessage("Por favor ingrese una contraseña");
      return;
    }

    // Criterios para evaluar la fortaleza
    const hasMinLength = password.length >= 8;
    const hasGoodLength = password.length >= 12;
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasNumbers = /[0-9]/.test(password);
    const hasSymbols = /[^A-Za-z0-9]/.test(password);
    const hasNoCommonWords = !/(password|123456|qwerty|admin|welcome|letmein)/i.test(password);

    // Calcular fortaleza (0-100)
    let strength = 0;
    if (hasMinLength) strength += 10;
    if (hasGoodLength) strength += 20;
    if (hasUppercase) strength += 15;
    if (hasLowercase) strength += 15;
    if (hasNumbers) strength += 15;
    if (hasSymbols) strength += 15;
    if (hasNoCommonWords) strength += 10;

    // Mensaje basado en la fortaleza
    let message = "";
    if (strength < 30) {
      message = "Muy débil - Fácil de adivinar";
    } else if (strength < 60) {
      message = "Débil - Necesita mejorar";
    } else if (strength < 80) {
      message = "Moderada - Puede ser más fuerte";
    } else {
      message = "Fuerte - Excelente contraseña";
    }

    setPasswordStrength(strength);
    setStrengthMessage(message);
  }, [password]);

  // Generador de contraseñas
  const generatePassword = () => {
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()-_=+[]{}|;:,.<>?";

    let allowedChars = lowercaseChars;
    if (includeUppercase) allowedChars += uppercaseChars;
    if (includeNumbers) allowedChars += numberChars;
    if (includeSymbols) allowedChars += symbolChars;

    let newPassword = "";
    for (let i = 0; i < passwordLength; i++) {
      const randomIndex = Math.floor(Math.random() * allowedChars.length);
      newPassword += allowedChars[randomIndex];
    }

    setGeneratedPassword(newPassword);
  };

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
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Contraseñas Seguras</h1>
        <p className="text-xl md:text-2xl">Aprenda a crear y gestionar contraseñas seguras</p>
      </motion.div>

      <main className="w-full max-w-4xl flex flex-col gap-12">
        {/* Video de introducción */}
        <motion.section 
          className="bg-blue-50 dark:bg-blue-950 rounded-xl p-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center flex items-center justify-center gap-3">
            <FaLock className="text-blue-600 dark:text-blue-400" />
            Video: Importancia de las Contraseñas Seguras
          </h2>
          <div className="aspect-video bg-gray-200 dark:bg-gray-800 rounded-lg flex items-center justify-center mb-6">
            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/boQKl5BkPfs?si=Ehb4sX5Q2vToe5CI&amp;controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
          <div className="text-lg space-y-4">
            <p>En este video, aprenderá por qué las contraseñas seguras son su primera línea de defensa en internet.</p>
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
            <FaShieldAlt className="text-blue-600 dark:text-blue-400" />
            ¿Qué hace que una contraseña sea segura?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Una contraseña fuerte tiene:</h3>
              <ul className="list-none pl-0 space-y-3 text-lg">
                <li className="flex items-center gap-2">
                  <FaCheck className="text-green-500" />
                  <span><span className="font-bold">Longitud:</span> Al menos 12 caracteres</span>
                </li>
                <li className="flex items-center gap-2">
                  <FaCheck className="text-green-500" />
                  <span><span className="font-bold">Complejidad:</span> Combinación de mayúsculas, minúsculas, números y símbolos</span>
                </li>
                <li className="flex items-center gap-2">
                  <FaCheck className="text-green-500" />
                  <span><span className="font-bold">Unicidad:</span> Diferentes para cada sitio o servicio</span>
                </li>
                <li className="flex items-center gap-2">
                  <FaCheck className="text-green-500" />
                  <span><span className="font-bold">Sin información personal:</span> Evite fechas de nacimiento, nombres o palabras comunes</span>
                </li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Ejemplos:</h3>
              <div className="space-y-3 text-lg">
                <p className="bg-red-100 dark:bg-red-900 p-3 rounded flex items-center gap-2">
                  <FaTimes className="text-red-500" />
                  <span>Débil: "password123"</span>
                </p>
                <p className="bg-yellow-100 dark:bg-yellow-900 p-3 rounded flex items-center gap-2">
                  <span className="text-yellow-500 text-xl">⚠️</span>
                  <span>Medio: "Familia2024"</span>
                </p>
                <p className="bg-green-100 dark:bg-green-900 p-3 rounded flex items-center gap-2">
                  <FaCheck className="text-green-500" />
                  <span>Fuerte: "M3rc@d0*Fl0r&99!"</span>
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-4 mb-8">
            <h3 className="text-xl font-bold">¿Por qué no reutilizar contraseñas?</h3>
            <p className="text-lg">Si usa la misma contraseña en múltiples sitios y uno es hackeado, todos sus otros servicios quedan vulnerables.</p>
            <div className="bg-yellow-50 dark:bg-yellow-950 p-4 rounded-lg border-l-4 border-yellow-500">
              <p className="text-lg">Imagínese que tiene la misma llave para su casa, auto y trabajo. Si alguien encuentra esa llave, tendrá acceso a todo.</p>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold">Recomendaciones:</h3>
            <ul className="list-none pl-0 space-y-3 text-lg">
              <li className="flex items-center gap-2">
                <FaCheck className="text-green-500" />
                <span>Use un gestor de contraseñas como LastPass o Bitwarden</span>
              </li>
              <li className="flex items-center gap-2">
                <FaCheck className="text-green-500" />
                <span>Active la autenticación de dos factores cuando esté disponible</span>
              </li>
              <li className="flex items-center gap-2">
                <FaCheck className="text-green-500" />
                <span>Cambie regularmente sus contraseñas más importantes</span>
              </li>
              <li className="flex items-center gap-2">
                <FaCheck className="text-green-500" />
                <span>No comparta sus contraseñas con nadie</span>
              </li>
            </ul>
          </div>
        </motion.section>

        {/* Simulador interactivo */}
        <motion.section 
          className="bg-blue-100 dark:bg-blue-900 rounded-xl p-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center flex items-center justify-center gap-3">
            <FaKey className="text-blue-600 dark:text-blue-400" />
            Práctica: Creador de Contraseñas Seguras
          </h2>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg mb-8">
            <h3 className="text-xl font-bold mb-4">Pruebe su contraseña</h3>
            <div className="flex flex-col gap-4">
              <input 
                type="text" 
                placeholder="Escriba una contraseña para evaluarla" 
                className="p-4 border border-gray-300 dark:border-gray-600 rounded-lg text-lg w-full" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                <div 
                  className={`h-full ${
                    passwordStrength < 30 ? 'bg-red-500' : 
                    passwordStrength < 60 ? 'bg-yellow-500' : 
                    passwordStrength < 80 ? 'bg-blue-500' : 'bg-green-500'
                  }`} 
                  style={{ width: `${passwordStrength}%` }}
                ></div>
              </div>
              <p className={`text-lg ${
                passwordStrength < 30 ? 'text-red-500' : 
                passwordStrength < 60 ? 'text-yellow-500' : 
                passwordStrength < 80 ? 'text-blue-500' : 'text-green-500'
              }`}>
                Resultado: {strengthMessage}
              </p>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Generador de contraseñas</h3>
            <div className="flex flex-col gap-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-lg mb-2">Longitud:</label>
                  <select 
                    className="p-3 border border-gray-300 dark:border-gray-600 rounded-lg text-lg w-full"
                    value={passwordLength}
                    onChange={(e) => setPasswordLength(Number(e.target.value))}
                  >
                    <option value={8}>8 caracteres</option>
                    <option value={12}>12 caracteres</option>
                    <option value={16}>16 caracteres</option>
                    <option value={20}>20 caracteres</option>
                  </select>
                </div>
                <div>
                  <label className="block text-lg mb-2">Incluir:</label>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <input 
                        type="checkbox" 
                        checked={includeUppercase} 
                        onChange={(e) => setIncludeUppercase(e.target.checked)}
                        className="w-5 h-5"
                      /> 
                      <span>Mayúsculas</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <input 
                        type="checkbox" 
                        checked={includeNumbers} 
                        onChange={(e) => setIncludeNumbers(e.target.checked)}
                        className="w-5 h-5"
                      /> 
                      <span>Números</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <input 
                        type="checkbox" 
                        checked={includeSymbols} 
                        onChange={(e) => setIncludeSymbols(e.target.checked)}
                        className="w-5 h-5"
                      /> 
                      <span>Símbolos</span>
                    </div>
                  </div>
                </div>
              </div>
              <motion.button 
                className="bg-blue-500 hover:bg-blue-600 text-white p-4 rounded-lg text-xl font-medium mt-4"
                onClick={generatePassword}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Generar contraseña segura
              </motion.button>
              <motion.div 
                className="p-4 bg-gray-100 dark:bg-gray-900 rounded-lg mt-2"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 0.5 }}
              >
                <p className="text-lg font-mono">{generatedPassword}</p>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Navegación */}
        <div className="flex justify-between w-full mt-8">
          <Link href="/" className="bg-gray-200 dark:bg-gray-800 px-6 py-3 rounded-full text-xl font-medium hover:opacity-90 transition-all flex items-center gap-2">
            ← Inicio
          </Link>
          <Link href="/phishing" className="bg-foreground text-background px-6 py-3 rounded-full text-xl font-medium hover:opacity-90 transition-all flex items-center gap-2">
            Siguiente: Phishing →
          </Link>
        </div>
      </main>

      <footer className="w-full max-w-4xl text-center mt-auto py-8">
        <p className="text-lg">Proyecto educativo de seguridad en línea para adultos mayores</p>
      </footer>
    </div>
  );
}
