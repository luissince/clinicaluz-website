const Pilares = () => (
    <div className="container overflow max-w-screen-2xl mx-auto ss:px-12 px-6 py-12 bg-[url('/images/Fondo1.svg')] bg-center bg-cover bg-no-repeat">
        <div className="container relative mr-auto ml-auto">
            <div className="mb-24">
                <h2 className="w-[700px] max-w-full my-0 mx-auto text-guindaOscuro text-[32px] leading-[1.25em]] text-center font-medium">Somos más que una clinica oftalmológica</h2>
            </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-4 gap-x-8">

            <a className="relative flex w-[24%] sm:w-[100%] mx-1 p-a flex-col items-center rounded-lg no-underline cursor-pointer hover:shadow-shadowPilares">
                <div className="flex flex-col justify-between items-start ">
                    <img src="/images/medicos.svg" />
                    <div className="flex w-60 pr-0 pl-3 flex-col justify-between items-start">
                        <h3 className="mt-0 mb-2 text-guindaOscuro font-display text-xl font-bold tracking-tight">Excelencia en atención</h3>
                        <p className="mb-10 text-base leading-7 text-slate-600">Contamos con el mejor equipo médico a su disposición.</p>
                    </div>
                    <div className="absolute flex items-center cursor-pointer w-56 bottom-5 pl-3">
                        <div className="mr-1 inset-0 text-slate-600 text-xs block pb-[2px]">Leer más</div>
                        <img className="align-middle" src="/images/arrow-right.svg" />
                    </div>
                </div>
            </a>

            <a className="relative flex w-[24%] sm:w-[100%] mx-1 p-a flex-col items-center rounded-lg no-underline cursor-pointer hover:shadow-shadowPilares">
                <div className="flex flex-col justify-between items-start ">
                    <img src="/images/medicos.svg" />
                    <div className="flex w-60 pr-0 pl-3 flex-col justify-between items-start">
                        <h3 className="mt-0 mb-2 text-guindaOscuro font-display text-xl font-bold tracking-tight">Educación</h3>
                        <p className="mb-10 text-base leading-7 text-slate-600">Contamos con el mejor equipo médico a su disposición.</p>
                    </div>
                    <div className="absolute flex items-center cursor-pointer w-56 bottom-5 pl-3">
                        <div className="mr-1 inset-0 text-slate-600 text-xs block pb-[2px]">Leer más</div>
                        <img className="align-middle" src="/images/arrow-right.svg" />
                    </div>
                </div>
            </a>

            <a className="relative flex w-[24%] sm:w-[100%] mx-1 p-a flex-col items-center rounded-lg no-underline cursor-pointer hover:shadow-shadowPilares">
                <div className="flex flex-col justify-between items-start ">
                    <img src="/images/medicos.svg" />
                    <div className="flex w-60 pr-0 pl-3 flex-col justify-between items-start">
                        <h3 className="mt-0 mb-2 text-guindaOscuro font-display text-xl font-bold tracking-tight">Investigación I+D+i</h3>
                        <p className="mb-10 text-base leading-7 text-slate-600">Contamos con el mejor equipo médico a su disposición.</p>
                    </div>
                    <div className="absolute flex items-center cursor-pointer w-56 bottom-5 pl-3">
                        <div className="mr-1 inset-0 text-slate-600 text-xs block pb-[2px]">Leer más</div>
                        <img className="align-middle" src="/images/arrow-right.svg" />
                    </div>
                </div>
            </a>

            <a className="relative flex w-[24%] sm:w-[100%] mx-1 p-a flex-col items-center rounded-lg no-underline cursor-pointer hover:shadow-shadowPilares">
                <div className="flex flex-col justify-between items-start ">
                    <img src="/images/medicos.svg" />
                    <div className="flex w-60 pr-0 pl-3 flex-col justify-between items-start">
                        <h3 className="mt-0 mb-2 text-guindaOscuro font-display text-xl font-bold tracking-tight">Responsabilidad Social</h3>
                        <p className="mb-10 text-base leading-7 text-slate-600">Contamos con el mejor equipo médico a su disposición .</p>
                    </div>
                    <div className="absolute flex items-center cursor-pointer w-56 bottom-5 pl-3">
                        <div className="mr-1 inset-0 text-slate-600 text-xs block pb-[2px]">Leer más</div>
                        <img className="align-middle" src="/images/arrow-right.svg" />
                    </div>
                </div>
            </a>

        </div>
    </div>
);

export default Pilares;