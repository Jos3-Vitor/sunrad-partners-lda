"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function HeaderGeral() {
  const [showPolicies, setShowPolicies] = useState(false);
  const [showLanguages, setShowLanguages] = useState(false);

  return (
    <header className="w-full z-50 bg-gradient-to-r from-blue-900 to-blue-700 backdrop-blur-sm text-white px-8 py-4 flex justify-between items-center">
      {/* Logo */}
      <div className="flex items-center cursor-pointer">
        <Image
          src="/images/LogoSunRad1_transparent.png"
          alt="Logo SunRad"
          width={48}
          height={48}
          className="object-contain"
        />
      </div>

      {/* Navegação */}
      <nav className="flex items-center gap-8 font-medium relative">
        <Link href="/" className="hover:text-white/80 transition-colors">
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
        <Link href="/contato" className="hover:text-white/80 transition-colors">
          CONTATO
        </Link>

        {/* Dropdown Políticas */}
        <div className="relative">
          <button
            onClick={() => {
              setShowPolicies(!showPolicies);
              setShowLanguages(false);
            }}
            className="flex items-center gap-1 hover:text-white/80 transition-colors"
          >
            POLÍTICAS ▼
          </button>
          {showPolicies && (
            <ul className="absolute right-0 mt-2 w-40 bg-white text-black rounded shadow-lg border border-blue-200 z-50">
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

        {/* Dropdown Idiomas */}
        <div className="relative">
          <button
            onClick={() => {
              setShowLanguages(!showLanguages);
              setShowPolicies(false);
            }}
            className="flex items-center gap-1 hover:text-white/80 transition-colors"
          >
            <span>🇧🇷</span> PT ▼
          </button>
          {showLanguages && (
            <ul className="absolute right-0 mt-2 w-32 bg-white text-black rounded shadow-lg border border-blue-200 z-50">
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
  );
}
