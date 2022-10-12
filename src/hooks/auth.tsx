import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { api } from "../services/api";
import { useNavigate } from "react-router-dom";


interface AuthProviderProps {
    children: ReactNode
}

interface SignInProps {
    email: string,
    password: string
}

interface UserProps {
    id: string,
    name: string,
    username: string,
    email: string,
    password: string,
}

interface AuthProps {
    user: UserProps,
    token: string
}

interface AuthContextProps {
    user?: UserProps,
    signIn(data: SignInProps) : Promise<boolean>
    signOut() :void
}


const AuthContext = createContext<AuthContextProps | null>(null);

function AuthProvider(props: AuthProviderProps) {
    const [data, setData] = useState<AuthProps | null>();

    async function signIn(props: SignInProps) {
        try {
            const response = await api.post("/sessions", {
                email: props.email,
                password: props.password
            })

            const { user, token } = response.data;

            localStorage.setItem("@natrave:user", JSON.stringify(user))
            localStorage.setItem("@natrave:token", token)

            api.defaults.headers.common["Authorization"] = `Bearer ${token}`
            setData({ user, token });
            
            return true;
        } catch (error: any) {
            if (error.response) {
                alert(error.response.data.message);
            } else {
                alert('Não foi possivel logar no sistema, tente novamente mais tarde.');
            }
            return false;
        }
    }

    function signOut(){
        localStorage.removeItem('@rocketmovies:user')
        localStorage.removeItem('@rocketmovies:token')
        setData(null)
    }

    useEffect(() => {
        const token = localStorage.getItem("@natrave:token");
        const user = localStorage.getItem("@natrave:user");

        if(token && user){
            api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

            setData({
                token,
                user: JSON.parse(user)
            })
        }

    }, [])

    return (
        <AuthContext.Provider value={
            {
                signIn,
                user: data?.user,
                signOut
            }
        }>
            {props.children}
        </AuthContext.Provider>
    )
}

function useAuth() {
    const context = useContext(AuthContext) as AuthContextProps
    return context
}

export {
    useAuth,
    AuthProvider
}