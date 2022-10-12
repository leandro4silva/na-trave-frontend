import { HeaderDashboard } from "../../components/HeaderDashbord";
import { MatchGameCard } from "../../components/MatchGameCard"
import { DateSelect } from "../../components/DateSelect";

export function New(){

    const match = {
        gameTime: "04:00",
        homeTeam: "ing",
        awayTeam: "ira"
    }



    return(
        <main>
            <HeaderDashboard isProfile={false} userName="Leandro Silva"/>         
            <section className="md:px-72 px-5 mt-12">
                <DateSelect />
                <div className="mt-8 flex flex-col gap-4">
                    <MatchGameCard homeTeam={match.homeTeam} awayTeam={match.awayTeam} gameTime={match.gameTime} />           
                </div>

            </section>
        </main>
    )
}