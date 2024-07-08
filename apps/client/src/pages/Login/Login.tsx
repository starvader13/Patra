import { LogInForm, LogInGif } from "../../sections/Login"

const Login = (): JSX.Element => {
  return <div className="h-screen flex flex-col items-center md:flex-row md:justify-evenly md:items-center">
    <LogInForm />
    <LogInGif />
</div>
}

export default Login