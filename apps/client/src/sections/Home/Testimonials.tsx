import { StarRating, TestimonialFormat } from "../../components/Home"
import { testimonialData } from "../../data"
import { TestimonialData } from "../../types"

const Testimonials = () => {
	return <div className="flex flex-col justify-center items-center w-full my-16">
		<div className="flex flex-col justify-center items-center py-3 px-8 rounded-2xl gap-3 shadow-xl shadow-blue-900 hover:shadow-white text-white text-opacity-70 font-bold bg-gray-700">
			<StarRating count={5}/>
			<div className="text-5xl font-serif">Don't take our word for it. Take theirs</div>
		</div>
		<div className="w-full grid grid-cols-1 md:grid-cols-4 gap-4">
			{
				testimonialData.map((data: TestimonialData)=>{
					return <TestimonialFormat name={data.name} feedback={data.feedback} profession={data.profession}/>
				})
			}
		</div>
	</div>
}

export default Testimonials;