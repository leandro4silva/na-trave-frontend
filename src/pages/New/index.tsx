import { HeaderDashboard } from "../../components/HeaderDashbord";
import { MatchGameCard } from "../../components/MatchGameCard"
import { DateSelect } from "../../components/DateSelect";

export function New(){

    const match = {
        time: "04:00",
        slugA: "ing",
        slugB: "ira"
    }

    const match2 = {
        time: "09:00",
        slugA: "sen",
        slugB: "hol"
    }

    const match3 = {
        time: "10:00",
        slugA: "eua",
        slugB: "gal"
    }


    return(
        <main>
            <HeaderDashboard isProfile={false} userName="Leandro Silva"/>         
            <section className="md:px-72 px-5 mt-12">
                <DateSelect />
                <div className="mt-8 flex flex-col gap-4">
                    <MatchGameCard slugA={match.slugA} slugB={match.slugB} time={match.time} />     
                    <MatchGameCard slugA={match2.slugA} slugB={match2.slugB} time={match2.time} />       
                    <MatchGameCard slugA={match3.slugA} slugB={match3.slugB} time={match3.time} />      
                </div>

            </section>
        </main>
    )
}