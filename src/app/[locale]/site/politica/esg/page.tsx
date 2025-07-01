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

export default function PoliticaESGPage() {
  const [abertos, setAbertos] = useState<Record<string, boolean>>({});

  const blocos: Bloco[] = [
    {
      titulo: "Compromisso Ambiental",
      conteudo:
        "Adotamos práticas sustentáveis para reduzir nosso impacto ambiental. Isso inclui o uso consciente de recursos naturais, redução de resíduos, eficiência energética e incentivo a fornecedores com práticas ecológicas.",
    },
    {
      titulo: "Responsabilidade Social",
      conteudo:
        "Valorizamos a diversidade, inclusão e bem-estar dos nossos colaboradores. Promovemos um ambiente de trabalho ético, seguro e respeitoso, além de apoiar iniciativas sociais em nossas comunidades.",
    },
    {
      titulo: "Governança Corporativa",
      conteudo:
        "Seguimos princípios éticos, de transparência e conformidade regulatória. Nossa governança é baseada em responsabilidade, prestação de contas e mecanismos para prevenir fraudes e conflitos de interesse.",
    },
    {
      titulo: "Objetivos ESG",
      conteudo:
        "Nosso objetivo é gerar valor a longo prazo para todas as partes interessadas, equilibrando desempenho econômico com responsabilidade ambiental e social.",
    },
    {
      titulo: "Monitoramento e Melhoria Contínua",
      conteudo:
        "Realizamos revisões periódicas de nossas práticas ESG e buscamos constantemente oportunidades de melhoria, com base em indicadores, metas e auditorias internas.",
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
              POLÍTICA ESG
            </h1>
            <h2 className="text-lg font-semibold mb-2 text-sunrad-teal">
              Objetivo
            </h2>
            <p className="mb-4 text-foreground">
              Esta Política ESG tem como objetivo nortear as práticas da
              organização com foco em sustentabilidade ambiental,
              responsabilidade social e governança corporativa.
            </p>
            <p className="text-foreground">
              Acreditamos que incorporar critérios ESG nas nossas decisões
              estratégicas contribui para a construção de um futuro mais justo,
              transparente e sustentável.
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
