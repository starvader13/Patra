import { NavigateFunction } from "react-router-dom";
import { SetterOrUpdater } from "recoil";
import { IntegrateSignResult, SignUpFormInput } from "../types";

const handleSignupAndLogin = async (data: SignUpFormInput, integrateFunction: (data: SignUpFormInput) => Promise<IntegrateSignResult>, setFlashMessage: SetterOrUpdater<string> , navigate: NavigateFunction) => {
    const response = await integrateFunction(data);
    setFlashMessage(response.message);
    if(response.token){
        localStorage.setItem("authorization", response.token);
        setTimeout(()=>{
            navigate("/");
            setFlashMessage("");
        }, 1000);
    }
}

export default handleSignupAndLogin;