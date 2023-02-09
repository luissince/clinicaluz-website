import React from "react";
import { ArrowDownCircleIcon, XMarkIcon } from "@heroicons/react/24/outline";

const AccordionUI = ({ title, id, children, index, setIndex}) => {
    const handleSetIndex = (id) => index !== id && setIndex(id);

    const closeWindow = (id) => setIndex(id);

    return (
        <>
            <div
                onClick={() => handleSetIndex(id)}
                className="flex group cursor-pointer w-full mx-auto h-16 justify-between items-center p-2 mt-2 rounded bg-white hover:bg-guindaClaro hover:shadow-lg focus:bg-guindaClaro">
                <div className="flex group cursor-pointer">
                    <div className="text-guindaClaro font-semibold pl-10 group-hover:text-white">
                        {title}
                    </div>
                </div>
                <div className="flex items-center justify-center pr-10" onClick={() => closeWindow(false)}>
                    {
                        index !== id ? (<ArrowDownCircleIcon className="w-6 h-6 group-hover:text-white text-guindaClaro" />) : (<XMarkIcon className="w-6 h-6 group-hover:text-white text-guindaClaro" />)
                    }
                </div>
            </div>
            {
                index === id &&
                (<div className="bg-indigo-50 px-10 font-semibold text-slate-500 w-full h-auto rounded-md border-l-4 py-4 border-blue-300 mb-2">
                    {children}
                </div>)
            }
        </>
    )

};

export default AccordionUI;