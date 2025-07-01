"use client";

import HeaderGeral from "@/components/HeaderGeral";
import Footer from "@/components/Footer";
export default function PoliticaDePrivacidade() {
  return (
    <>
      <HeaderGeral />
      <main className="min-h-screen bg-logo-opaca px-6 py-12 md:px-16 lg:px-32 text-base leading-relaxed">
        <div className="max-w-5xl mx-auto bg-card/40 p-6 md:p-10 rounded-xl shadow-lg backdrop-blur-md border border-border">
          <h1 className="text-3xl font-bold mb-4 text-sunrad-deep-blue">
            Política de Privacidade
          </h1>
          <h2 className="text-xl font-semibold mb-8 text-sunrad-teal">
            Como Coletamos, Usamos e Protegemos Seus Dados
          </h2>

          <section className="space-y-6 text-foreground">
            <p>
              A proteção da sua privacidade é importante para nós. Esta política
              de privacidade explica como coletamos, usamos e protegemos as
              informações pessoais que você fornece em nosso site e por meio de
              outros canais de comunicação.
            </p>

            <h3 className="text-lg font-semibold text-sunrad-sky">
              Coleta de Informações Pessoais
            </h3>
            <p>
              Coletamos informações pessoais quando você visita nosso site, faz
              uma consulta ou solicitação de informações, se inscreve em nossa
              newsletter ou utiliza outros serviços oferecidos por nossa
              empresa. Essas informações podem incluir seu nome, endereço de
              e-mail, número de telefone e outras informações fornecidas
              voluntariamente.
            </p>

            <h3 className="text-lg font-semibold text-sunrad-sky">
              Uso de Informações Pessoais
            </h3>
            <p>
              As informações pessoais que coletamos são usadas para fornecer
              informações e serviços a você, bem como para melhorar nossos
              produtos e serviços. Também podemos usar suas informações para
              contatá-lo sobre novos produtos ou serviços que possam ser do seu
              interesse.
            </p>

            <h3 className="text-lg font-semibold text-sunrad-sky">
              Divulgação de Informações Pessoais
            </h3>
            <p>
              Não compartilhamos suas informações pessoais com terceiros, exceto
              quando exigido por lei ou quando acreditamos de boa-fé que a
              divulgação é necessária para proteger nossos direitos, sua
              segurança ou a segurança de terceiros.
            </p>

            <h3 className="text-lg font-semibold text-sunrad-sky">
              Segurança das Informações Pessoais
            </h3>
            <p>
              Tomamos medidas de segurança razoáveis para proteger suas
              informações pessoais contra perda, uso indevido, acesso não
              autorizado, divulgação, alteração ou destruição. No entanto, não
              podemos garantir a segurança de informações transmitidas pela
              Internet.
            </p>

            <h3 className="text-lg font-semibold text-sunrad-sky">
              Cookies e Outras Tecnologias de Rastreamento
            </h3>
            <p>
              Nosso site pode usar cookies e outras tecnologias de rastreamento
              para coletar informações sobre o uso do site. Essas informações
              podem incluir o tipo de navegador usado, as páginas visitadas, o
              tempo gasto no site e outras informações semelhantes. Essas
              informações são usadas para melhorar o site e personalizar sua
              experiência.
            </p>

            <h3 className="text-lg font-semibold text-sunrad-sky">
              Alterações a Esta Política de Privacidade
            </h3>
            <p>
              Podemos atualizar esta política de privacidade periodicamente.
              Quando fizermos alterações significativas na maneira como tratamos
              suas informações pessoais, forneceremos um aviso no site.
            </p>

            <h3 className="text-lg font-semibold text-sunrad-sky">Contato</h3>
            <p>
              Se você tiver alguma dúvida sobre esta política de privacidade ou
              sobre como suas informações pessoais são coletadas, usadas e
              protegidas, entre em contato conosco pelo e-mail:{" "}
              <a
                href="mailto:info@sunrad.pt"
                className="text-sunrad-yellow underline hover:text-sunrad-teal"
              >
                privacidade@sunradpartners.com
              </a>
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
