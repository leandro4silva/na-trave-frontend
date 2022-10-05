import iconNaTraveBlank from '../../assets/icon/na-trave-branco.svg'

import { TbUserCircle } from 'react-icons/tb'

export function HeaderDashboard(){
    return(
        <header className='bg-[#AF053F] md:px-72 px-5 fixed top-0 right-0 left-0'>
            <div className='flex justify-between py-6 '>
                <img src={iconNaTraveBlank} alt="Na trave" />
                <TbUserCircle
                    className='text-[#F4F6FF] ' 
                    size={32}
                />
            </div>
            <div className='py-8 flex flex-col gap-4'>
                <h3 className='text-[#F4F6FF] text-base leading-6'>Olá Leandro!</h3>
                <h2 className='text-[#F4F6FF] font-bold text-3xl'>Qual é o seu palpite?</h2>
            </div>
        </header>
    )
}