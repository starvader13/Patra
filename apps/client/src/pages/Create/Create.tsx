import { useState } from "react";
import { useForm } from "react-hook-form";
import CreateForm from "../../sections/Create/CreateForm";
import ColoredTemplate from "../../Template/ColoredTemplate";
import { CreateCard } from "../../types";

const Create = (): JSX.Element => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm<CreateCard>({
        defaultValues: {
            name: "",
            description: "",
            age: 0,
            email: "",
            hobbies: "",
            linkedin: "",
            twitter: "",
            customUrl: "",
            profilePicture: []
        }
    });

	const formData = watch();

    const [url, setUrl] = useState("");

    return (
        <div className="grid grid-cols-2 mx-8 my-2">
            <CreateForm register={register} handleSubmit={handleSubmit} setUrl={setUrl} errors={errors}/>
			<ColoredTemplate name={formData.name} description={formData.description} age={formData.age} email={formData.email} hobbies={formData.hobbies} linkedin={formData.linkedin} twitter={formData.twitter} customUrl={formData.customUrl} url={url}/>
        </div>
    );
}

export default Create;
