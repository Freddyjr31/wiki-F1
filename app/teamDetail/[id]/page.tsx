import { Team } from "@/app/lib/data.models";
import Image from "next/image";
import { Suspense } from "react";
import { ListTeams } from "../services/team.services";


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