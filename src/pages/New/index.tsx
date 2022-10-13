import { HeaderDashboard } from "../../components/HeaderDashbord";
import { MatchGameCard } from "../../components/MatchGameCard"
import { DateSelect } from "../../components/DateSelect";
import { api } from "../../services/api";
import { useAsync, useAsyncFn } from "react-use";
import { format, formatISO } from "date-fns";
import { useEffect, useState } from "react";
import { useAuth } from "../../hooks/auth";


interface GameProps {
    id: string,
    homeTeam: string,
    awayTeam: string,
    gameTime: string,
    gameId: string
}

interface HunchProps{
    id: string,
    gameId: string,
    userId: string,
    homeTeamScore: number,
    awayTeamScore: number
}

interface Hunch{
    [key: string]: HunchProps,
}

export function New() {
    const { user } = useAuth();
    const [currentDate, setCurrentDate] = useState(new Date(2022, 10, 20));
    
    const [hunches, setHunches] = useAsyncFn(async (params)=> {
        const response = await api.get<HunchProps[]>(`/hunches/${params}`);

        const hunches = response.data.reduce((acc:Hunch , hunch: HunchProps) => {
            acc[hunch.gameId] = hunch
            return acc
        }, {})

        return hunches
    });
    
    const [games, setGames] = useAsyncFn(async (params) => {
        const response = await api.get<GameProps[]>(`/games?gameTime=${formatISO(params)}`);
        return response.data;
    });
    
    const username = String(user?.name).charAt(0).toLocaleUpperCase() + String(user?.name).slice(1);

    const isLoading = games.loading || hunches.loading
    const hasError = games.error || hunches.error
    const isDone = !isLoading && !hasError

    useEffect(() => {
        setGames(currentDate);
    }, [currentDate])

    useEffect(() => {
        setHunches(user?.username)
    }, [])

    return (
        <main>
            <HeaderDashboard isProfile={false} userName={username} />
            <section className="md:px-72 px-5 mt-12">
                <DateSelect date={new Date(currentDate)} setDate={setCurrentDate} />
                <div className="mt-8 flex flex-col gap-4 mb-20">
                    {isLoading &&
                        <span className=" flex items-center justify-center mt-6">
                            <svg className="fill-[#AF053F]" width="54" height="54" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <g>
                                    <circle cx="3" cy="12" r="2" />
                                    <circle cx="21" cy="12" r="2" />
                                    <circle cx="12" cy="21" r="2" />
                                    <circle cx="12" cy="3" r="2" />
                                    <circle cx="5.64" cy="5.64" r="2" />
                                    <circle cx="18.36" cy="18.36" r="2" />
                                    <circle cx="5.64" cy="18.36" r="2" />
                                    <circle cx="18.36" cy="5.64" r="2" />
                                    <animateTransform attributeName="transform" type="rotate" dur="1.5s" values="0 12 12;360 12 12" repeatCount="indefinite" />
                                </g>
                            </svg>
                        </span>
                    }
                    {hasError && "Ops! Algo deu errado"}
                    {
                        isDone && 
                        
                            games.value?.map(game =>
                               
                                <MatchGameCard
                                    key={game.id}
                                    gameId={game.id}
                                    homeTeam={game.homeTeam}
                                    awayTeam={game.awayTeam}
                                    homeTeamScore={hunches?.value?.[game.id]?.homeTeamScore}
                                    awayTeamScore={hunches?.value?.[game.id]?.awayTeamScore}
                                    gameTime={format(new Date(game.gameTime), "HH:mm")}
                                />
                            )
                    }

                </div>
            </section>
        </main>
    )
}