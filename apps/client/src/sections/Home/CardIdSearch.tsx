import { useForm } from "react-hook-form"
import { InputField } from "../../components/Sign";
import { CardId } from "../../types";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const CardIdSearch = () => {
	const { register, handleSubmit, formState: {errors} } = useForm<CardId>({
		defaultValues: {
			cardId: ""
		}
	});

	const navigate = useNavigate()

	const handleCardIdSearch = (data: CardId)=>{
		navigate(`/view-card?id=${data.cardId}`)
	}
	
	return <div className="w-full flex flex-col justify-center items-center my-14">
		<div className="text-7xl font-lato font-semibold text-zinc-200 hover:animate-bounce">
			E-Card Lookup
		</div>
		<div className="h-1 bg-slate-500 mt-2 w-[25%] mb-8"></div>
		<form onSubmit={handleSubmit(handleCardIdSearch)} className="w-[60%] flex flex-row justify-center items-center gap-6">
			<InputField<CardId> type="text" header="Card ID" placeholder="UNIQUE CARD ID" register={register} registerData="cardId" errors={errors.cardId?.message}/>		
			<button type="submit" className="pt-5 cursor-pointer">
				<FaArrowRight size={"48px"} />
			</button>
		</form>
	</div>
}

export default CardIdSearch