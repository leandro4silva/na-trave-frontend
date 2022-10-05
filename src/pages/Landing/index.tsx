import {Link} from 'react-router-dom'

import landingImg from '../../assets/image/landing-img.png'

import naTraveBlankImg from '../../assets/icon/na-trave-branco-landing.svg' 


export function Landing(){
    return(
        <main className='bg-[#300219] h-screen w-full px-5'>
            <header className='flex items-center justify-center py-6'>
                <img src={naTraveBlankImg} alt="Na trave" />
            </header>
            <section className='mt-6 lg:flex lg:px-24 items-center justify-between gap-28 2xl:px-44 2xl: h-4/5'>
                <div className='flex flex-col gap-8 items-center justify-center'>
                    <img className='2xl:w-[33rem] w-full' src={landingImg} alt="" />
                </div>
                <div className='flex-1 flex flex-col'>
                    <h1 
                        className='text-[#F4F6FF] font-bold text-4xl xl:text-5xl mt-4 text-center md:text-left xl:leading-[3.6rem]'
                    >
                        Dê o seu palpite na <br/> Copa do Mundo do <br/> Catar 2022! 
                    </h1>   
                    <Link 
                        to="/register"
                        className='flex items-center justify-center bg-[#F4F6FF] hover:bg-[#dbdee6] text-[#300219] rounded-2xl py-5 font-bold text-base xl:text-xl xl:leading-4 w-full mt-8 '
                    >
                        Criar minha conta
                    </Link> 
                    
                    <Link
                        to="/login"
                        className='flex items-center justify-center bg-[#300219] hover:bg-[#240213] text-[#F4F6FF] border border-solid border-[#F4F6FF] rounded-2xl py-5 font-bold text-base xl:text-xl xl:leading-4 w-full mt-4'
                    >
                        Fazer login
                    </Link>              
                </div>
            </section>
        </main>
    )
}