import { HeaderDashboard } from "../../components/HeaderDashbord"
import { MatchGameCard } from "../../components/MatchGameCard"

import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'

export function Profile(){

    const match = {
        gameTime: "04:00",
        homeTeam: "ing",
        awayTeam: "ira"
    }

    return(
        <main>
            <HeaderDashboard isProfile userName="Leandro Silva"/>         
            <section className="md:px-72 px-5 mt-12">
                <h4 className="text-[#AF053F] font-bold md:text-3xl text-2xl mb-8">Seus palpites</h4>
                <div className="flex items-center justify-center gap-8">
                    <button>
                        <FiChevronLeft size={24} className='text-[#AF053F]'/>
                    </button>
                    <h4 className="font-bold leading-6 text-[#300219] text-base">24 de novembro</h4>
                    <button>
                        <FiChevronRight size={24} className='text-[#AF053F]'/>
                    </button>
                </div>
                <div className="mt-8 flex flex-col gap-4">
                    <MatchGameCard homeTeam={match.homeTeam} awayTeam={match.awayTeam} gameTime={match.gameTime} isProfile />          
                </div>
            </section>
        </main>
    )
}