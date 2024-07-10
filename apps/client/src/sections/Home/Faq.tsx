import { useCallback, useState } from "react";
import {FaqHeader, Accordion} from "../../components/Home"
import accordionData from "../../data/accordionData"
import AccordionData from "../../types/AccordionData"

const Faq = () => {

	const [selectedAccordion, setSelectedAccordion] = useState(0);

	const handleAccordion = useCallback((index: number) => {
		selectedAccordion === index ? setSelectedAccordion(0) : setSelectedAccordion(index);
	}, [selectedAccordion])

	return <div className="flex flex-col justify-center items-center w-full gap-2 mt-4 mb-6">
		<FaqHeader />
		{
			accordionData.map((data: AccordionData)=>{
				return <Accordion key={data.index} index={data.index} question={data.question} answer={data.answer} handleAccordion={handleAccordion} selectedAccordion={selectedAccordion}/>
			})
		}
	</div>
}

export default Faq