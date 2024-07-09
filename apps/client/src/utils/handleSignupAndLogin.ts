import { NavigateFunction } from "react-router-dom";
import { SetterOrUpdater } from "recoil";
import { IntegrateSignResult, SignFormInput } from "../types";

const handleSignupAndLogin = async (data: SignFormInput, integrateFunction: (data: SignFormInput) => Promise<IntegrateSignResult>, setFlashMessage: SetterOrUpdater<string> , navigate: NavigateFunction) => {
    const response = await integrateFunction(data);
    setFlashMessage(response.message);
    if(response.token){
        localStorage.setItem("authorization", response.token);
        setTimeout(()=>{
            navigate("/home");
            setFlashMessage("");
        }, 1000);
    }
}

export default handleSignupAndLogin;