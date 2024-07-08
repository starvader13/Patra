
type FlashMessage = {
	message: String
}

const FlashMessage = ({message}: FlashMessage) => {
	return <div className={"rounded-xl shadow-md shadow-green-800 mb-3 px-4 py-1 bg-gradient-to-tr from-emerald-600 to-red-400 text-lg font-bold text-white font-lato"}>
		{message}
	</div>
}

export default FlashMessage