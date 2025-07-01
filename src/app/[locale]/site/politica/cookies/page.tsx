"use client";

import { useState, useEffect } from "react";
import CookieConsent from "@/components/CookieConsent";
import HeaderGeral from "@/components/HeaderGeral";
import Footer from "@/components/Footer";
import { ChevronDown } from "lucide-react";

type Bloco = {
  titulo: string;
  conteudo: string;
};

export default function PoliticaCookiesPage() {
  const [abertos, setAbertos] = useState<Record<string, boolean>>({});

  const blocos: Bloco[] = [
    {
      titulo: "O que são cookies?",
      conteudo:
        "Cookies são pequenos arquivos de texto armazenados no seu dispositivo quando você visita um site. Eles são amplamente utilizados para fazer os sites funcionarem ou funcionarem de maneira mais eficiente, além de fornecer informações aos proprietários do site.",
    },
    {
      titulo: "Como usamos cookies?",
      conteudo:
        "Utilizamos cookies para melhorar sua experiência de navegação, personalizar conteúdo, oferecer recursos de mídia social e analisar nosso tráfego.",
    },
    {
      titulo: "Tipos de cookies que utilizamos",
      conteudo:
        "• Cookies estritamente necessários\n• Cookies de desempenho\n• Cookies de funcionalidade\n• Cookies de publicidade",
    },
    {
      titulo: "Gerenciamento de cookies",
      conteudo:
        "Você pode, a qualquer momento, aceitar ou recusar o uso de cookies por meio do nosso banner de consentimento. Também pode configurar seu navegador para bloquear cookies ou alertá-lo quando estiverem sendo usados.",
    },
    {
      titulo: "Consentimento e revogação",
      conteudo:
        "Você pode alterar seu consentimento a qualquer momento excluindo os cookies do seu navegador ou acessando novamente o nosso site para redefinir sua escolha.",
    },
  ];

  const toggle = (titulo: string) => {
    setAbertos((prev) => {
      const novoEstado: Record<string, boolean> = {};
      Object.keys(prev).forEach((key) => {
        novoEstado[key] = false;
      });
      novoEstado[titulo] = !prev[titulo];
      return novoEstado;
    });
  };

  useEffect(() => {
    const analyticsConsent = localStorage.getItem("cookie-consent") === "true";
    if (analyticsConsent) {
      const script = document.createElement("script");
      script.src = "https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXX";
      script.async = true;
      document.head.appendChild(script);

      window.dataLayer = window.dataLayer || [];
      function gtag(...args: unknown[]) {
        window.dataLayer.push(args);
      }
      gtag("js", new Date());
      gtag("config", "G-XXXXXXXX");
    }
  }, []);

  return (
    <>
      <HeaderGeral />
      <main className="min-h-screen bg-logo-opaca px-4 py-12 md:px-12 lg:px-24 text-base leading-relaxed">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          <div className="bg-card/40 p-6 md:p-8 rounded-xl shadow-lg backdrop-blur-md border border-border place-self-start">
            <h1 className="text-2xl font-bold mb-4 text-sunrad-deep-blue">
              POLÍTICA DE COOKIES
            </h1>
            <h2 className="text-lg font-semibold mb-2 text-sunrad-teal">
              Objetivo
            </h2>
            <p className="mb-4 text-foreground">
              Esta Política de Cookies explica o que são cookies, como os
              utilizamos e quais são suas opções em relação ao uso desses
              arquivos.
            </p>
            <p className="text-foreground">
              Ao continuar navegando em nosso site, você concorda com o uso de
              cookies nos termos descritos nesta política.
            </p>
          </div>

          <div className="bg-card/40 p-6 md:p-8 rounded-xl shadow-lg backdrop-blur-md border border-border">
            {blocos.map(({ titulo, conteudo }) => (
              <div
                key={titulo}
                className={`border-b border-border py-4 transition-all duration-300 ease-in-out ${
                  abertos[titulo]
                    ? "border-sunrad-teal bg-card/60 rounded-lg"
                    : ""
                }`}
              >
                <button
                  className="flex justify-between items-center w-full text-left text-sunrad-sky font-semibold"
                  onClick={() => toggle(titulo)}
                >
                  <span>{titulo}</span>
                  <ChevronDown
                    className={`transition-transform duration-300 ${
                      abertos[titulo] ? "rotate-180" : "rotate-0"
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-500 ${
                    abertos[titulo]
                      ? "max-h-60 opacity-100 mt-2"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-foreground text-sm whitespace-pre-line">
                    {conteudo}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
      <CookieConsent />
    </>
  );
}
