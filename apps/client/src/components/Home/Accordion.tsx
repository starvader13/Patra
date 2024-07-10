import { memo } from "react";
import AccordionData from "../../types/AccordionData";

type Accordion = AccordionData & {
  selectedAccordion: number;
  handleAccordion: (index: number) => void
}

const Accordion = memo(({ index, question, answer, selectedAccordion, handleAccordion}: Accordion): JSX.Element => {

  return <div className={`flex flex-row justify-between items-center w-[95%] lg:w-[80%] border-2 border-gray-700 rounded-lg font-mono m-4 px-4 py-2 gap-48 bg-gray-800 ${selectedAccordion === index ? `shadow-lg` : `shadow-md`} shadow-indigo-400 hover:shadow-white`}>
    <div className={"flex flex-col text-lg md:text-2xl justify-start gap-4 transition-all duration-300 ease-in-out"}>
      <div className={"text-white font-medium tracking-tighter italic"}>
        {question}
      </div>

      <div className={`text-lg md:text-xl hover:text-xl ${selectedAccordion === index ? `block` : `hidden`} pl-2 pb-1 font-lato font-medium text-gray-300 text-opacity-90 `}>{answer}</div>
    </div>
    <div className={"border-2 bg-slate-300 text-black p-1 rounded-md cursor-pointer"} onClick={() => handleAccordion(index)}>
      {
        selectedAccordion !== index ?
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
            stroke="currentColor" className="size-3 lg:size-6 ">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg> :
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
            stroke="currentColor" className="size-3 lg:size-6 ">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
          </svg>
      }
    </div>
  </div>
})

export default Accordion;