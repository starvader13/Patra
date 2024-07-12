import axios from "axios";
import { selector } from "recoil";

const cardSelector = selector({
    key: "cardSelector",
    get: async () => {
        try{
            const response = await axios.get("http://localhost:7000/api/v1/card/cards", {
                headers: {
                    authorization: window.localStorage.getItem("authorization")
                }
            });
            return response.data;
        }catch(e: any){
            return e.response?.data?.message;
        }

    }
})

export default cardSelector;