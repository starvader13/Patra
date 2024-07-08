import { useForm } from "react-hook-form"
import { InputField, SignTextArea, SignButton } from "../../components/Sign";
import { SignUpFormInput } from "../../types";
import { integrateSignup, handleSignupAndLogin } from "../../utils";
import FlashMessage from "../../components/FlashMessage";
import { useRecoilState } from "recoil";
import flashMessageAtom from "../../store/flashMessageAtom";
import { useNavigate } from "react-router-dom";

const SignupForm = () => {
    const { register,handleSubmit, formState: {errors} } = useForm<SignUpFormInput>({
        defaultValues: {
            username: "",
            email: "",
            password: ""
        }
    });

    const [flashMessage, setFlashMessage] = useRecoilState(flashMessageAtom);
    const navigate = useNavigate();

    return <form onSubmit={handleSubmit((data)=>handleSignupAndLogin(data, integrateSignup, setFlashMessage, navigate))} className="p-4 flex flex-col gap-3 justify-center items-center">
        {
            flashMessage? <FlashMessage message={flashMessage} /> : <div className="mb-3"></div>
        }
        <div className="text-6xl tracking-tight font-mono font-medium text-slate-200">Create Your Patra Account</div>
        <div className="text-3xl flex justify-center pb-6">One Patra account is all you need to manage your cards</div>
        <div className="block h-0.5 w-full bg-sky-200 rounded-xl mb-8"></div>
        <InputField type={"text"} placeholder={"Starvader"} header={"Username"} register={register} registerData={"username"} errors={errors.username?.message}/>
        <InputField type={"text"} placeholder={"ashutoshgupta1311@gmail.com"} header={"Email"} register={register} registerData={"email"} errors={errors.email?.message}/>
        <InputField type={"password"} placeholder={"pass1234"} header={"Password"} register={register} registerData={"password"} errors={errors.password?.message}/>
        <SignButton buttonContent="Sign Up" />
        <SignTextArea message="Already Have Patra Account" link="/login" anchorElement="Log In" />
    </form>
}

export default SignupForm