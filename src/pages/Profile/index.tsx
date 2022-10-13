import { HeaderDashboard } from "../../components/HeaderDashbord"
import { MatchGameCard } from "../../components/MatchGameCard"
import { DateSelect } from "../../components/DateSelect";

import { useEffect, useState } from "react";
import { formatISO, format } from "date-fns";
import { useAsyncFn } from "react-use";
import { api } from "../../services/api";
import { useAuth } from "../../hooks/auth"

interface GameProps {
    id: string,
    homeTeam: string,
    awayTeam: string,
    gameTime: string
}

export function Profile(){
    const [currentDate, setCurrentDate] = useState(new Date(2022, 10, 20));
    
    const [games, setGames] = useAsyncFn(async (params) => {
        const response = await api.get<GameProps[]>(`/games?gameTime=${formatISO(params)}`)
        return response.data
    });

    const { user } = useAuth(); 
    const username = String(user?.name).charAt(0).toLocaleUpperCase() + String(user?.name).slice(1);

    useEffect(() => {
        setGames(currentDate)
    }, [currentDate])

    return(
        <main>
            <HeaderDashboard isProfile userName={username}/>         
            <section className="md:px-72 px-5 mt-12 mb-20">
                <h4 className="text-[#AF053F] font-bold md:text-3xl text-2xl mb-8">Seus palpites</h4>
                <DateSelect date={currentDate} setDate={setCurrentDate}/>
                <div className="mt-8 flex flex-col gap-4">
                {games.loading &&
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
                    {games.error && "Ops! Algo deu errado"}
                    {
                        !games.loading && !games.error && 
                        
                            games.value?.map(game =>
                                <MatchGameCard
                                    key={game.id}
                                    isProfile
                                    gameId={game.id}
                                    homeTeam={game.homeTeam}
                                    awayTeam={game.awayTeam}
                                    gameTime={format(new Date(game.gameTime), "HH:mm")}
                                />
                            )
                    }
                </div>
            </section>
        </main>
    )
}