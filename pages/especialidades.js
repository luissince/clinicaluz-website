import Format from '../layout/format';
import TabDocencia from '../components/tabEspecialidades';

function Especialidad() {

    return (
        <Format type="nav">
            <section>
                <div className="bg-cover bg-[url('/images/docenciaHover.svg')] bg-center">
                    <div className="pb-24 pt-24">
                        <main className="max-w-4xl mx-auto py-32  px-6 mt-24 ">
                            <div className="text-center">
                                <h1 className="font-extrabold tracking-tight text-slate-500 text-5xl">
                                    <span className="block">Bienvenido a: </span>
                                    <span className="inline bg-clip-text text-transparent bg-gradient-to-r from-guindaOscuro to-guindaLigth">altas especialidades</span>
                                </h1>
                                <p className="mx-auto text-slate-600 text-opacity-100 mt-5 text-xl max-w-xl">
                                    Mediante nuestras altas especialidades podemos darles a pacientes en situación económica vulnerable la oportunidad de acceder a los sistemas de diagnóstico, atención especializada y
                                    procedimientos quirúrgicos con la más alta tecnología y un personal altamente calificado.
                                </p>
                                <div className="max-w-md mx-auto flex justify-center mt-8 rounded-md cursor-pointer">
                                    <a className="flex items-center justify-center w-full py-3 font-medium text-white rounded-md text-lg px-10 bg-guindaOscuro hover:bg-guindaClaro" >
                                        Empecemos
                                    </a>
                                </div>
                            </div>
                        </main>
                    </div>
                </div>
            </section>

            <section className="mt-16" id="empecemos">
                <div className="mx-auto px-4 sm:px-12 xl:max-w-6xl xl:px-0">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold text-gray-800 dark:text-white md:text-4xl xl:text-5xl">
                            Sub-Especialidades
                        </h2>
                        <p className="mx-auto mt-6 text-gray-700 dark:text-gray-300 md:w-3/4 lg:w-3/5">
                            Son cursos que se realizan después de haber concluido una especialidad médica, con el propósito de elevar el nivel de conocimientos,
                            el dominio de habilidades y destrezas en un campo específico de la especialidad.
                        </p>
                    </div>
                </div>

            </section>

            <section className="mt-8">
                <div className="mx-auto px-4 sm:px-12 xl:max-w-7xl xl:px-0">
                    <TabDocencia />
                </div>
            </section>

            <section className="mt-16">
                <div className="mx-auto px-4 sm:px-12 xl:max-w-6xl xl:px-0">
                    <div className="space-y-6 md:flex lg:items-center lg:gap-6 lg:space-y-0">
                        <div className="md:5/12 lg:w-6/12">
                            <img className="md:-ml-8" src="/images/Especialidades.png" alt="tailus stats and login components" loading="lazy" width="1779" height="1592" />
                        </div>
                        <div className="md:7/12 lg:w-6/12">
                            <h2 className="text-3xl font-bold text-gray-800 dark:text-white md:text-4xl xl:text-5xl">
                                Requisitos para alguna especialidad
                            </h2>
                            <p className="mt-8 text-gray-600 dark:text-gray-300">
                                Los documentos deberán ser entregados, COMPLETOS, por el interesado, en la Jefatura de Enseñanza de Posgrado.
                            </p>
                            <p className="mb-12 mt-4 text-gray-600 dark:text-gray-300">
                                Deberá acudir con cubreboca y el material, para uso personal, que considere pudiera requerir durante la entrega (lápiz y bolígrafo, pegamento, etc.)
                            </p>
                        </div>
                    </div>
                </div>
            </section>

        </Format>

    );

}

export default Especialidad;