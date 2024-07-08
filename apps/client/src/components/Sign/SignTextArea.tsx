import { useNavigate } from "react-router-dom"

type SignTextArea = {
    message: string,
    anchorElement: string,
    link: string
}

const SignTextArea = ({ message, anchorElement, link }: SignTextArea) => {
    const navigate = useNavigate();

    return <div className="text-xl font-lato text-slate-200 flex flex-row justify-center items-center pt-4 gap-1">
        <div className="pr-2">{message}?</div>
        <div onClick={() => (navigate(link))} className="flex flex-row justify-center items-center text-blue-500 underline underline-offset-3 cursor-pointer hover:animate-bounce">
            <div  className="text-lg">{anchorElement} </div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
            </svg>
        </div>
    </div>


}

export default SignTextArea