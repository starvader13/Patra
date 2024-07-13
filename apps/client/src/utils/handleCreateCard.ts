import { NavigateFunction } from "react-router-dom";
import { SetterOrUpdater } from "recoil";
import { CreateCard, integrateCreateCardResult } from "../types"

const handleCreateCard = async (data: CreateCard, integrateFunction: (data: CreateCard) => Promise<integrateCreateCardResult>, setFlashMessage: SetterOrUpdater<string> , navigate: NavigateFunction) => {
    const response = await integrateFunction(data);
    setFlashMessage(response.message);
    
    if(response.status){
        return setTimeout(()=>{
            navigate("/cards");
            window.location.reload();
            setFlashMessage("");
        }, 1000);
    }
}

export default handleCreateCard