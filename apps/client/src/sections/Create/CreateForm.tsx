import React from "react";
import { CreateCardInputField, CreateCardProfilePicture, CreateCardTextArea } from "../../components/Create";
import { CreateCard } from "../../types";
import { UseFormRegister, FieldErrors, UseFormHandleSubmit } from "react-hook-form";
import { SignButton } from "../../components/Sign";
import { handleCreateCard, integrateCreateCard } from "../../utils";
import { useNavigate } from "react-router-dom";
import flashMessageAtom from "../../store/flashMessageAtom";
import { useRecoilState } from "recoil";
import FlashMessage from "../../components/FlashMessage";

interface CreateFormProps {
    register: UseFormRegister<CreateCard>;
    setUrl: React.Dispatch<React.SetStateAction<string>>;
    handleSubmit: UseFormHandleSubmit<CreateCard>;
    errors: FieldErrors<CreateCard>;
}

const CreateForm = ({ register, setUrl, handleSubmit, errors }: CreateFormProps) => {

    const navigate = useNavigate();
    const [flashMessage, setFlashMessage] = useRecoilState(flashMessageAtom);

    return (
        <form onSubmit={handleSubmit((data: CreateCard)=> handleCreateCard(data, integrateCreateCard, setFlashMessage, navigate))} className="w-full flex flex-col justify-center items-center">
            {
                flashMessage? <FlashMessage message={flashMessage} /> : <div className="mb-3"></div>
            }
            <div className="text-6xl font-lato font-bold py-4 pb-8 hover:animate-bounce">Build Your Own E-Card</div>
            <CreateCardInputField<CreateCard> type="text" placeholder="Ashutosh Gupta" header="Name" register={register} registerData="name" errors={errors.name?.message} />
            <CreateCardTextArea<CreateCard> rows={3} placeholder="Software Engineer who loves to develop software" header="Description" register={register} registerData="description" errors={errors.description?.message} />
            <CreateCardInputField<CreateCard> type="number" placeholder="22" header="Age" register={register} registerData="age" errors={errors.age?.message} />
            <CreateCardInputField<CreateCard> type="email" placeholder="ashutoshgupta1311@gmail.com" header="Email" register={register} registerData="email" errors={errors.email?.message} />
            <CreateCardInputField<CreateCard> type="text" placeholder="Chess, Chess, Code" header="Hobbies" register={register} registerData="hobbies" errors={errors.hobbies?.message} />
            <CreateCardInputField<CreateCard> type="text" placeholder="https://www.linkedin.com/in/ashutoshgupta13" header="Linkedin" register={register} registerData="linkedin" errors={errors.linkedin?.message} />
            <CreateCardInputField<CreateCard> type="text" placeholder="https://x.com/ashutosh01113" header="Twitter" register={register} registerData="twitter" errors={errors.twitter?.message} />
            <CreateCardInputField<CreateCard> type="text" placeholder="https://ashutoshgupta.dev" header="Custom URL" register={register} registerData="customUrl" errors={errors.customUrl?.message} />
            <CreateCardProfilePicture<CreateCard> register={register} registerData="profilePicture" setUrl={setUrl} />
            <div className="my-8">
                <SignButton buttonContent="Create Card" />
            </div>
        </form>
    );
}

export default CreateForm;
