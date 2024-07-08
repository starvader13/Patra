import { UseFormRegister, Path } from "react-hook-form";
import { SignInFormInput, SignUpFormInput } from "../../types";

type InputField = {
    type: string, 
    placeholder: string, 
    header: string, 
    register: UseFormRegister<SignInFormInput & SignUpFormInput>, 
    registerData: Path<SignUpFormInput>
}

const InputField = ({type, placeholder, header, register, registerData}: InputField): JSX.Element => {
    return <div className="text-xl flex flex-col justify-start items-start gap-2 p-4 w-[70%] ">
        <div className="font-bold ">{header.toUpperCase()}:</div>
        <input type={type} {...register(registerData)} placeholder={placeholder} className="font-medium p-4 rounded-lg w-full text-gray-600 border-none font-lato tracking-tight focus:outline-none focus:ring-4 focus:ring-gray-400"/>
    </div>
}

export default InputField;