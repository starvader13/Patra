import IntroductionImage from "../../components/Home/IntroductionImage"

const Introduction = () => {
    return <div className="w-full flex justify-between items-center py-12 mt-4 mb-8">
        <div className="flex flex-col gap-8 font-lato ml-6">
            <div className="text-4xl font-semibold text-zinc-200 text-opacity-90"><span className="text-red-400">Create.</span> Share. <span className="text-red-400">Impress.</span> Instantly</div>
            <div className="text-9xl font-medium pt-6">Patra </div>
            <div className="text-7xl text-red-400 font-bold pb-10">Digital E-Card Generator</div>
            <div className="text-5xl font-mono font-semibold text-zinc-300 text-opacity-80 tracking-tight">Create Diverse E-Card With Custom Details!</div>
        </div>
        <IntroductionImage />
    </div>
}

export default Introduction