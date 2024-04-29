import Image from "next/image";
import Link from "next/link";

export default function Podcast() {
  return (
    <div className="grid text-center lg:mt-12 lg:grid-cols-1 sm:w-12/12 md:w-9/12 lg:w-6/12">
      <h1 className="text-4xl font-bold lg:text-6xl">Palestrantes Orgulho Tech</h1>
      <p className="text-lg mt-4 text-gray-500">
        Conheça as atrações confirmadas da Orgulho Tech Conf 2024.
      </p>
      <Link
        className="group mt-4 rounded-lg border border-gray-700 px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-600 hover:dark:bg-neutral-900"
        href="#"
      >
        <Image src="/speakers/renato-paixao.jpeg" width={150} height={150} alt="Renato Paixão" className="float-left px-1 mr-4" />
        <p className="text-5xl mt-4 text-left text-green-400">
          Renato Paixão
          <br />
          <span className="text-white text-sm">
            {" "}
            Senior Product Designer e COO na PretUX
          </span>
        </p>
      </Link>
      <Link
        className="group mt-4 rounded-lg border border-gray-700 px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-600 hover:dark:bg-neutral-900"
        href="#"
      >
        <Image src="/speakers/NATSOUZADEV.webp" width={150} height={150} alt="Nathally Souza" className="float-left px-1 mr-4" />
        <p className="text-5xl mt-4 text-left text-green-400">
          Nathally Souza
          <br />
          <span className="text-white text-sm">
            {" "}
            Software Developer, Nubank
          </span>
        </p>
      </Link>
      <Link
        className="group mt-4 rounded-lg border border-gray-700 px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-600 hover:dark:bg-neutral-900"
        href="#"
      >
        <Image src="/speakers/thiago-holanda.webp" width={150} height={150} alt="Thiago Holanda" className="float-left px-1 mr-4" />
        <p className="text-5xl mt-4 text-left text-green-400">
          Thiago Holanda
          <br />
          <span className="text-white text-sm">
            {" "}
            Head de Comunidades e Investidor, Biti9
          </span>
        </p>
        </Link>
      <Link
        className="group mt-4 rounded-lg border border-gray-700 px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-600 hover:dark:bg-neutral-900"
        href="#"
      >
        <Image src="/speakers/herika-strongreen.webp" width={150} height={150} alt="Hérika Strongreen" className="float-left px-1 mr-4" />
        <p className="text-5xl mt-4 text-left text-green-400">
          Hérika Strongreen
          <br />
          <span className="text-white text-sm">
            {" "}
            Cyber Security, Accenture
          </span>
        </p>
      </Link>
    </div>
  );
}
