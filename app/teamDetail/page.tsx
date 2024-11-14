import { Team } from "../lib/data.models";

export default function TeamDetail(team:Team){
    return(
        <section>
            <div className="w-full h-96 p-5">
                <h1 className="text-2xl text-white">
                    Team Information
                </h1>
            </div>
        </section>
    );
}