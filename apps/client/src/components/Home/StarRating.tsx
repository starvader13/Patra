import { useState } from "react";
import { FaStar } from "react-icons/fa6";

const StarRating = ({count}: {count: number}) => {

	const [selectedStar, setSelectedStar] = useState(0);
	const [hoverStar, setHoverStar] =useState(0);

	const handleMouseMove = (index: number) => {
		setHoverStar(index);
	}

	const handleMouseLeave = () => {
		setHoverStar(selectedStar);
	}

	const handleClick = (index: number) => {
		setSelectedStar(index);
	}

	return <div className="flex flex-row justify-center items-center cursor-pointer">
		{
			[...Array(count)].map((_, index)=>{
				index+=1;
				return <FaStar 
					key={index}
					onMouseMove={()=>handleMouseMove(index)}
					onMouseLeave={handleMouseLeave}
					onClick={()=>handleClick(index)}
					size={24}
					className={`${selectedStar>=index || hoverStar>=index ? "text-yellow-300" : 'text-white'}`}
				/>
			})
		}
	</div>
}

export default StarRating