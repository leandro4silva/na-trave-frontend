
interface MatchGameCardProps{
    time: string
    slugA: string,
    slugB: string
}

export function MatchGameCard(match: MatchGameCardProps){

    return (
        <div className="flex flex-col justify-center items-center px-9 py-5 rounded-2xl border border-solid border-[#B1B4BD] ">
            <h4 className="font-bold text-[#696C74] text-sm">{match.time}</h4>
            <div className="flex items-center justify-center gap-2 md:gap-5 mt-4">
                <div className="flex items-center">
                    <span className='mr-2 md:mr-4 text-sm md:text-base leading-3 md:leading-6'>{match.slugA.toLocaleUpperCase()}</span>
                    <img className='w-10 h-10 md:w-14 md:h-14' src={`./img/${match.slugA}.png`} alt="Inglaterra" />
                    <input className="w-10 h-10 md:w-14 md:h-14 bg-[#bb2e5726] md:ml-6 ml-4 font-bold text-[#BB2E57] placeholder:text-[#BB2E57] placeholder:font-bold text-center" type="number"/>
                </div>
                <span className='font-bold text-base md:text-base text-[#BB2E57]'>X</span>
                <div className="flex items-center">
                    <input className="w-10 h-10 md:w-14 md:h-14 bg-[#bb2e5726] md:mr-6 mr-4 font-bold text-[#BB2E57] placeholder:text-[#BB2E57] placeholder:font-bold text-center" type="number"/>
                    <img className='w-10 h-10 md:w-14 md:h-14' src={`./img/${match.slugB}.png`}  alt={match.slugB} />
                    <span className='ml-2 md:ml-4 text-sm md:text-base leading-3 md:leading-6'>{match.slugB.toLocaleUpperCase()}</span>
                </div>
            </div>
        </div>
    )
}