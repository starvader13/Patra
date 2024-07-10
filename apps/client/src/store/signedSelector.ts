import { selector } from "recoil";

const signedSelector = selector({
    key: "signedSelector",
    get: ()=>{
        return !!window.localStorage.getItem("authorization");
    }
})

export default signedSelector