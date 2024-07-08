import { useForm } from "react-hook-form"
import InputField from "../../components/Sign/InputField";
import { SignUpFormInput } from "../../types";
import SignTextArea from "../../components/Sign/SignTextArea";
import SignButton from "../../components/Sign/SignButton";

const SignupForm = () => {
    const { register } = useForm<SignUpFormInput>({
        defaultValues: {
            username: "",
            email: "",
            password: ""
        }
    });

    return <form className="p-4 flex flex-col gap-3 justify-center items-center">
        <div className="text-6xl tracking-tight font-mono font-medium text-slate-200">Create Your Patra Account</div>
        <div className="text-3xl flex justify-center pb-6">One Patra account is all you need to manage your cards</div>
        <div className="block h-0.5 w-full bg-sky-200 rounded-xl mb-2"></div>
        <InputField type={"text"} placeholder={"Starvader"} header={"Username"} register={register} registerData={"username"}/>
        <InputField type={"text"} placeholder={"ashutoshgupta1311@gmail.com"} header={"Email"} register={register} registerData={"email"}/>
        <InputField type={"password"} placeholder={"pass1234"} header={"Password"} register={register} registerData={"password"}/>
        <SignButton buttonContent="Sign Up" />
        <SignTextArea message="Already Have Patra Account" link="/login" anchorElement="Log In" />
    </form>
}

export default SignupForm