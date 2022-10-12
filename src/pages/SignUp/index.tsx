import { useNavigate } from 'react-router-dom'
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup";
import { SubmitHandler, useForm } from "react-hook-form";

import { Back } from "../../components/Back"
import { HeaderSignInUp } from "../../components/HeaderSignInUp"
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { api } from '../../services/api';
import { useAuth } from "../../hooks/auth"


const signUp = yup.object({
    name: yup.string().required("Preencha o seu nome"),
    username: yup.string().required("Preencha o seu username"),
    email: yup.string().required("Preencha com o seu email").email("Preencha com um email valido"),
    password: yup.string().required("Preencha a sua senha").min(6, "A sua senha deve ter no minimo 6 caracteres")
});

interface userProps{
    name: string,
    username: string,
    email: string,
    password: string
}

export function SignUp(){
    const {register, handleSubmit, formState:{errors, isSubmitting}} = useForm<userProps>({
        resolver: yupResolver(signUp)
    });

    const { signIn } = useAuth();

    const onSubmit: SubmitHandler<userProps> = async (data) => {
        const {name, email, username, password} = data

        try{
            const response = await api.post("/users", {
                name,
                email,
                username,
                password        
            })

            if(response.status = 201){
                const isLogged = await signIn(data)
                isLogged ? navigate("/new") : null
            }

        }catch(error: any){
            if(error.response){
                alert(error.response.data.message);
            }else{
                alert('Não foi possivel realizar o cadastro, tente novamente mais tarde.');
            }
        }
    }
    
    const navigate = useNavigate();

    function handleBack(){
        navigate(-1);
    }

    return (
        <main>
            <HeaderSignInUp/>
            <section className='pt-8 px-5 md:w-[60rem] md:mx-auto '>
                 <Back title="Entre na sua conta" onClick={handleBack}/>
                <form
                    onSubmit={handleSubmit(onSubmit)}     
                    className='mt-8 flex flex-col'
                >
                    <div className='mb-4'>
                        <Input 
                            label="Seu nome" 
                            placeholder="Digite seu nome" 
                            name="name"
                            hasError={errors.name?.message ? true : false}
                            register={register("name")}
                        />
                        {errors.name?.message ? <p className='text-red-600'>{errors.name?.message}</p> : null}
                    </div>
                    <div className='mb-4'>
                        <Input 
                            label="Seu nome de usuário" 
                            placeholder="Digite um nome de usuário" 
                            name="user_name"
                            hasError={errors.username?.message ? true : false}
                            register={register("username")}
                        />
                        {errors.username?.message ? <p className='text-red-600'>{errors.username?.message}</p> : null}
                    </div>
                    <div className='mb-4'>   
                        <Input 
                            label="Seu e-mail" 
                            placeholder="Digite seu e-mail" 
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
                            placeholder="Digite uma senha" 
                            name="password" 
                            type="password"
                            hasError={errors.password?.message ? true : false}
                            register={register("password")}
                        />
                        {errors.password?.message ? <p className='text-red-600'>{errors.password?.message}</p> : null}
                    </div>
                    <Button title="Criar minha conta" loading={isSubmitting} type="submit"/>
                </form> 
            </section>
        </main>
    )
}