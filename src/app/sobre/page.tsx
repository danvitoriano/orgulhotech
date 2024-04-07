import Image from "next/image";
import Link from "next/link";

export default function Sobre() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className="left-0 top-0 flex w-full justify-center lg:static lg:w-auto lg:rounded-xl">
          <Link href="/" className="mt-12">
            <Image
              className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70]"
              src="/orgulho-tech-conf-logo-site.svg"
              alt="Orgulho Tech Conf Logo"
              width={394}
              height={80}
              priority
            />
          </Link>
        </p>

        <div className=" left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-1"
            href="https://instagram.com/orgulhotech"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <Image
              src="/instagram.svg"
              alt="Instagram Logo"
              width={24}
              height={24}
              priority
            />
          </a>
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-1"
            href="https://youtube.com/@orgulhotech"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <Image
              src="/youtube.svg"
              alt="YouTube Logo"
              width={24}
              height={24}
              priority
            />
          </a>
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-1"
            href="https://linkedin.com/company/orgulhotech"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <Image
              src="/linkedin.svg"
              alt="LinkedIn Logo"
              width={24}
              height={24}
              priority
            />
          </a>
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-1"
            href="https://twitter.com/orgulhotech"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <Image src="/x.svg" alt="X Logo" width={24} height={24} priority />
          </a>
        </div>
      </div>

      <div className="grid text-center lg:mt-12 lg:grid-cols-1 w-6/12">
        <h1 className="text-4xl font-bold lg:text-6xl">Orgulho Tech Conf</h1>
        <p className="text-lg lg:text-xl mt-4 mb-4">
          A 1ª conferência para profissionais LGBTQ+ na tecnologia.
        </p>
        <p className="text-lg lg:text-xl mt-4 text-justify">
          A Orgulho Tech Conf é a primeira conferência no Brasil dedicada a
          profissionais LGBTQ+ na área de tecnologia. A ser realizada em São
          Paulo, entre sexta ou sábado (30 de maio ou 1º de junho de 2024 - a confirmar), durante a semana da Parada LGBT
          de São Paulo, a conferência visa celebrar a diversidade e a inclusão
          no setor tecnológico.
        </p>
        <p className="text-lg lg:text-xl mt-4 text-justify text-green-400">
          Oportunidades e Desafios:
        </p>
        <p className="text-lg lg:text-xl mt-4 text-justify">
          A Orgulho Tech Conf abordará temas relevantes para a comunidade LGBTQ+
          na tecnologia, como:
        </p>
        <p className="text-lg lg:text-xl mt-4 text-justify">
          ✅ Visibilidade e representatividade: A importância de ter mais
          profissionais LGBTQ+ em cargos de liderança e em diferentes áreas da
          tecnologia.
        </p>
        <p className="text-lg lg:text-xl mt-4 text-justify">
          ✅ Combate à discriminação e ao preconceito: Como criar um ambiente de
          trabalho mais inclusivo e acolhedor para pessoas LGBTQ+.
        </p>
        <p className="text-lg lg:text-xl mt-4 text-justify">
          ✅ Desenvolvimento profissional: Oportunidades de carreira e
          networking para profissionais LGBTQ+ na tecnologia.
        </p>
        <p className="text-lg lg:text-xl mt-4 text-left">
          ✅ Empreendedorismo LGBTQ+: Incentivando o empreendedorismo e a
          inovação na comunidade LGBTQ+.
        </p>

        <p className="text-lg lg:text-xl mt-4 text-left text-green-400">
          Convidados e Programação:
        </p>
        <p className="text-lg lg:text-xl mt-4 text-left">
          A conferência contará com a participação de palestrantes diversos, que
          em breve serão anunciadas, todas elas referências em suas áreas e
          partes da comunidade LGBTQ+.
        </p>
        <p className="text-lg lg:text-xl mt-4 text-left text-green-400">
          Para quem é a Orgulho Tech Conf:
        </p>
        <p className="text-lg lg:text-xl mt-4 text-left">
          A conferência é aberta a todos os profissionais LGBTQ+ que atuam na
          área de tecnologia, incluindo:
        </p>
        <p className="text-lg lg:text-xl mt-4 text-left">
          ✅ Pessoas Desenvolvedoras
          <br />
          ✅ Pessoas Engenheiras de software
          <br />
          ✅ Designers
          <br />
          ✅ Cientistas de dados
          <br />
          ✅ Pessoas Empreendedoras
          <br />✅ Estudantes
        </p>
        <p className="text-lg lg:text-xl mt-4 text-left text-green-400">
          Inscrições:
        </p>
        <p className="text-lg lg:text-xl mt-4 text-left">
          As inscrições para a Orgulho Tech Conf abrirão em breve.
        </p>
        <p className="text-lg lg:text-xl mt-4 text-left text-green-400">
          Local:
        </p>
        <p className="text-lg lg:text-xl mt-4 text-left">
          Em São Paulo capital, a ser divulgado em breve.
        </p>
        <p className="text-lg lg:text-xl mt-4 text-left text-green-400">
          Patrocínio:
        </p>
        <p className="text-lg lg:text-xl mt-4 text-left">
          Se sua empresa deseja patrocinar a Orgulho Tech Conf, entre em contato
          conosco através do email{" "}
          <a href="mailto:contato@orgulhotech.com.br" className="underline">
            contato@orgulhotech.com.br
          </a>
          .
        </p>
      </div>
    </main>
  );
}
