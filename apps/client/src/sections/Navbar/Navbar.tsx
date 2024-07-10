import { useNavigate } from "react-router-dom"

const Navbar = () => {
	const navigate = useNavigate();

	return (
		<div className="w-full">
			<div className="grid grid-cols-3 mx-2 mt-4 px-10 py-2 rounded-lg text-xl text-slate-200 font-medium leading-7 bg-black-950">
				<div className="flex flex-row justify-start items-center gap-8">
					<img src="/logoLight.svg" alt="Patra Logo" className="w-16 hover:animate-bounce cursor-pointer " onClick={()=>navigate("/")}/>
				</div>

				<div className="flex flex-row justify-center items-center gap-8">
					<div className="navtext" onClick={()=>navigate("/create-card")}>Create-Card</div>
					<div className="navtext" onClick={()=>navigate("/cards")}>Cards</div>
				</div>

				<div className="flex flex-row justify-end items-center gap-8">
					<div className="navtext" onClick={()=>navigate("/signup")}>SignUp</div>
					<div className="navtext" onClick={()=>navigate("/login")}>SignIn</div>
					{/* <div className="navlink">Logout</div> */}
				</div>
			</div>
			<div className="h-0.5 bg-slate-400 mx-6 rounded-xl shadow-xl shadow-cyan-400"></div>
		</div>
	)
}

export default Navbar