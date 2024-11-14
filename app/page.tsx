import Image from "next/image";
import Link from "next/link";
import { Teams } from "./lib/data.models";

const ListTeams:Teams[] = [
  {
    id:1,
    team: {
      name: "Red Bull Racing",
      base: "Milton Keynes, UK",
      teamPrincipal: "Christian Horner",
      drivers: [
        {
          name: "Max Verstappen",
          nationality: "Dutch",
          dateOfBirth: new Date("1997-09-30"),
          championshipsWon: 2,
        },
        {
          name: "Sergio Pérez",
          nationality: "Mexican",
          dateOfBirth: new Date("1990-01-26"),
          championshipsWon: 0,
        },
      ],
      car: {
        model: "RB19",
        engine: "Honda",
        chassis: "Carbon Fiber",
        topSpeed: 350,
      },
      championshipsWon: 5,
      founded: new Date("2005-11-15"),
      description: "Red Bull Racing es un equipo de Fórmula 1 con sede en Milton Keynes, Reino Unido.",
      img: "/teams/red bull.avif"
    },
  },
  {
    id:2,
    team:{
      name: "Mercedes-AMG Petronas F1 Team",
      base: "Brackley, UK",
      teamPrincipal: "Toto Wolff",
      drivers: [
        {
          name: "Lewis Hamilton",
          nationality: "British",
          dateOfBirth: new Date("1985-01-07"),
          championshipsWon: 7,
        },
        {
          name: "George Russell",
          nationality: "British",
          dateOfBirth: new Date("1998-02-15"),
          championshipsWon: 0,
        },
      ],
      car: {
        model: "W14",
        engine: "Mercedes",
        chassis: "Carbon Fiber",
        topSpeed: 340,
      },
      championshipsWon: 8,
      founded: new Date("2010-01-01"),
      description: "Mercedes-AMG Petronas F1 Team es un equipo de Fórmula 1 con sede en Brackley, Reino Unido.",
      img: "/teams/mercedes.avif"
    },
  },
  {
    id:3,
    team:{
      name: "Scuderia Ferrari",
      base: "Maranello, Italy",
      teamPrincipal: "Fred Vasseur",
      drivers: [
        {
          name: "Charles Leclerc",
          nationality: "Monégasque",
          dateOfBirth: new Date("1997-10-16"),
          championshipsWon: 0,
        },
        {
          name: "Carlos Sainz",
          nationality: "Spanish",
          dateOfBirth: new Date("1994-09-01"),
          championshipsWon: 0,
        },
      ],
      car: {
        model: "SF-23",
        engine: "Ferrari",
        chassis: "Carbon Fiber",
        topSpeed: 335,
      },
      championshipsWon: 16,
      founded: new Date("1950-01-01"),
      description: "Scuderia Ferrari es el equipo más antiguo y exitoso en la historia de la Fórmula 1.",
      img: "/teams/ferrari.avif"
    },
  },
  {
    id:4,
    team:{
      name: "McLaren Formula 1 Team",
      base: "Woking, UK",
      teamPrincipal: "Andrea Stella",
      drivers: [
        {
          name: "Lando Norris",
          nationality: "British",
          dateOfBirth: new Date("1999-11-13"),
          championshipsWon: 0,
        },
        {
          name: "Oscar Piastri",
          nationality: "Australian",
          dateOfBirth: new Date("2001-04-06"),
          championshipsWon: 0,
        },
      ],
      car: {
        model: "MCL60",
        engine: "Mercedes",
        chassis: "Carbon Fiber",
        topSpeed: 340,
      },
      championshipsWon: 8,
      founded: new Date("1963-09-02"),
      description: "McLaren es uno de los equipos más históricos y exitosos en la Fórmula 1.",
      img: "/teams/mclaren.avif",
    },
  },
  {
    id:5,
    team:{
      name: "Alpine F1 Team",
      base: "Enstone, UK",
      teamPrincipal: "Otmar Szafnauer",
      drivers: [
        {
          name: "Esteban Ocon",
          nationality: "French",
          dateOfBirth: new Date("1996-09-17"),
          championshipsWon: 0,
        },
        {
          name: "Pierre Gasly",
          nationality: "French",
          dateOfBirth: new Date("1996-02-07"),
          championshipsWon: 0,
        },
      ],
      car: {
        model: "A524",
        engine: "Renault",
        chassis: "Carbon Fiber",
        topSpeed: 335,
      },
      championshipsWon: 2,
      founded: new Date("1981-09-01"),
      description: "Alpine, anteriormente conocido como Renault, es un equipo con una rica historia en la Fórmula 1.",
      img: "/teams/alpine.avif",
    },
  },
  {
    id:6,
    team:{
      name: "Sauber (Stake F1 Team)",
      base: "Hinwil, Switzerland",
      teamPrincipal: "Alessandro Alunni Bravi",
      drivers: [
        {
          name: "Valtteri Bottas",
          nationality: "Finnish",
          dateOfBirth: new Date("1989-08-28"),
          championshipsWon: 0,
        },
        {
          name: "Zhou Guanyu",
          nationality: "Chinese",
          dateOfBirth: new Date("1999-05-30"),
          championshipsWon: 0,
        },
      ],
      car: {
        model: "C43",
        engine: "Ferrari",
        chassis: "Carbon Fiber",
        topSpeed: 330,
      },
      championshipsWon: 0,
      founded: new Date("1993-03-01"),
      description: "Sauber, actualmente conocido como Stake F1 Team, es un equipo con una larga trayectoria en la Fórmula 1.",
      img: "/teams/kick sauber.avif",
    },
  },
  {
    id:7,
    team:{
      name: "Williams Racing",
      base: "Grove, UK",
      teamPrincipal: "James Vowles",
      drivers: [
        {
          name: "Alex Albon",
          nationality: "Thai",
          dateOfBirth: new Date("1996-03-23"),
          championshipsWon: 0,
        },
        {
          name: "Logan Sargeant",
          nationality: "American",
          dateOfBirth: new Date("2000-12-31"),
          championshipsWon: 0,
        },
      ],
      car: {
        model: "FW46",
        engine: "Mercedes",
        chassis: "Carbon Fiber",
        topSpeed: 330,
      },
      championshipsWon: 9,
      founded: new Date("1977-03-08"),
      description: "Williams es uno de los equipos más históricos y exitosos en la Fórmula 1.",
      img: "/teams/williams.avif",
    },
  },
  {
    id:8,
    team:{
      name: "Haas F1 Team",
      base: "Kannapolis, USA",
      teamPrincipal: "Ayao Komatsu",
      drivers: [
        {
          name: "Kevin Magnussen",
          nationality: "Danish",
          dateOfBirth: new Date("1992-10-05"),
          championshipsWon: 0,
        },
        {
          name: "Nico Hülkenberg",
          nationality: "German",
          dateOfBirth: new Date("1987-08-19"),
          championshipsWon: 0,
        },
      ],
      car: {
        model: "VF-24",
        engine: "Ferrari",
        chassis: "Carbon Fiber",
        topSpeed: 325,
      },
      championshipsWon: 0,
      founded: new Date("2016-01-01"),
      description: "Haas es el primer equipo estadounidense en la Fórmula 1 en varias décadas.",
      img: "/teams/haas.avif",
    },
  },
  {
    id:9,
    team:{
      name: "Aston Martin Aramco Cognizant Formula One Team",
      base: "Silverstone, UK",
      teamPrincipal: "Mike Krack",
      drivers: [
        {
          name: "Fernando Alonso",
          nationality: "Spanish",
          dateOfBirth: new Date("1981-07-29"),
          championshipsWon: 2,
        },
        {
          name: "Lance Stroll",
          nationality: "Canadian",
          dateOfBirth: new Date("1998-10-29"),
          championshipsWon: 0,
        },
      ],
      car: {
        model: "AMR24",
        engine: "Mercedes",
        chassis: "Carbon Fiber",
        topSpeed: 340,
      },
      championshipsWon: 0,
      founded: new Date("2021-01-01"),
      description: "Aston Martin busca consolidarse como un contendiente serio en la Fórmula 1.",
      img: "/teams/aston martin 2024.avif",
    },
  },
  {
    id:10,
    team:{
      name: "Visa Cash App RB",
      base: "Faenza, Italy",
      teamPrincipal: "Laurent Mekies",
      drivers: [
        {
          name: "Daniel Ricciardo",
          nationality: "Australian",
          dateOfBirth: new Date("1989-07-01"),
          championshipsWon: 0,
        },
        {
          name: "Yuki Tsunoda",
          nationality: "Japanese",
          dateOfBirth: new Date("2000-05-11"),
          championshipsWon: 0,
        },
      ],
      car: {
        model: "AT05",
        engine: "Honda",
        chassis: "Carbon Fiber",
        topSpeed: 335,
      },
      championshipsWon: 0,
      founded: new Date("2024-01-01"),
      description: "Visa Cash App RB es el equipo junior de Red Bull, anteriormente conocido como AlphaTauri.",
      img: "/teams/rb.avif",
    },
  }
];

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
