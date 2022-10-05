import iconNaTrave from '../../assets/icon/na-trave-preto.svg'

export function HeaderSignInUp(){
    return(
        <header className='py-6 border-b border-[#BB2E57] flex items-center justify-center'>
            <img src={iconNaTrave} alt="Na trave" />
        </header>
    )
}