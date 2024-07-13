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
		email: "",
		hobbies: "",
		linkedin: "",
		twitter: "",
		customURL: "",
		imageUrl: ""
	});
	
	useEffect(()=>{
		axios.get(`https://patra-qic8.onrender.com/api/v1/card/cards/${id}`).then((response)=>{
			setFormData(response.data.card);
		}).catch(()=>{
			return null;
		});

		setIsLoading(false);


		return ()=>{
			setFormData({
				id: "",
				createdAt: "",
				updatedAt: "",
				name: "",
				description: "",
				age: 0,
				email: "",
				hobbies: "",
				linkedin: "",
				twitter: "",
				customURL: "",
				imageUrl: ""
			});
		}
	}, [])	  

	if(isLoading){
		return <SuspenseLoading />
	}

	return <div>
		{
			formData.name ? <div className="border-none shadow-xl shadow-indigo-300 rounded-xl mx-10 mb-8 flex justify-center items-center">
				<ColoredTemplateCard name={formData.name} description={formData.description} age={formData.age} email={formData.email} hobbies={formData.hobbies} linkedin={formData.linkedin} twitter={formData.twitter} customUrl={formData.customURL} url={formData.imageUrl}/>
			</div> : <div className="text-7xl h-screen flex justify-center items-center">
				No Card Exist With This Unique ID.
			</div>
		}
	</div>
}

export default ViewCard