import Format from '../layout/format';
import PreguntasFrecuentes from '../components/preguntasFrecuentes';

function Pacientes() {
    return (
        <Format type="nav">

            <section className="relative w-full h-screen overflow-hidden bg-center bg-no-repeat bg-cover bg-[url('/images/pacientesBanner.png')]">
                <div className="container relative w-full px-8 pt-32 pb-24 mx-auto lg:px-4">
                    <div className="flex flex-col w-full mb-12 text-left lg:text-center mt-12">
                        {/* <strong className="mb-4 text-xs font-semibold tracking-widest uppercase text-slate-500"> a great header right here</strong> */}
                        <h1 className="mb-6 font-serif text-4xl font-bold tracking-tighter text-guindaOscuro md:text-8xl lg:text-6xl">
                            Pacientes
                            {/* <br className="hidden lg:block"/>
                                because less is more. */}
                        </h1>
                        <p className="mx-auto text-lg leading-snug text-slate-900 lg:w-1/2">
                            En este módulo encontrará información relevante sobre tratamientos, horarios; asi como tambien algunas preguntas frecuentes.
                        </p>
                    </div>
                    <div className="flex w-full mt-6 lg:justify-center">
                        <div className="mt-3 rounded-lg sm:mt-0">
                            <a href="" className="inline-flex items-center px-8 py-3 text-lg text-white transition-all duration-500 ease-in-out transform bg-guindaOscuro rounded-lg md:mb-2 lg:mb-0 hover:border-white hover:bg-guindaClaro focus:ring-2 ring-offset-current ring-offset-2">
                                Registrate
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="text-white lg:py-20 lg:px-8 px-6 py-12 xl:pb-32 xl:pt-24 bg-[#EFF6FF]">
                    {/* Titulo de la grilla */}
                    <div className="mx-auto max-w-7xl">
                        <h2 className="font-medium text-black md:text-4xl sm:text-3xl text-2xl text-center">Optica</h2>
                        <p className="mx-auto max-w-2xl text-gray-600 mt-2 lg:text-lg text-lg text-center">We are mmitted to a unique, cutting-edge approach to that</p>
                    </div>
                    {/* Div que contiene la grilla */}
                    <div className="mx-auto mt-12 max-w-full">
                        {/* aca empieza la grilla segun las columnas que le demos */}
                        <div className="grid gap-6 lg:grid-cols-6 lg:gap-x-8 md:grid-cols-2">
                            {/* aca empieza la fila numero 1 */}
                            <div className="flex flex-col col-span-1 lg:col-span-1 md:col-span-2 overflow-hidden relative justify-end rounded-lg">
                                <img src="/images/pac1.png" className="object-cover h-full absolute inset-y-0 w-full" />
                                <div className="pt-48 bg-gradient-to-t pb-6 lg:pt-12 from-[#111827] px-6 relative">
                                    <h3 className="font-bold mb-1 leading-7 text-white">Optica</h3>
                                </div>
                            </div>

                            <div className="flex flex-col col-span-1 lg:h-96 lg:col-span-3 relative overflow-hidden justify-end rounded-lg">
                                <img src="/images/fondo1.png" className="object-cover h-full absolute inset-y-0 w-full" />
                                <div className="pt-48 bg-gradient-to-t pb-6 lg:pt-12 from-[#111827] px-6 relative">
                                    {/* <h3 className="font-bold mb-1 leading-7 text-white">Laboratorio de análisis clínicos</h3> */}
                                    <p className="text-white">Contamos con un laboratorio de análisis clínicos que ofrece a nuestros pacientes y público en general una amplia variedad de estudios de laboratorio.<br />
                                        El acceso es práctico y sencillo, únicamente hay que pasar por los filtros sanitarios para cumplir con todos los protocolos. Con la intención de facilitar la entrada las personas que vengan al laboratorio no tendrán que hacer fila.
                                        Además de estudios para la atención de diagnósticos oftalmológicos, contamos con diversos paquetes de chequeos de rutina y análisis clínicos, a precios muy accesibles, para conocer tu estado de salud de manera preventiva.<br />
                                        Visita nuestro laboratorio para que compruebes que somos la mejor opción. Te invitamos a agendar tu cita.
                                        <br />
                                        <br />
                                        Horario de atención:
                                        Lunes a Viernes de 07:00 a 14:30 hrs.
                                        Sábado de 07:00 a 12:30 hrs.
                                        Teléfono: 55 5128 1140 Ext. 550.</p>
                                </div>
                            </div>
                            {/* aca termina la fila numero 1 */}

                            {/*⚠️ esta es la tercera columna pero consume un row-span que consume todas las filas ⚠️*/}
                            <div className="flex flex-col col-span-1 pt-4 lg:col-span-2 md:row-span-5 overflow-hidden relative row-span-1 justify-start rounded-lg">
                                <img src="images/pac3.png" className="object-cover h-full absolute inset-y-0 w-full" />
                                <div className="pb-6 px-6 relative">
                                    <h3 className="font-extrabold mb-1 leading-7 text-guindaClaro text-center text-3xl py-8">Preguntas Frecuentes</h3>
                                    {/* <p className="text-white">
                                        lol.</p> */}
                                    <PreguntasFrecuentes />
                                </div>
                            </div>

                            {/* aca empieza la fila numero 2 */}
                            <div className="flex flex-col col-span-1 lg:h-96 lg:col-span-3 md:col-span-1 overflow-hidden relative row-span-1 justify-end rounded-lg">
                                <img src="/images/fondo2.png" className="object-cover h-full absolute inset-y-0 w-full" />
                                <div className="pt-48 bg-gradient-to-t pb-6 lg:pt-12 from-[#111827] px-6 relative ">
                                    {/* <h3 className="font-bold mb-1 leading-7 text-white">Laboratorio de análisis clínicos</h3> */}
                                    <p className="text-white">
                                        Contamos con un laboratorio de análisis clínicos que ofrece a nuestros pacientes y público en general una amplia variedad de estudios de laboratorio.
                                        El acceso es práctico y sencillo, únicamente hay que pasar por los filtros sanitarios para cumplir con todos los protocolos. Con la intención de facilitar la entrada las personas que vengan al laboratorio no tendrán que hacer fila.
                                        Además de estudios para la atención de diagnósticos oftalmológicos, contamos con diversos paquetes de chequeos de rutina y análisis clínicos, a precios muy accesibles, para conocer tu estado de salud de manera preventiva.
                                        Visita nuestro laboratorio para que compruebes que somos la mejor opción. Te invitamos a agendar tu cita.
                                        Horario de atención:
                                        Lunes a Viernes de 07:00 a 14:30 hrs.
                                        Sábado de 07:00 a 12:30 hrs.
                                        Teléfono: 55 5128 1140 Ext. 550
                                    </p>
                                </div>
                            </div>

                            <div className="flex flex-col col-span-1 lg:col-span-1 md:col-span-2 relative overflow-hidden justify-end rounded-lg">
                                <img src="/images/pac2.png" className="object-cover h-full absolute inset-y-0 w-full" />
                                <div className="pt-48 bg-gradient-to-t pb-6 lg:pt-12 from-[#111827] px-6 relative">
                                    <h3 className="font-bold mb-1 leading-7 text-white">Laboratorio de análisis clínicos</h3>
                                    {/* <p className="text-white">You've got to get enough sleep. Other travelling salesmen live a life of luxury. For instance.</p> */}
                                </div>
                            </div>
                            {/* aca termina la fila numero 2 */}

                            {/* aca empieza la fila numero 3 */}
                            <div className="flex flex-col col-span-1 lg:col-span-1 md:col-span-2 overflow-hidden relative justify-end rounded-lg">
                                <img src="/images/pac4.png" className="object-cover h-full absolute inset-y-0 w-full" />
                                <div className="pt-48 bg-gradient-to-t pb-6 lg:pt-12 from-[#111827] px-6 relative">
                                    <h3 className="font-bold mb-1 leading-7 text-white">Farmacia</h3>
                                </div>
                            </div>

                            <div className="flex flex-col col-span-1 lg:col-span-3 md:col-span-2 relative overflow-hidden justify-end rounded-lg">
                                <img src="/images/fondo3.png" className="object-cover h-full absolute inset-y-0 w-full" />
                                <div className="pt-48 bg-gradient-to-t pb-6 lg:pt-12 from-[#111827] px-6 relative">
                                    {/* <h3 className="font-bold mb-1 leading-7 text-white">Servicio de cirugías</h3> */}
                                    <p className="text-white">
                                        Nuestro hospital cuenta una farmacia especializada que ofrece a nuestros pacientes y público en general una amplia variedad de medicamentos oftalmológicos de la más alta calidad.
                                        El acceso es práctico y sencillo, únicamente hay que pasar por los filtros sanitarios para cumplir con todos los protocolos. No es necesario hacer fila.
                                        Contamos con los precios más accesibles del mercado en lubricantes oculares, gotas, antibióticos, ungüentos y otros medicamentos, además de artículos para personas con debilidad visual como lupas, gafas, etc.
                                        Visita nuestra farmacia para que compruebes que somos la mejor opción para el cuidado de tus ojos. Te esperamos.
                                        Horario de atención:
                                        Lunes a Viernes de 8:00 a 20:00 hrs.
                                        Sábado de 8:00 a 13:00 hrs.
                                        Teléfono: 55 5128 1140 Ext. 520
                                    </p>
                                </div>
                            </div>
                            {/* aca termina la fila numero 3 */}

                            {/* aca empieza la fila numero 4 */}
                            <div className="flex flex-col col-span-1 lg:col-span-3 md:col-span-2 relative overflow-hidden justify-end rounded-lg">
                                <img src="/images/fondo4.png" className="object-cover h-full absolute inset-y-0 w-full" />
                                <div className="pt-48 bg-gradient-to-t pb-6 lg:pt-12 from-[#111827] px-6 relative">
                                    {/* <h3 className="font-bold mb-1 leading-7 text-white">Servicio de urgencias</h3> */}
                                    <p className="text-white">
                                        Si usted es candidato a cirugía el médico le indicará cuáles son los estudios requeridos para evaluar su estado de salud y poder programar la cirugía.
                                        Una vez que su médico haya indicado que usted es candidato para cirugía deberá acudir al área de informes, ubicada en la planta baja del edificio, para generarle el presupuesto que el médico indicó. Importante: Revise que el presupuesto corresponda a la solicitud del médico.
                                        Recomendaciones para el día de la cirugí
                                        Por su seguridad y comodidad, evite traer objetos de valor.
                                        Traiga consigo una identificación oficial vigente.
                                        Asista acompañado únicamente por un familiar.
                                        En caso de requerir hospitalización por un periodo mayor a 12 horas, el familiar acompañante deberá permanecer con el paciente.
                                        No se permite el ingreso de medicamentos no suministrados por la institución, a excepción de los requeridos para tratamientos crónicos.
                                        No se permite el acceso a menores de 12 años como acompañantes.
                                        En caso de tener alguna observación o sugerencia respecto a su dieta o medicación debe informárselo al personal de enfermería.
                                        Preséntese sin maquillaje, uñas pintadas, ni prótesis dentales.
                                        Está prohibido fumar en el interior de las instalaciones.
                                        Para servicio de cirugía de pacientes privados: El Hospital de la Luz cuenta con quirófanos habilitados con equipo de vanguardia y personal calificado, así como con cuartos de hospitalización individuales, cómodos y a precio accesible.
                                        Si usted es médico oftalmólogo y le interesa recurrir a nuestros quirófanos, llame al 55 5128-1140 ext. 703 y 704 o mande un correo electrónico a modulo.a@hospitaldeluz.org, para requisitos y precios.
                                        Si usted es paciente oftalmológico y le interesa operarse en nuestras instalaciones, dígale a su médico que nos contacte.
                                    </p>
                                </div>
                            </div>

                            <div className="flex flex-col col-span-1 lg:col-span-1 md:col-span-2 overflow-hidden relative justify-end rounded-lg">
                                <img src="/images/pac5.png" className="object-cover h-full absolute inset-y-0 w-full" />
                                <div className="pt-48 bg-gradient-to-t pb-6 lg:pt-12 from-[#111827] px-6 relative">
                                    <h3 className="font-bold mb-1 leading-7 text-white">Servicio de cirugías</h3>
                                </div>
                            </div>
                            {/* aca termina la fila numero 4 */}

                            {/* aca empieza la fila numero 5 */}
                            <div className="flex flex-col col-span-1 lg:col-span-1 md:col-span-2 overflow-hidden relative justify-end rounded-lg">
                                <img src="/images/pac6.png" className="object-cover h-full absolute inset-y-0 w-full" />
                                <div className="pt-48 bg-gradient-to-t pb-6 lg:pt-12 from-[#111827] px-6 relative">
                                    <h3 className="font-bold mb-1 leading-7 text-white">Servicio de urgencias</h3>
                                </div>
                            </div>

                            <div className="flex flex-col col-span-1 lg:col-span-3 md:col-span-2 relative overflow-hidden justify-end rounded-lg">
                                <img src="/images/fondo5.png" className="object-cover h-full absolute inset-y-0 w-full" />
                                <div className="pt-48 bg-gradient-to-t pb-6 lg:pt-12 from-[#111827] px-6 relative">
                                    {/* <h3 className="font-bold mb-1 leading-7 text-white">Servicio de urgencias</h3> */}
                                    <p className="text-white">
                                        El Hospital brinda un servicio de atención a urgencias oftalmológicas las 24 horas del día únicamente para pacientes que presentan:
                                        Dolor ocular intenso
                                        Traumatismo ocular
                                        Pérdida súbita de la visión
                                        Objetos extraños en el ojo (rebabas, insectos)
                                        Quemadura ocular
                                        Molestias después de alguna cirugía ocular
                                        Si se presenta en un horario de 7:00 a 17:00 horas acuda directamente al consultorio número 1, ubicado en la planta baja, donde un médico valorará su problema y determinará si la atención debe ser inmediata o requiere solicitar una cita posterior. Si su urgencia se presenta fuera del horario antes mencionado o durante días festivos, el personal de vigilancia en la puerta principal con gusto lo orientará.
                                        Se le pedirá que pase al área de cajas para realizar el pago de cuota de recuperación de $550.00 MN. La revisión oftalmológica puede demorar ya que cada paciente requiere de una atención especial, por favor tenga paciencia. Le recordamos que el hospital atiende urgencias los 365 días del año, las 24 horas del día.
                                    </p>
                                </div>
                            </div>
                            {/* aca termina la fila numero 5 */}
                        </div>
                    </div>
                </div>
            </section>

        </Format>
    )
}
export default Pacientes;