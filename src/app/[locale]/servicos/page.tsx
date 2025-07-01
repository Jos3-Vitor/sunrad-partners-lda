"use client";

import Footer from "@/components/Footer";
import HeaderGeral from "@/components/HeaderGeral";
import { Card, CardContent } from "@/components/ui/card";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";
import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

import { Globe, TrendingUp, ShieldCheck, CheckCircle } from "lucide-react";

type Service = {
  title: string;
  description: string;
  details: string;
  icon: React.ReactNode;
  image: string;
};

type CategorizedService = {
  category: string;
  services: Service[];
};

const categorizedServices: CategorizedService[] = [
  {
    category: "Trade Finance e Câmbio",
    services: [
      {
        title: "Trade Finance",
        icon: <Globe className="text-sunrad-sky w-8 h-8" aria-hidden="true" />,
        description:
          "Soluções completas de financiamento ao comércio internacional: estruturação de operações, emissão de LCs e SBLCs com segurança jurídica.",
        image: "/images/trade-finance.jpg",
        details:
          "Oferecemos consultoria e estruturação completa para operações de Trade Finance, assegurando o cumprimento regulatório e a máxima eficiência tributária e operacional.",
      },
      {
        title: "Câmbio Corporativo",
        icon: (
          <TrendingUp className="text-sunrad-lime w-8 h-8" aria-hidden="true" />
        ),
        description:
          "Assessoria em câmbio comercial e financeiro, estratégias de hedge, contas internacionais e conformidade regulatória.",
        image: "/images/cambio-corporativo.jpg",
        details:
          "Nossa equipe oferece suporte desde a abertura de contas internacionais até estratégias avançadas de proteção cambial (hedge).",
      },
      {
        title: "Gestão Cambial Estratégica",
        icon: (
          <TrendingUp
            className="text-sunrad-yellow w-8 h-8"
            aria-hidden="true"
          />
        ),
        description:
          "Gestão ativa de exposição cambial com foco em proteção patrimonial e performance.",
        image: "/images/gestao-cambial.jpg",
        details:
          "Analisamos sua estrutura e sugerimos soluções de câmbio que minimizam riscos e maximizam resultados.",
      },
    ],
  },
  {
    category: "Cripto & Ativos Digitais",
    services: [
      {
        title: "Ativos Digitais Regulados",
        icon: (
          <ShieldCheck
            className="text-sunrad-teal w-8 h-8"
            aria-hidden="true"
          />
        ),
        description:
          "Integração segura de ativos digitais: custódia, conversão, reporte e conformidade com foco em segurança institucional.",
        image: "/images/ativos-digitais.jpg",
        details:
          "Ajudamos empresas a operar com ativos digitais de forma segura, dentro dos padrões regulatórios internacionais.",
      },
      {
        title: "Tokenização de Ativos",
        icon: (
          <TrendingUp className="text-sunrad-lime w-8 h-8" aria-hidden="true" />
        ),
        description:
          "Transformação de ativos reais em tokens digitais para liquidez e rastreabilidade.",
        image: "/images/tokenizacao.jpg",
        details:
          "Oferecemos estruturação jurídica e tecnológica completa para emissão e negociação de tokens.",
      },
      {
        title: "Custódia Digital",
        icon: (
          <ShieldCheck className="text-sunrad-sky w-8 h-8" aria-hidden="true" />
        ),
        description:
          "Soluções institucionais de armazenamento seguro para criptomoedas e ativos digitais.",
        image: "/images/custodia.jpg",
        details:
          "Com parceiros internacionais, garantimos infraestrutura de cold storage e seguros contra perdas.",
      },
    ],
  },
  {
    category: "Serviços Bancários & Patrimoniais",
    services: [
      {
        title: "Validação de Instrumentos Financeiros",
        icon: (
          <CheckCircle
            className="text-sunrad-yellow w-8 h-8"
            aria-hidden="true"
          />
        ),
        description:
          "Análise técnica e jurídica de SBLC, BG e MTN para colateralização em operações estruturadas.",
        image: "/images/validacao.jpg",
        details:
          "Emitimos pareceres com suporte legal e técnico para uso de instrumentos financeiros em operações internacionais.",
      },
      {
        title: "Estruturação de Garantias Bancárias",
        icon: (
          <ShieldCheck className="text-sunrad-sky w-8 h-8" aria-hidden="true" />
        ),
        description:
          "Modelagem de garantias para crédito e investimentos com bancos internacionais de primeira linha.",
        image: "/images/garantias.jpg",
        details:
          "Montamos estruturas robustas com SBLCs e seguros de performance para operações seguras.",
      },
      {
        title: "Gestão Estratégica de Patrimônio",
        icon: (
          <TrendingUp
            className="text-sunrad-yellow w-8 h-8"
            aria-hidden="true"
          />
        ),
        description:
          "Planejamento sucessório, trusts, veículos fiduciários e proteção patrimonial global.",
        image: "/images/patrimonio.jpg",
        details:
          "Consultoria holística para proteger, diversificar e transmitir patrimônio entre gerações.",
      },
    ],
  },
];

