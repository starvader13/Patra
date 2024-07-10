import {FaqHeader, Accordion} from "../../components/Home"

const Faq = () => {
	return <div className="flex flex-col justify-center items-center w-full gap-14 mt-4">
		<FaqHeader />
		<Accordion />
	</div>
}

export default Faq