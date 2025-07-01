"use client";

import Image from "next/image";
import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

export default function HeroSection() {
  const politicas = [
    { label: "Privacidade", href: "/site/politica/privacidade" },
    { label: "Termos de Uso", href: "/site/politica/termos" },
    { label: "Cookies", href: "/site/politica/cookies" },
    { label: "ESG", href: "/site/politica/esg" },
    { label: "Uso de Dados", href: "/site/politica/uso-de-dados" },
  ];

  const idiomas = [
    { label: "EN", icon: "🇺🇸" },
    { label: "PT", icon: "🇧🇷" },
    { label: "ES", icon: "🇪🇸" },
  ];

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
      <header className="flex justify-between items-center px-8 py-4 bg-black/40 backdrop-blur-sm drop-shadow-md text-white">
        <div className="flex items-center gap-3 cursor-pointer">
          <Image
            src="/images/logo-sunrad.png"
            alt="Logo"
            width={60}
            height={60}
            className="w-15 h-15 object-contain"
          />
          ✅ 5.
          <span className="font-bold text-xl text-white drop-shadow-md select-none">
            SunRad
          </span>
        </div>

        <nav className="flex items-center gap-6 font-medium">
          <a href="#home" className="hover:underline">
            Home
          </a>
          <Link href="/sobre" className="hover:underline">
            Sobre Nós
          </Link>
          <Link href="/servicos" className="hover:underline">
            Serviços
          </Link>
          <Link href="/contato" className="hover:underline">
            Contato
          </Link>

          {/* Dropdown Políticas */}
          <Menu as="div" className="relative">
            <Menu.Button className="flex items-center gap-1 hover:text-white/80 transition-colors">
              POLÍTICAS <ChevronDown className="w-4 h-4" />
            </Menu.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-150"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 mt-2 w-44 bg-white text-black rounded shadow-lg border border-blue-200 z-50">
                <div className="py-1">
                  {politicas.map(({ label, href }) => (
                    <Menu.Item key={href}>
                      {({ active }) => (
                        <Link
                          href={href}
                          className={`block px-4 py-2 text-sm ${
                            active
                              ? "bg-blue-50 text-gray-900"
                              : "text-gray-700"
                          }`}
                        >
                          {label}
                        </Link>
                      )}
                    </Menu.Item>
                  ))}
                </div>
              </Menu.Items>
            </Transition>
          </Menu>

          {/* Dropdown Idiomas */}
          <Menu as="div" className="relative">
            <Menu.Button className="flex items-center gap-1 hover:underline">
              <span>🇧🇷</span> PT <ChevronDown className="w-4 h-4" />
            </Menu.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-150"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 mt-2 w-32 bg-white text-black rounded shadow-lg border border-blue-200 z-50">
                <div className="py-1">
                  {idiomas.map(({ label, icon }) => (
                    <Menu.Item key={label}>
                      {({ active }) => (
                        <Link
                          href={`/${label.toLowerCase()}${
                            typeof window !== "undefined"
                              ? window.location.pathname.slice(3)
                              : ""
                          }`}
                          className={`flex items-center gap-2 w-full px-4 py-2 text-sm text-left ${
                            active
                              ? "bg-blue-50 text-gray-900"
                              : "text-gray-700"
                          }`}
                          locale={label.toLowerCase()}
                        >
                          <span>{icon}</span> {label}
                        </Link>
                      )}
                    </Menu.Item>
                  ))}
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
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
