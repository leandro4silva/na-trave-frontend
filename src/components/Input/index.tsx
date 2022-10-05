import { InputHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string,
    name: string
}

export const Input: React.FC<InputProps> = ({ label, name, ...rest }) => {
    return (
        <div className='flex flex-col'>
            <label 
                htmlFor="email" 
                className='text-[#91949D] font-bold leading-6'
            >
                {label}
            </label>
            <input 
                className='h-14 border border-solid border-[#91949D] rounded-2xl p-4 text-xl placeholder:text-[#696C74]'  
                name={name}
                {...rest}
            />
        </div>
    )
}