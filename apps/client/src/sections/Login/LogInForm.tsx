import { useForm } from "react-hook-form"
import { InputField, SignTextArea, SignButton } from "../../components/Sign";
import { SignInFormInput } from "../../types";

const LogInForm = () => {
    const { register,handleSubmit, formState: {errors} } = useForm<SignInFormInput>({
        defaultValues: {
            email: "",
            password: ""
        }
    });

    const login = (data: any) => {
        console.log(data);
    }

    return <form onSubmit={handleSubmit(login)} className="p-4 flex flex-col gap-3 justify-center items-center">
        <div className="text-6xl tracking-tight font-mono font-medium text-slate-200">Sign In To Patra Account</div>
        <div className="text-3xl flex justify-center pb-6">One Patra account is all you need to manage your cards</div>
        <div className="block h-0.5 w-full bg-sky-200 rounded-xl mb-8"></div>
        <InputField type={"text"} placeholder={"ashutoshgupta1311@gmail.com"} header={"Email"} register={register} registerData={"email"} errors={errors.email?.message}/>
        <InputField type={"password"} placeholder={"pass1234"} header={"Password"} register={register} registerData={"password"} errors={errors.password?.message}/>
        <SignButton buttonContent="Log In" />
        <SignTextArea message="Don't Have Patra Account" link="/signup" anchorElement="Create One" />
    </form>
}

export default LogInForm