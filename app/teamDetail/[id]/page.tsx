import { Team, Teams } from "@/app/lib/data.models";
import Image from "next/image";
import { Suspense } from "react";

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

/**
 * @description Encontrar nombre del equipo
 * @param id
 * @returns nombre del equipo
 */
const onSearchTeam = (id:number) => {
    // console.log(id)
    const nameID = ListTeams.find((item:{ id: number;}) => item.id == id);

    if (nameID){
        return nameID.team.name
    }
    return undefined;
};

/**
 * @description Encontrar data del equipo
 * @param id
 * @returns data del equipo
 */
const onSearchTeamData = async (id:number) => {
  await new Promise((resolve) => setTimeout(resolve,3000))
  const teamID = ListTeams.find((item:{ id: number;}) => item.id == id);
  
  if (teamID){
      return [teamID.team]
  }
  
  return undefined;
};

/**
 * @description Constante con los valores de los colores del los equipos
 */
const ColorsTeams = [
  'rgb(0, 0, 139)',
  'rgb(192, 192, 192)',
  'rgb(255, 0, 0)',
  'rgb(255, 153, 51)',
  'rgb(0, 0, 255)',
  'rgb(0, 255, 0)',
  'rgb(0, 0, 139)',
  'rgb(255, 255, 255)',
  'rgb(0, 66, 37)',
  'rgb(0, 0, 139)',
]

export default async function TeamF1Detail({params}:{params:{id:number;}}){

    const {id} = params;
    const teamName = await onSearchTeam(id);
    const teamData = await onSearchTeamData(id);

    return(
        <section
          className="w-full h-full py-10 px-20"
          style={{
            backgroundColor: ColorsTeams[id-1],
            backgroundImage: 'radial-gradient(circle, rgba(0, 0, 0, 0.8) 0%, rgb(0, 0, 0) 75%)'
          }}
          >
            <div className="backdrop-blur-lg backdrop-filter">

                <h1 className="text-2xl text-white mb-2">
                    Team <b>{teamName != undefined ? teamName : '-------'}</b>
                </h1>

                <Suspense fallback={<div className="text-white h-full">Cargando...</div> }>
                    <div className="flex flex-col gap-3 rounded-lg p-3">
                    {
                      teamData?.map((item:Team) => (
                        <>
                          <div className="flex sm:flex-col md:flex-row w-full border rounded-lg border-radius border-gray-500 p-5 gap-2 backdrop-blur-3xl backdrop-filter">
                            
                            <picture>
                              <Image src={item.img} width={150} height={150} alt="F1 team logo" className="rounded-lg md:w-96 sm:w-full bg-slate-50"/>
                            </picture>
                            
                            <div className="flex flex-col">
                              <p className="text-white font-extralight">{item.description}</p>
                              <div className="flex flex-row">
                                <p className="font-bold text-white">Location : </p>
                                <p className="text-white font-extralight"> {item.base}</p>
                              </div>

                              <div className="flex flex-row">
                                <p className="font-bold text-white">Foundation : </p>
                                <p className="text-white font-extralight">{item.founded.getFullYear()}</p>
                              </div>

                              <div className="flex flex-row">
                                <p className="font-bold text-white">Team principal : </p>
                                <p className="text-white font-extralight">{item.teamPrincipal}</p>
                              </div>

                              <div className="flex flex-row">
                                <p className="font-bold text-white">Championships won : </p>
                                <p className="text-white font-extralight">{item.championshipsWon}</p>
                              </div>
                            </div>

                          </div>

                          <div className="flex flex-col gap-2">
                            <div className="flex flex-col w-full border rounded-lg border-radius border-gray-500 p-5">
                              <h3 className="font-bold text-white text-2xl">Car</h3>
                              <div className="flex flex-row">
                                <p className="font-bold text-white">Model : </p>
                                <p className="text-white font-extralight">{item.car.model}</p>
                              </div>
                              <div className="flex flex-row">
                                <p className="font-bold text-white">Engine : </p>
                                <p className="text-white font-extralight">{item.car.engine}</p>
                              </div>
                              <div className="flex flex-row">
                                <p className="font-bold text-white">Chassis : </p>
                                <p className="text-white font-extralight">{item.car.chassis}</p>
                              </div>
                              <div className="flex flex-row">
                                <p className="font-bold text-white">Top Speed : </p>
                                <p className="text-white font-extralight">{item.car.topSpeed}</p>
                              </div>
                            </div>
                          </div>

                          <div className="flex flex-col gap-2 w-full border rounded-lg border-radius border-gray-500 p-5">
                            <h3 className="font-bold text-white text-2xl">Drivers </h3>
                            <div className="flex md:flex-row sm:flex-col gap-3">
                              {
                                item.drivers.map((element) => (
                                  <>
                                  <div className="flex flex-col w-full p-2">
                                      <div className="flex flex-row">
                                        <p className="font-bold text-white">Name : </p>
                                        <p className="text-white font-extralight">{element.name}</p>
                                      </div>
                                      <div className="flex flex-row">
                                        <p className="font-bold text-white">Nacionality : </p>
                                        <p className="text-white font-extralight">{element.nationality}</p>
                                      </div>
                                      <div className="flex flex-row">
                                        <p className="font-bold text-white">Date of birth : </p>
                                        <p className="text-white font-extralight">{element.dateOfBirth.getDate()}</p>
                                      </div>
                                      <div className="flex flex-row">
                                        <p className="font-bold text-white">Championships won : </p>
                                        <p className="text-white font-extralight">{element.championshipsWon}</p>
                                      </div>
                                  </div>
                                  </>
                                ))
                              }
                            </div>
                          </div>

                        </>
                      ))
                    }
                    </div>
                </Suspense>
                
                
            </div>
        </section>
    );
}