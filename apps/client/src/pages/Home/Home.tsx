import { CardIdSearch, Faq, Introduction, Testimonials } from "../../sections/Home"

const Home = (): JSX.Element => {
	return <div className="flex flex-col items-start justify-start p-6 px-12">
		<Introduction />
		<div className="h-0.5 bg-slate-600 w-full"></div>
		<CardIdSearch />
		<div className="h-0.5 bg-slate-600 w-full"></div>
		<Testimonials />
		<Faq />
	</div>
}

export default Home