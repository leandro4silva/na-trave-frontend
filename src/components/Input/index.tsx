import { InputHTMLAttributes } from 'react'
import {FieldValues} from "react-hook-form";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string,
    name: string,
    hasError?: boolean,
    register?: FieldValues
}



export const Input: React.FC<InputProps> = ({ label, name, register, hasError = false, ...rest }) => {
    return (
        <div
            className='flex flex-col'
        >
            <label 
                htmlFor="email" 
                className='text-[#91949D] font-bold leading-6'
            >
                {label}
            </label>
            <input 
                className={
                    hasError ?
                    `h-14 outline-none border border-solid border-red-600 rounded-2xl p-4 text-xl placeholder:text-[#696C74]` 
                    :
                    `h-14 border border-solid border-[#91949D] rounded-2xl p-4 text-xl placeholder:text-[#696C74]` 
                }  
                name={name}
                {...register}
                {...rest}
            />
        </div>
    )
}