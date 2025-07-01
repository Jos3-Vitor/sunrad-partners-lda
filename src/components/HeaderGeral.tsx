"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDown } from "lucide-react";
import { Fragment } from "react";

export default function HeaderGeral() {
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
    <header className="relative w-full z-50 bg-gradient-to-r from-blue-900 to-blue-700 backdrop-blur-sm text-white px-8 py-4 flex justify-between items-center">
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
                          active ? "bg-blue-50 text-gray-900" : "text-gray-700"
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
          <Menu.Button className="flex items-center gap-1 hover:text-white/80 transition-colors">
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
                          active ? "bg-blue-50 text-gray-900" : "text-gray-700"
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
  );
}
