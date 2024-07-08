import { SignupForm, SignupGif } from "../../sections/Signup";

const Signup = (): JSX.Element => {
    return<div className="h-screen flex flex-col items-center md:flex-row md:justify-evenly md:items-center">
        <SignupForm />
        <SignupGif />
    </div>
}

export default Signup;