export default function Servicos() {
  const [activeCardIndex, setActiveCardIndex] = useState<string | null>(null);

  return (
    <>
      <ParallaxProvider>
        <HeaderGeral />
        <section className="relative bg-gradient-to-b from-[#0D1B2A] to-[#1B263B] py-20 px-6 md:px-20 text-white overflow-hidden">
          <div
            className="absolute inset-0 bg-[url('/images/logo-sunrad.png')] bg-no-repeat bg-center bg-[length:60%] opacity-5 pointer-events-none z-0"
            aria-hidden="true"
          />
          <div className="max-w-7xl mx-auto relative z-10">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl font-serif font-bold text-white mb-12"
            >
              Soluções Estratégicas SunRad
            </motion.h2>

            {categorizedServices.map(({ category, services }, sectionIdx) => (
              <div key={sectionIdx} className="mb-20">
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="text-2xl font-semibold font-serif text-sunrad-yellow mb-6 border-l-4 pl-4 border-sunrad-teal"
                >
                  {category}
                </motion.h3>

                <Parallax translateY={[30, -30]}>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => {
                      const cardKey = `${sectionIdx}-${index}`;
                      const isActive = activeCardIndex === cardKey;

                      const [activeSection, activeIdx] = activeCardIndex
                        ? activeCardIndex.split("-").map(Number)
                        : [null, null];

                      const cardsPerRow = 3;

                      const rowStart =
                        activeIdx !== null
                          ? Math.floor(activeIdx / cardsPerRow) * cardsPerRow
                          : null;

                      const rowEnd =
                        rowStart !== null ? rowStart + cardsPerRow : null;

                      const isInSameRow =
                        activeIdx !== null &&
                        activeSection === sectionIdx &&
                        rowStart !== null &&
                        rowEnd !== null &&
                        index >= rowStart &&
                        index < rowEnd &&
                        !isActive;

                      return (
                        <div
                          key={cardKey}
                          className={`transition-all duration-500 ${
                            isInSameRow ? "hidden" : ""
                          } ${
                            isActive ? "col-span-full flex justify-center" : ""
                          }`}
                        >
                          <Card
                            className={`transition-all duration-500 transform-gpu backdrop-blur-sm bg-white/5 border border-sunrad-sky shadow-md hover:shadow-xl hover:scale-[1.02] rounded-2xl ${
                              isActive
                                ? "flex-row max-w-4xl"
                                : "flex-col h-full"
                            }`}
                          >
                            {isActive && (
                              <div className="flex items-center justify-center w-[260px] p-4">
                                <Image
                                  src={service.image}
                                  alt={service.title}
                                  width={240}
                                  height={160}
                                  className="rounded-lg shadow-md"
                                />
                              </div>
                            )}
                            <CardContent className="p-6 flex-1 flex flex-col justify-center">
                              <div className="flex items-center gap-4 mb-4">
                                {service.icon}
                                <h4 className="text-lg font-bold text-white">
                                  {service.title}
                                </h4>
                              </div>
                              <p className="text-sm text-slate-200 mb-2">
                                {service.description}
                              </p>
                              {isActive && (
                                <p className="text-sm text-slate-100 mb-4">
                                  {service.details}
                                </p>
                              )}
                              <button
                                onClick={() =>
                                  setActiveCardIndex(isActive ? null : cardKey)
                                }
                                className="mt-auto px-8 py-4 bg-gradient-to-r from-blue-600 to-teal-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-teal-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                              >
                                {isActive ? "Fechar" : "Saiba mais"}
                              </button>
                            </CardContent>
                          </Card>
                        </div>
                      );
                    })}
                  </div>
                </Parallax>
              </div>
            ))}

            <motion.div
              className="text-center mt-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <a
                href="/contato"
                className="inline-block bg-sunrad-yellow text-black font-semibold px-8 py-3 rounded-full shadow hover:bg-sunrad-teal hover:text-white transition"
              >
                Fale com um especialista
              </a>
            </motion.div>
          </div>
        </section>
      </ParallaxProvider>
      <Footer />
    </>
  );
}
