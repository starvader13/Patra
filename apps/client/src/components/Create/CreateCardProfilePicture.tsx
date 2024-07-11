import React from "react";
import { FieldValues, UseFormRegister, Path } from "react-hook-form";

interface CreateCardProfilePictureProps<T extends FieldValues> {
    register: UseFormRegister<T>;
    registerData: Path<T>;
    setUrl: React.Dispatch<React.SetStateAction<string>>;
}

const CreateCardProfilePicture = <T extends FieldValues,>({ register, registerData, setUrl }: CreateCardProfilePictureProps<T>) => {

    const handleProfileAvatar = (data: FileList) => {
        const file = data[0];
        if (file) {
            setUrl(URL.createObjectURL(file));
        }
    }

    return (
        <div className={"flex flex-col gap-2 w-full justify-center items-center pt-1"}>
            <label htmlFor="profilePicture" className={"text-lg"}>Profile / Avatar :</label>
            <div className={"flex flex-row justify-center w-full items-center gap-8 pl-14"}>
                <input type={"file"} {...register(registerData, { required: "Profile/Avatar is required" })} placeholder={"Profile/Avatar"} accept={"image/*"} className={"input-text w-[58%]"} onChange={(e) => { handleProfileAvatar(e.target.files as FileList) }} />

                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 cursor-pointer">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
                </svg>
            </div>
        </div>
    );
}

export default CreateCardProfilePicture;
