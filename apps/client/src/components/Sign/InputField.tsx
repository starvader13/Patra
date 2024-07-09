import { UseFormRegister, Path } from "react-hook-form";
import { SignInFormInput, SignUpFormInput } from "../../types";

type InputField = {
    type: string, 
    placeholder: string, 
    header: string, 
    register: UseFormRegister<SignInFormInput & SignUpFormInput>, 
    registerData: Path<SignUpFormInput & SignInFormInput>,
    errors: string | undefined
}

const InputField = ({type, placeholder, header, register, registerData, errors}: InputField): JSX.Element => {
    errors = errors ? errors[0].toUpperCase() + errors.slice(1, errors.length) : undefined;

    return <div className="text-xl flex flex-col justify-start items-start pt-4 py-4 w-[70%] gap-1">
        <div className="font-bold">{header.toUpperCase()} :</div>
        <div className="w-full">
            <input type={type} {...register(registerData, {required: `${registerData} is required`})} placeholder={placeholder} className="font-medium p-4 rounded-lg w-full text-gray-600 border-none font-lato tracking-tight focus:outline-none focus:ring-4 focus:ring-gray-400"/>
            {
                errors? <div className="text-lg flex justify-center items-center pt-2 text-red-400">{errors}</div> : null
            }
        </div>
    </div>
}

export default InputField;