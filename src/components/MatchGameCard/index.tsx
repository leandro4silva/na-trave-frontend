import { parseWithOptions } from "date-fns/fp"

interface MatchGameCardProps{
    gameTime: string
    homeTeam: string,
    awayTeam: string,
    isProfile?: boolean
}

export function MatchGameCard(props: MatchGameCardProps){

    return (
        <div className="flex flex-col justify-center items-center px-9 py-5 rounded-2xl border border-solid border-[#B1B4BD] ">
            <h4 className="font-bold text-[#696C74] text-sm">{props.gameTime}</h4>
            <div className="flex items-center justify-center gap-2 md:gap-5 mt-4">
                <div className="flex items-center">
                    <span className='mr-2 md:mr-4 text-sm md:text-base leading-3 md:leading-6'>{props.homeTeam.toLocaleUpperCase()}</span>
                    <img className='w-10 h-10 md:w-14 md:h-14' src={`./img/${props.homeTeam}.png`} alt="Inglaterra" />
                    <input 
                        className={
                            props.isProfile ?
                                `w-10 h-10 rounded-[20px] md:w-14 md:h-14 md:rounded-[28px] bg-[#bb2e5726] md:ml-6 ml-4 font-bold text-[#BB2E57] placeholder:text-[#BB2E57] placeholder:font-bold text-center`
                            :
                                `w-10 h-10 md:w-14 md:h-14 bg-[#bb2e5726] md:ml-6 ml-4 font-bold text-[#BB2E57] placeholder:text-[#BB2E57] placeholder:font-bold text-center`
                            } 
                        type="number"
                    />
                </div>
                <span className='font-bold text-base md:text-base text-[#BB2E57]'>X</span>
                <div className="flex items-center">
                    <input 
                        className={
                            props.isProfile ?
                                `w-10 h-10 rounded-[20px] md:w-14 md:h-14 md:rounded-[28px] bg-[#bb2e5726] md:mr-6 mr-4 font-bold text-[#BB2E57] placeholder:text-[#BB2E57] placeholder:font-bold text-center`
                            :
                                `w-10 h-10 md:w-14 md:h-14 bg-[#bb2e5726] md:mr-6 mr-4 font-bold text-[#BB2E57] placeholder:text-[#BB2E57] placeholder:font-bold text-center`
                    } type="number"/>
                    <img className='w-10 h-10 md:w-14 md:h-14' src={`./img/${props.awayTeam}.png`}  alt={props.awayTeam} />
                    <span className='ml-2 md:ml-4 text-sm md:text-base leading-3 md:leading-6'>{props.awayTeam.toLocaleUpperCase()}</span>
                </div>
            </div>
        </div>
    )
}