import { UseFormRegister, Path, FieldValues } from "react-hook-form";

type CreateCardInputField<T extends FieldValues > = {
    type: string,
    placeholder: string, 
    header: string, 
    register: UseFormRegister<T>, 
    registerData: Path<T>,
    errors: string | undefined
}

const CreateCardInputField = <T extends FieldValues,>({type, placeholder, header, register, registerData, errors}: CreateCardInputField<T>): JSX.Element => {
    errors = errors ? errors[0].toUpperCase() + errors.slice(1, errors.length) : undefined;

    return <div className="text-xl flex flex-row justify-between items-center pt-4 py-4 w-[80%] gap-1">
        <div className="font-bold">{header.toUpperCase()} :</div>
        <div className="w-[75%]">
            <input type={type} {...register(registerData, {required: `${registerData} is required`})} placeholder={placeholder} className="p-4 rounded-lg w-full font-sans font-medium text-gray-900 border-none tracking-tight focus:outline-none focus:ring-4 focus:ring-gray-400"/>
            {
                errors? <div className="text-lg flex justify-center items-center pt-2 text-red-400">{errors}</div> : null
            }
        </div>
    </div>
}

export default CreateCardInputField;