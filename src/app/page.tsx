import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* header */}
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        {/* save the date */}
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          #saveTheDate&nbsp;
          <code className="font-mono font-bold">
            1º de Junho de 2024
          </code>
        </p>
        {/* social media icons links */}
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-1"
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
            className="flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-1"
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
            className="flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-1"
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
            className="flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-1"
            href="https://twitter.com/orgulhotech"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <Image src="/x.svg" alt="X Logo" width={24} height={24} priority />
          </a>
        </div>
      </div>

      {/* logo orgulho tech */}
      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70]"
          src="/orgulho-tech-conf-logo-site.svg"
          alt="Orgulho Tech Conf Logo"
          width={394}
          height={80}
          priority
        />
      </div>

      {/* footer */}
      <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-5 lg:text-left">
        <Link
          href="/sobre"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            O evento{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            A primeira conferência para profissionais LGBTQ+ na tecnologia.
          </p>
        </Link>
        <Link
          href="/podcast"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Podcast{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            O primeiro podcast sobre tecnologia LGBTQIA+ do Brasil.
          </p>
        </Link>

        <a
          href="https://forms.zohopublic.com/contato614/form/lgbtech/formperma/pqqYotAIfQ0AGihfKqDGfRSGhWkURE7Ja7ugMVtBxsE"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            RSVP{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Preencha o formulário e seja avisada da abertura das inscrições.
          </p>
        </a>

        <a
          title="Em breve"
          className="pointer-events-none group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold opacity-50`}>
            Call For Papers{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-30`}>
            Submeta sua palestra e faça parte da programação do evento.
          </p>
        </a>

        <a
          href="mailto:contato@orgulhotech.com.br"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Patrocine{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Seja uma patrocinadora e apoie a diversidade no mercado de
            tecnologia.
          </p>
        </a>
      </div>
    </main>
  );
}
