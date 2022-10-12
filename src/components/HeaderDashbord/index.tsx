import iconNaTraveBlank from '../../assets/icon/na-trave-branco.svg'

import { RiShutDownLine} from "react-icons/ri"
import { TbUserCircle } from 'react-icons/tb'
import {FiArrowLeft} from 'react-icons/fi'

import { useAuth } from "../../hooks/auth"
import { Link, useNavigate } from "react-router-dom";


interface HeaderDashboardProps{
    isProfile: boolean,
    userName: string
}

export function HeaderDashboard(props: HeaderDashboardProps){
    const navigate = useNavigate();
    const {signOut} = useAuth();

    function handleSignOut(){
        signOut();
        navigate("/")
    }

    function handleBack(){
        navigate(-1);
    }

    return(
        <header className='bg-[#AF053F] md:px-72 px-5 '>
            <div className='flex justify-between py-6 '>
                <img src={iconNaTraveBlank} alt="Na trave" />

                { props.isProfile 
                    ? 
                    <button 
                        className='text-white font-bold flex items-center gap-1'
                        title='Sair'
                        type='button'
                        onClick={handleSignOut}
                    > 
                        <RiShutDownLine size={28}/> 
                    </button>
                    :
                    <Link to={"/profile"}>
                        <TbUserCircle
                            className='text-[#F4F6FF] ' 
                            size={32}
                        />
                    </Link>
                }

            </div>
            <div className='py-8'>
                <h3 
                    className={ props.isProfile ? 'mb-8 text-[#F4F6FF] font-bold' :'text-[#F4F6FF] text-base leading-6 mb-4'}
                >{
                
                    props.isProfile ? 
                        <button onClick={handleBack}>
                            <FiArrowLeft size={32}/> 
                        </button>
                    : 
                        `Olá ${props.userName}`}</h3>

                <h2 className={props.isProfile ? 'text-2xl md:text-3xl font-bold text-[#F4F6FF]' :'text-[#F4F6FF] font-bold text-3xl'}>{ props.isProfile ? props.userName : 'Qual é o seu palpite?'}</h2>
            </div>
        </header>
    )
}