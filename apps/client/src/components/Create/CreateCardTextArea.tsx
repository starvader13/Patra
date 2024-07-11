import { UseFormRegister, Path, FieldValues } from "react-hook-form";

type CreateCardTextArea<T extends FieldValues > = {
    rows: number,
    placeholder: string, 
    header: string, 
    register: UseFormRegister<T>, 
    registerData: Path<T>,
    errors: string | undefined
}

const CreateCardTextArea = <T extends FieldValues,>({rows, placeholder, header, register, registerData, errors}: CreateCardTextArea<T>): JSX.Element => {

    return <div className="text-xl flex flex-row justify-between items-center pt-4 py-4 w-[80%] gap-1">
        <div className="font-bold">{header.toUpperCase()} :</div>
        <div className="w-[75%]">
            <textarea rows={rows} {...register(registerData, {required: `${registerData} is required`})} placeholder={placeholder} className="font-medium p-4 rounded-lg w-full text-gray-600 border-none font-lato tracking-tight focus:outline-none focus:ring-4 focus:ring-gray-400"/>
            {
                errors? <div className="text-lg flex justify-center items-center pt-2 text-red-400">{errors}</div> : null
            }
        </div>
    </div>
}

export default CreateCardTextArea;