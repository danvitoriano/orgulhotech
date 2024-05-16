import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* header */}
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        {/* save the date */}
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Teatro Fecap SP | &nbsp;
          <code className="font-mono font-bold">Sábado, 01/06/24</code>
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
      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[350px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[200px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] py-12 lg:my-12">
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
      <div className="mb-0 grid text-center lg:mb-0 lg:grid-cols-6 lg:text-left">
        <Link
          href="/sobre"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            O evento
          </h2>
        </Link>
        <Link
          href="/palestrantes"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Palestrantes
          </h2>
        </Link>
        <Link
          href="/podcast"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Podcast
          </h2>
        </Link>

        <Link
          href="/ingressos"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Ingressos
          </h2>
        </Link>

        <Link
          href="/call-for-papers/"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Submeta
          </h2>
        </Link>

        <Link
              href="/patrocine"
              className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            >
              <h2 className={`mb-3 text-2xl font-semibold`}>
                Patrocine
              </h2>
            </Link>
      </div>
      <div className="mb-16 mt-16">
        <p className="text-sm text-center text-gray-400 dark:text-gray-300">
          © 2024 Orgulho Tech Conf. Todos os direitos reservados <br /> CNPJ
          05.554.777/0001-11 <br />{" "}
          <Link href="/politica-de-privacidade" className="underline">
            Política de Privacidade
          </Link>{" "}
          <br />{" "}
          <Link href="/codigo-de-conduta" className="underline">
            Código de Conduta
          </Link>
          <br />
              <Link href="/voluntarias" className="underline">
                Voluntárias
              </Link>
        </p>
      </div>
    </main>
  );
}
