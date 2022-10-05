import {useNavigate} from 'react-router-dom'

import { HeaderSignInUp } from '../../components/HeaderSignInUp'
import { Back } from '../../components/Back'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'


export function SignIn(){

    const navigate = useNavigate()

    function handleBack(){
        navigate(-1)
    }

    return(
        <main className='w-full'>
            <HeaderSignInUp/>

            <section className='pt-8 px-5 md:w-[60rem] md:mx-auto '>
                <Back title='Crie a sua conta' onClick={handleBack}/>
                <form className='mt-8 flex flex-col'>
                    <div className='mb-4'>
                        <Input label="Seu email" name="email" type="email"/>      
                    </div>
                    <div className='mb-8'>
                        <Input label="Sua senha" name="password" type="password"/>
                    </div>
                    <Button title='Login'/>
                </form>
            </section>
        </main>        
    )
}