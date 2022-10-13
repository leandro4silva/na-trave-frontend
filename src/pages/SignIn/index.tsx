import { useNavigate } from 'react-router-dom'
import { SubmitHandler, useForm, useFormContext } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup";

import { HeaderSignInUp } from '../../components/HeaderSignInUp'
import { Back } from '../../components/Back'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { useAuth } from "../../hooks/auth"


interface SignInProps{
    email: string,
    password: string
}

const signInSchema = yup.object({
    email: yup.string().required("Preencha o seu email"),
    password: yup.string().required("Preencha com a sua senha")
})

export function SignIn(){
    const {register, handleSubmit, formState:{errors, isSubmitting}} = useForm<SignInProps>({
        resolver: yupResolver(signInSchema)
    });

    const navigate = useNavigate();
    const {signIn} = useAuth();
    
    function handleBack(){
        navigate(-1)
    }
    
    const onSubmit: SubmitHandler<SignInProps> = async (data) => {
        const isLogged = await signIn(data);
        isLogged ? navigate("/new") : null
    }

    return(
        <main className='w-full'>
            <HeaderSignInUp/>
            <section className='pt-8 px-5 md:w-[60rem] md:mx-auto '>
                <Back title='Crie a sua conta' onClick={handleBack}/>
                <form
                    onSubmit={handleSubmit(onSubmit)} 
                    className='mt-8 flex flex-col'
                >
                    <div className='mb-4'>
                        <Input 
                            label="Seu email" 
                            name="email" 
                            type="email"
                            hasError={errors.email?.message ? true : false}
                            register={register("email")}
                        />   
                        {errors.email?.message ? <p className='text-red-600'>{errors.email?.message}</p> : null}
                    </div>
                    <div className='mb-8'>
                        <Input 
                            label="Sua senha" 
                            name="password" 
                            type="password"
                            hasError={errors.password?.message ? true : false}
                            register={register("password")}
                        />
                        {errors.password?.message ? <p className='text-red-600'>{errors.password?.message}</p> : null}
                    </div>
                    <Button 
                        title="Login"
                        type='submit'
                        loading={isSubmitting}
                    />
                </form>
            </section>
        </main>        
    )
}