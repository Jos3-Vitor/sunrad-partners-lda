"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";

export default function HeroSection() {
  const [showPolicies, setShowPolicies] = useState(false);
  const [showLanguages, setShowLanguages] = useState(false);

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Vídeo de fundo */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
        src="/videos/crypto-changing-chart-video.mp4"
      />

      {/* Header dentro da hero */}
      <header className="flex justify-between items-center px-8 py-4 bg-gradient-to-r from-blue-900/30 to-blue-700/30 backdrop-blur-sm text-white">
        <div className="flex items-center cursor-pointer">
          <Image
            src="/images/LogoSunRad1_transparent.png"
            alt="Logo SunRad"
            width={48}
            height={48}
            className="object-contain"
          />{" "}
        </div>

        <nav className="flex items-center gap-8 font-medium">
          <Link href="#home" className="hover:text-white/80 transition-colors">
            HOME
          </Link>
          <Link href="/sobre" className="hover:text-white/80 transition-colors">
            SOBRE
          </Link>
          <Link
            href="/servicos"
            className="hover:text-white/80 transition-colors"
          >
            SERVIÇOS
          </Link>
          <Link
            href="/contato"
            className="hover:text-white/80 transition-colors"
          >
            CONTATO
          </Link>

          <div className="relative">
            <button
              onClick={() => setShowPolicies(!showPolicies)}
              className="flex items-center gap-1 hover:text-white/80 transition-colors"
            >
              POLÍTICAS ▼
            </button>
            {showPolicies && (
              <ul className="absolute right-0 mt-2 w-40 bg-white text-black rounded shadow-lg border border-blue-200">
                <li className="px-4 py-2 hover:bg-blue-50 cursor-pointer">
                  Privacidade
                </li>
                <li className="px-4 py-2 hover:bg-blue-50 cursor-pointer">
                  Termos de Uso
                </li>
                <li className="px-4 py-2 hover:bg-blue-50 cursor-pointer">
                  Cookies
                </li>
              </ul>
            )}
          </div>

          <div className="relative">
            <button
              onClick={() => setShowLanguages(!showLanguages)}
              className="flex items-center gap-1 hover:text-white/80 transition-colors"
            >
              <span>🇧🇷</span> PT ▼
            </button>
            {showLanguages && (
              <ul className="absolute right-0 mt-2 w-32 bg-white text-black rounded shadow-lg border border-blue-200">
                <li className="px-4 py-2 hover:bg-blue-50 cursor-pointer flex items-center gap-2">
                  <span>🇺🇸</span> EN
                </li>
                <li className="px-4 py-2 hover:bg-blue-50 cursor-pointer flex items-center gap-2">
                  <span>🇧🇷</span> PT
                </li>
                <li className="px-4 py-2 hover:bg-blue-50 cursor-pointer flex items-center gap-2">
                  <span>🇪🇸</span> ES
                </li>
              </ul>
            )}
          </div>
        </nav>
      </header>

      {/* Texto animado centralizado */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative z-10 flex flex-col items-center justify-center h-[calc(100vh-64px)] text-center px-6 mt-4"
      >
        <h1 className="text-white text-5xl md:text-6xl font-bold mb-4 drop-shadow-lg">
          SunRad Partners
        </h1>
        <p className="text-white text-lg md:text-xl max-w-2xl drop-shadow-md">
          Expertise global em consultoria financeira estratégica para
          empresários, gestores de patrimônio e investidores institucionais.
        </p>
      </motion.div>
    </section>
  );
}
