import { ButtonHTMLAttributes } from "react";

interface ButtonProps{
    title: string,

}

export const Button: React.FC<ButtonProps> = ({title, ...rest}) => {
    return(
        <button 
            className="h-14 bg-[#AF053F] hover:bg-[#81032d] flex items-center justify-center text-[#F4F6FF] rounded-2xl font-bold text-xl leading-7"
            {...rest}
        >
            {title}
        </button>
    )
}