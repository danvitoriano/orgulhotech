import Image from "next/image";
import Link from "next/link";

export default function Podcast() {
  return (
    <div className="grid text-center lg:mt-12 lg:grid-cols-1 sm:w-12/12 md:w-9/12 lg:w-6/12">
      <h1 className="text-4xl font-bold lg:text-6xl">
        Palestrantes Orgulho Tech
      </h1>
      <p className="text-lg mt-4 text-gray-500">
        Conheça as palestrantes confirmadas da Orgulho Tech Conf 2024:
      </p>
      <ul>
        <li className="text-5xl mt-4 text-left text-green-400">
          Renato Paixão
        </li>
        <li className="text-5xl mt-4 text-left text-green-400">
          Nathally Souza
        </li>
        <li className="text-5xl mt-4 text-left text-green-400">
          Thiago Holanda
        </li>
        <li className="text-5xl mt-4 text-left text-green-400">
          Hérika Strongreen
        </li>
        <li className="text-5xl mt-4 text-left text-green-400">
          Camila Crispim
        </li>
        <li className="text-5xl mt-4 text-left text-green-400">Gui Silveira</li>
        <li className="text-5xl mt-4 text-left text-green-400">Rafa Mores</li>
        <li className="text-5xl mt-4 text-left text-green-400">
          Damiana Nascimento
        </li>
        <li className="text-5xl mt-4 text-left text-green-400">
          Dan Vitoriano
        </li>
        <li className="text-5xl mt-4 text-left text-green-400">
          Geociano Souto
        </li>
      </ul>
    </div>
  );
}
