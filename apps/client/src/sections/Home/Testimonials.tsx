import { StarRating } from "../../components/Home"

const Testimonials = () => {
	return <div className="flex flex-col justify-center items-center w-full my-12">
		<div className="flex flex-col justify-center items-center py-3 px-8 rounded-2xl gap-3 shadow-xl shadow-blue-900 hover:shadow-white text-white text-opacity-70 font-bold bg-gray-700">
			<StarRating count={5}/>
			<div className="text-5xl font-serif">Don't take our word for it. Take theirs</div>
		</div>
		
	</div>
}

export default Testimonials