
type SignButton = {
    buttonContent: string
}

const SignButton = ({buttonContent}: SignButton) => {
    return <input className={"border-2 py-3 px-6 text-slate-600 bg-gradient-to-br from-yellow-300 to-blue-300 text-2xl rounded-xl font-bold font-lato border-none hover:ring-2 hover:ring-white cursor-pointer active:(bg-gradient-to-br active:from-yellow-400 active:to-blue-400) active:text-white"} type="submit" value={buttonContent}/>
}

export default SignButton