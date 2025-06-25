"use client";

import HeaderGeral from "@/components/HeaderGeral";
import { Card, CardContent } from "@/components/ui/card";
import { Globe, ShieldCheck, TrendingUp, Banknote } from "lucide-react";
import { motion } from "framer-motion";

const serviceGroups = [
  {
    category: "Câmbio e Fluxos Internacionais",
    icon: <TrendingUp className="text-sunrad-lime w-8 h-8" />,
    services: [
      {
        title: "Câmbio Corporativo",
        description:
          "Assessoria completa em operações de câmbio comercial e financeiro, estratégias de hedge, abertura de contas internacionais, envio e recebimento de recursos, e adequação regulatória junto ao Banco Central e instituições financeiras."
      },
      {
        title: "Fluxos Financeiros Internacionais",
        description:
          "Planejamento e implementação de estruturas de recebimento e pagamento em diversas jurisdições, com foco em eficiência fiscal, proteção patrimonial, conformidade legal e controle cambial."
      }
    ]
  },
  {
    category: "Criptoativos Regulados",
    icon: <ShieldCheck className="text-sunrad-teal w-8 h-8" />,
    services: [
      {
        title: "Ativos Digitais Regulados",
        description:
          "Estruturação jurídica e técnica para custódia, negociação, conversão e declaração de criptoativos em ambiente regulado. Integração com plataformas de exchange, bancos e custodians internacionais com rastreabilidade e compliance total."
      }
    ]
  },
  {
    category: "Serviços Bancários Internacionais",
    icon: <Banknote className="text-sunrad-yellow w-8 h-8" />,
    services: [
      {
        title: "Validação de Instrumentos Financeiros",
        description:
          "Análise técnica, estrutural e jurídica de instrumentos como SBLC, Bank Guarantee, MTN e outros, para uso em colaterais, garantias e financiamento estruturado."
      },
      {
        title: "Estruturação de Garantias Bancárias",
        description:
          "Elaboração e negociação de garantias bancárias para investimentos, contratos internacionais, licitações públicas e financiamentos complexos, com bancos Tier 1 e instituições reconhecidas globalmente."
      }
    ]
  },
  {
    category: "Trade Finance Global",
    icon: <Globe className="text-sunrad-sky w-8 h-8" />,
    services: [
      {
        title: "Trade Finance",
        description:
          "Financiamento de operações de importação e exportação com instrumentos como LCs, SBLCs e forfaiting. Estruturação jurídica, onboarding com bancos internacionais e gestão de risco operacional e cambial."
      }
    ]
  }
];

function ServiceGroup({ category, icon, services }) {
  return (
    <section className="mb-16">
      <div className="flex items-center gap-4 mb-6">
        {icon}
        <h3 className="text-2xl font-bold text-sunrad-deep-blue dark:text-white">
          {category}
        </h3>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="shadow-lg rounded-2xl border border-muted bg-card dark:bg-muted/10 hover:shadow-2xl transition">
              <CardContent className="p-6 space-y-4">
                <h4 className="text-xl font-semibold text-sunrad-deep-blue dark:text-white">
                  {service.title}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default function Servicos() {
  return (
    <>
      <HeaderGeral />
      <section className="py-20 px-6 md:px-20 bg-white dark:bg-background">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-semibold text-sunrad-deep-blue dark:text-white mb-4">
            Nossos Serviços
          </h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-3xl">
            Soluções estratégicas e seguras nas áreas de câmbio, ativos digitais, trade finance e banking internacional. Nossos serviços são personalizados e conduzidos com alto rigor técnico e jurídico.
          </p>

          {serviceGroups.map((group, idx) => (
            <ServiceGroup
              key={idx}
              category={group.category}
              icon={group.icon}
              services={group.services}
            />
          ))}
        </div>
      </section>
    </>
  );
}
