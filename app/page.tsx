import Image from "next/image";
import Link from "next/link";
import { Teams } from "./lib/data.models";
import { ListTeams } from "./services/team.services";


export default function Page() {
  return (
    <main className="flex min-h-screen flex-col px-20 py-5">
      
      <section>
        <div>
          <h1 className='font-semibold text-2xl text-white'>F1 Team's</h1>
        </div>
      </section>

      <hr className="h-0.5 bg-gray-500 border-0"/>

      <section className="mt-5">

        <div className="md:grid gap-5 md:grid-cols-2 md:grid-rows-4 sm:flex sm:flex-col">

          {
            //* Aca recorro el array de los equipos
            ListTeams.map((element:Teams, i:any) => (

              <div key={element.id} className="relative group flex flex-row bg-neutral-900 rounded-lg hover:bg-neutral-800 transition duration-300 ease-in-out w-auto border border-gray-500">
                <div className="rounded-s-lg md:w-5/12 sm:w-3/12 md:h-48 sm:h-38 overflow-hidden">
                  <picture>
                    <Image
                    className="rounded-s-lg h-full w-full p-0 bg-white hover:scale-125 transition duration-300 ease-in-out"
                    alt="F1 team logo"
                    src={element.team.img}
                    width={150}
                    height={150}
                    />
                  </picture>
                </div>
                <div className="flex flex-col justify-between md:w-7/12 sm:w-9/12 ms-2 p-3 text-white text-md md:text-2xl sm:text-sm hover:text-blue-400 w-full">
                  {/* Aqui va el nombre del equipo y la descripción */}
                  <article>
                    <p className="font-bold">{element.team.name}</p>
                    <p className="text-sm text-wrap truncate text-gray-400">{element.team.description}</p>
                  </article>
                  {/* Aqui va el boton de ver detalles */}
                  <div className="flex justify-end">
                    <Link
                      href={`/teamDetail/${element.id}`}
                      as={`/teamDetail/${element.id}`}
                      className="rounded-lg p-2 sm:text-xs md:text-sm bg-transparent border border-blue-400 text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:border-gray-500 hover:text-white hover:shadow-lg hover:transition hover:duration-300 hover:ease-in-out hover:bg-neutral-700">
                      Detalles
                    </Link>
                  </div>
                </div>
              </div>

            ))
          }

        </div>

      </section>


    </main>
  );
}
