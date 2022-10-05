import React, { ButtonHTMLAttributes } from 'react'

import {FiArrowLeft} from 'react-icons/fi'

interface BackProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    title: string
}

export const Back: React.FC<BackProps> = ({title, ...rest}) => {

    return(
        <button 
            className=' text-[#300219] font-bold text-2xl flex items-center gap-5'

            {...rest}
        >
            <FiArrowLeft className='text-[#AF053F]' size={32}/> {title}
        </button>
    )
}