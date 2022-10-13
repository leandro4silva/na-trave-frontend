import { useState } from 'react'
import { addDays, subDays, format } from 'date-fns'
import { ptBR } from 'date-fns/locale'

import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'

interface DateSelectProps{
    date: Date,
    setDate: (date:Date) => void
}

export function DateSelect(props: DateSelectProps) {


    function nextDay(){
        props.setDate(addDays(props.date, 1))
    }

    function prevDay(){
        props.setDate(subDays(props.date, 1))
    }

    return (
        <div className="flex items-center justify-center gap-8">
            <button>
                <FiChevronLeft size={24} className='text-[#AF053F]' onClick={prevDay}/>
            </button>
            <h4 className="font-bold leading-6 text-[#300219] text-base">{ format(props.date, "d 'de' MMMM", {locale: ptBR}) }</h4>
            <button>
                <FiChevronRight size={24} className='text-[#AF053F]' onClick={nextDay} />
            </button>
        </div>
    )
}