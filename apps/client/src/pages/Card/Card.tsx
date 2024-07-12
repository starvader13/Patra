import { useRecoilValue } from "recoil"
import cardSelector from "../../store/cardSelector"
import { Cards } from "../../types";
import signedSelector from "../../store/signedSelector";

const Card = (): JSX.Element => {

    const userCards = useRecoilValue(cardSelector);
    const signed = useRecoilValue(signedSelector);

    if(!signed){
        return <div className="text-7xl h-screen flex justify-center items-center">
            No Card Exist for you. Please SignIn And Create A Card
        </div>
    }

    if(!userCards || userCards.cards.length===0){
        return <div className="text-7xl h-screen flex justify-center items-center">
            No Card Exist for you. Please Create A Card
        </div>
    }
    
    return <div className="m-6 h-screen">
        <table className="w-full">
            <thead>
                <tr>
                    <th className="table-header-row">Index</th>
                    <th className="table-header-row">Unique-CardId</th>
                    <th className="table-header-row">Name</th>
                    <th className="table-header-row">Description</th>
                </tr>
                <tr className="h-6"></tr>
            </thead>
            <tbody>
                {
                    userCards.cards.map((card: Cards, index: number)=>{
                        index+=1;
                        return <>
                            <tr key={card.id} className="border-2 border-sky-200 rounded-xl">
                                <td className="text-center border-2 rounded-xl text-xl p-2 text-red-400 text-opacity-90 font-bold font-mono shadow-md shadow-green-400">{index}</td>
                                <td className="text-center border-2 rounded-xl text-xl p-2 text-red-400 text-opacity-90 font-bold font-mono shadow-md shadow-green-400">{card.id}</td>
                                <td className="text-center border-2 rounded-xl text-xl p-2 text-red-400 text-opacity-90 font-bold font-mono shadow-md shadow-green-400">{card.name}</td>
                                <td className="text-center border-2 rounded-xl text-xl p-2 text-red-400 text-opacity-90 font-bold font-mono shadow-md shadow-green-400">{card.description}</td>
                            </tr>
                            <tr className="h-6"></tr>
                        </>
                    })
                }
            </tbody>
        </table>
    </div>
}

export default Card