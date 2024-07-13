import axios from "axios";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom"
import ColoredTemplateCard from "../../Template/ColoredTemplateCard";
import SuspenseLoading from "../../components/App/SuspenseLoading";

const ViewCard = () => {
	const [searchParams] = useSearchParams();
	const id = searchParams.get("id")?.toString();

	const [isLoading, setIsLoading] = useState(true);

	if(!id){
		return <div>
			Card Does Not Exist
		</div>
	}

	const [formData, setFormData] = useState({
		id: "",
		createdAt: "",
		updatedAt: "",
		name: "",
		description: "",
		age: 0,
		mailTo: "",
		hobbies: "",
		linkedin: "",
		twitter: "",
		customURL: "",
		imageUrl: ""
	});

	const handleCardIdSearch = async (id: string)=>{

		try{
			const response = await axios.get(`https://patra-qic8.onrender.com/api/v1/card/cards/${id}`)
			setFormData(response.data.card);
		}catch(err: any){
			return null;
		}
		
		setIsLoading(false);
	}
	
	useEffect(()=>{

		handleCardIdSearch(id);
		
		return ()=>{
			setFormData({
				id: "",
				createdAt: "",
				updatedAt: "",
				name: "",
				description: "",
				age: 0,
				mailTo: "",
				hobbies: "",
				linkedin: "",
				twitter: "",
				customURL: "",
				imageUrl: ""
			});
		}
	}, [id])	  

	if(isLoading){
		return <SuspenseLoading />
	}

	return <div>
		{
			formData.name !== "" ? <div className="border-none shadow-xl shadow-indigo-300 rounded-xl mx-10 mb-8 flex justify-center items-center">
				<ColoredTemplateCard name={formData.name} description={formData.description} age={formData.age} email={formData.mailTo} hobbies={formData.hobbies} linkedin={formData.linkedin} twitter={formData.twitter} customUrl={formData.customURL} url={formData.imageUrl}/>
			</div> : <div className="text-7xl h-screen flex justify-center items-center">
				No Card Exist With This Unique ID.
			</div>
		}
	</div>
}

export default ViewCard