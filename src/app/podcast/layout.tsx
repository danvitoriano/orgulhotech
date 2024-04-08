import "./../globals.css";
import { Inter } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Orgulho Tech Conf",
  description:
    "#saveTheDate: Sábado 1º de Junho de 2024. A 1ª conferência para profissionais LGBTQ+ na tecnologia.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="flex min-h-screen flex-col items-center justify-between p-8">
          {/* header */}
          <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
            {/* logo */}
            <p className="left-0 top-0 flex w-full justify-center lg:static lg:w-auto lg:rounded-xl">
              <Link href="/" className="mt-12">
                <Image
                  className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70]"
                  src="/logo-podcast-orgulho-tech-small.jpeg"
                  alt="Podcast Orgulho Tech Logo"
                  width={120}
                  height={120}
                  priority
                />
              </Link>
            </p>

            {/* social media icons links */}
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
                <Image
                  src="/x.svg"
                  alt="X Logo"
                  width={24}
                  height={24}
                  priority
                />
              </a>
            </div>
          </div>
          {children}
          {/* footer */}
          <div className="mb-8 grid text-center lg:grid-cols-5 lg:text-left pt-12">
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
      </body>
    </html>
  );
}
