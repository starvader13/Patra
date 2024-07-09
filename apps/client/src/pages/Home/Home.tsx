import { CardIdSearch, Faq, Introduction, Testimonials } from "../../sections/Home"

const Home = (): JSX.Element => {
	return <div className="flex flex-col items-start justify-start p-6">
		<Introduction />
		<div className="h-0.5 bg-sky-200 w-full"></div>
		<CardIdSearch />
		<Testimonials />
		<Faq />
	</div>
}

export default Home