import Format from '../layout/format';

function Contactanos() {
    return (
        <Format type="nav">
            <section>
                <div className="relative overflow-x-hidden">
                    <div>
                        {/* portada */}
                        <div className="relative pt-24 bg-center bg-no-repeat bg-cover bg-[url('/images/bg-inner-hero.jpg')]">
                            <div className="relative z-20 bg-grey-darker py-20 text-center md:py-32 lg:py-36">
                                <h1 className="font-header text-2xl text-white sm:text-3xl md:text-4xl lg:text-5xl">
                                    Contactanos
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container mx-auto">
                    <div className="relative my-16 md:my-20 lg:my-16 xl:mx-28">
                        <div className="flex flex-col-reverse justify-between lg:flex-row">
                            <div className="mx-auto pt-12 sm:w-3/4 md:w-9/10 lg:mx-0 lg:w-1/2 lg:pt-0">
                                <div className="flex items-center">
                                    <h3 className="pr-6 font-header text-2xl text-guindaOscuro sm:text-3xl md:pr-12 md:text-4xl xl:text-5xl">
                                        Dejanos un mensaje
                                    </h3>
                                    <div className="flex-1 h-1 bg-guindaClaro"></div>
                                </div>
                                <p className="pt-6 text-base font-normal text-gray-600">
                                    No dude en hacer cualquier pregunta por teléfono o ponerse en contacto a través de nuestro formulario de contacto a continuación.
                                </p>
                                <form>
                                    <div className="grid grid-cols-1 gap-5 pt-8 md:grid-cols-2 md:pt-10 lg:pt-8 xl:pt-10">
                                        <div className="w-full">
                                            <input type="text" className="w-full py-4 px-3 text-slate-600 border-[1px] border-guindaClaro outline-1 outline-guindaClaro" placeholder="Name" id="nombre del contacto" />
                                        </div>
                                        <div className="w-full">
                                            <input type="email" className="w-full py-4 px-3 text-slate-600 border-[1px] border-guindaClaro outline-1 outline-guindaClaro" placeholder="Email" id="email del contacto" />
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-1 gap-5 pt-4 md:grid-cols-2 md:pt-6">
                                        <div className="w-full">
                                            <input type="tel" className="w-full py-4 px-3 text-slate-600 border-[1px] border-guindaClaro outline-1 outline-guindaClaro" placeholder="Phone" id="telefono del contacto" />
                                        </div>
                                        <div className="w-full">
                                            <input type="text" className="w-full py-4 px-3 text-slate-600 border-[1px] border-guindaClaro outline-1 outline-guindaClaro" placeholder="Address" id="direccion de contacto" />
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-1 pt-4 md:pt-6">
                                        <textarea className="py-4 px-3 border-[1px] border-guindaClaro text-slate-600 outline-1 outline-guindaClaro h-48" placeholder="Description" id="messaje del contacto"></textarea>
                                    </div>
                                    <button type="submit" className="md:px-5 md:text-base text-center px-4 py-6 font-medium bg-guindaOscuro text-white mt-4 w-full md:mt-6 hover:bg-guindaClaro" aria-label="Submit button">
                                        ENVIAR MENSAJE
                                    </button>
                                </form>
                            </div>
                            <div className="mx-auto sm:w-3/4 md:w-9/10 lg:mx-0 lg:w-2/5">
                                <div className="flex items-center pb-12">
                                    <h3 className="pr-6 font-header text-2xl text-guindaOscuro sm:text-3xl md:pr-12 md:text-4xl xl:text-5xl">
                                        Contacto rapido
                                    </h3>
                                    <div className="flex h-1 flex-1 bg-guindaClaro"></div>
                                </div>
                                <div className="flex items-center pb-8">
                                    <span><img src="/images/telefono2.svg" alt="phone icon" className="h-auto w-20" /></span>
                                    <div className="pl-8 md:pl-10">
                                        <p className="font-semi-bold font-body text-base uppercase text-primary md:text-lg">
                                            TELEFONO
                                        </p>
                                        <ul className="list-disc text-base font-normal text-slate-500">
                                            <li className="py-2">+51 123 456 789</li>
                                            <li className="py-2">(01) 123 4567</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="flex items-center pb-8">
                                    <div>
                                        <img src="images/email.svg" alt="email icon" className="h-auto w-20" />
                                    </div>
                                    <div className="pl-8 md:pl-10">
                                        <p className="font-semi-bold text-base uppercase text-primary md:text-lg">
                                            Email
                                        </p>
                                        <p className="text-base font-normal text-slate-500">
                                            correoelectronico@outlook.com
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-center pb-8">
                                    <span><img src="/images/horarios.svg" alt="time icon" className="h-auto w-20" /></span>
                                    <div className="pl-8 md:pl-10">
                                        <p className="font-semi-bold text-base uppercase text-primary md:text-lg">
                                            horarios
                                        </p>
                                        <p className="text-base font-normal text-slate-500">
                                            Lunes - Viernes: 9:00AM - 6:00PM
                                        </p>
                                        <p className="text-base font-normal text-slate-500">
                                            Sabados - Dominos: 9:00AM - 4:00PM
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-center pb-8">
                                    <span><img src="/images/ubicacion2.svg" alt="time icon" className="h-auto w-20" /></span>
                                    <div className="pl-8 md:pl-10">
                                        <p className="font-semi-bold text-base uppercase text-primary md:text-lg">
                                            ubicacion
                                        </p>
                                        <ul className="list-disc text-base font-normal text-slate-500">
                                            <li className="py-2">SEDE CENTRAL: Av. Arequipa 1148 Urb. Santa Beatriz</li>
                                            <li className="py-2">SEDE SJL: Av. Gran Chimú 085, Zarate</li>
                                            <li className="py-2">SEDE BREÑA: Av. Tingo María 623</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container mx-auto">
                    <div className="relative my-16 md:my-20 lg:my-16 xl:mx-28">
                        <div className="flex flex-col-reverse justify-between lg:flex-row">
                            <div className="w-full">
                                <iframe width="100%" height="600" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Avenida%20Arequipa%201148,%20Lima,%20Per%C3%BA+(Your%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
                                    {/* <a href="https://www.gps.ie/sport-gps/">gps watches</a> */}
                                </iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Format>
    )
}
export default Contactanos;