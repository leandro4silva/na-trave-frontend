import { useState } from 'react'
import { addDays, subDays, format } from 'date-fns'
import { ptBR } from 'date-fns/locale'

import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'

export function DateSelect() {

    const [currentDate, setCurrentDate] = useState(new Date('2022-11-20T00:00:00Z'))

    function nextDay(){
        setCurrentDate(prevState => addDays(prevState, 1))
    }

    function prevDay(){
        setCurrentDate(prevState => subDays(prevState, 1))
    }

    return (
        <div className="flex items-center justify-center gap-8">
            <button>
                <FiChevronLeft size={24} className='text-[#AF053F]' onClick={prevDay}/>
            </button>
            <h4 className="font-bold leading-6 text-[#300219] text-base">{ format(currentDate, "d 'de' MMMM", {locale: ptBR}) }</h4>
            <button>
                <FiChevronRight size={24} className='text-[#AF053F]' onClick={nextDay} />
            </button>
        </div>
    )
}