import {useNavigate} from 'react-router-dom'

import { Back } from "../../components/Back"
import { HeaderSignInUp } from "../../components/HeaderSignInUp"
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"


export function SignUp(){
    const navigate = useNavigate()

    function handleBack(){
        navigate(-1)
    }

    return (
        <main>
            <HeaderSignInUp/>
            <section className='pt-8 px-5 md:w-[60rem] md:mx-auto '>
                 <Back title="Entre na sua conta" onClick={handleBack}/>
                <form className='mt-8 flex flex-col'>
                    <div className='mb-4'>
                        <Input label="Seu nome" placeholder="Digite seu nome" name="name"/>
                    </div>
                    <div className='mb-4'>
                        <Input label="Seu nome de usuário" placeholder="Digite um nome de usuário" name="user_name"/>
                    </div>
                    <div className='mb-4'>   
                        <Input label="Seu e-mail" placeholder="Digite seu e-mail" name="email" type="email"/>
                    </div>
                    <div className='mb-8'>
                        <Input label="Sua senha" placeholder="Digite uma senha" name="password" type="password"/>
                    </div>
                    <Button title="Criar minha conta"/>
                </form> 
            </section>
        </main>
    )
}