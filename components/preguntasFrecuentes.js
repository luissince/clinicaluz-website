import React, { useState } from "react";
import AccordionUI from "../components/accordionUI";

function PreguntasFrecuentes() {

    const [index, setIndex] = useState(false);

    //data array to put into divs
    const data = [
        {
            id: 1,
            question: "¿Cómo obtengo mi primera cita en Clínica La Luz?",
            answer:
                <div>
                    <p className="leading-4">Existen tres formas para realizar una cita de primera vez:</p>
                    <ul className="list-disc leading-4 pt-2">
                        <li className="py-2">
                            Puede realizar su cita de primera vez por Internet.
                        </li>
                        <li className="py-2">
                            Puede agendar su cita vía telefónica en el 55 5128-1140 ext. 0. Debe tener a la mano el nombre completo del paciente y fecha de
                            nacimiento, así como un número telefónico de contacto. Durante su llamada le proporcionarán fecha de consulta según disponibilidad
                            de la agenda, número de expediente y clave de referencia bancaria para realizar el pago de la cuota de recuperación. Importente:
                            La clave de referencia tiene una vigencia de 30 días.
                        </li>
                        <li className="py-2">
                            Acudir al área de cajas de la Clinica  donde podrá solicitar su consulta. Tendrá que proporcionar nombre completo del paciente y
                            fecha de nacimiento. Deberá cubrir una cuota de recuperación de $220.00. En la factura se le indicará la fecha de la cita, consultorio
                            y horario.
                        </li>
                    </ul>
                </div>
        },
        {
            id: 2,
            question: "¿Cuál es el horario de atención de la Clinica ?",
            answer:
                <p>
                    El horario de atención es de lunes a viernes de 7:00 a 20:00 hrs; sábados de 7:00 a 13:00 hrs.<br />
                    Atención a Urgencias las 24 horas del día, los 365 días del año. El precio de la consulta de urgencias es de $550.00.
                </p>
        },
        {
            id: 3,
            question: "¿Dónde está ubicado e la Clinica ?",
            answer:
                <div>
                    <p>
                        Nuestras principales sedes son:
                    </p>
                    <ul className="list-disc">
                        <li className="py-2">SEDE CENTRAL: Av. Arequipa 1148 Urb. Santa Beatriz</li>
                        <li className="py-2">SEDE SJL: Av. Gran Chimú 085, Zarate</li>
                        <li className="py-2">SEDE BREÑA: Av. Tingo María 623</li>
                    </ul>
                </div>

        },
        {
            id: 4,
            question: "¿Cómo llego en transporte publico?",
            answer:
                <div>
                    <ul className="list-disc">
                        <li className="py-2">Estación de Metro más cercana: mertropolitano (Azul)</li>
                        <li className="py-2">Estación de Metrobus más cercana: Plaza de la República Línea 1 (Roja)</li>
                        <li className="py-2">Otra estación de Metrobús cercana: Glorieta de Colón Línea 4 (Naranja)</li>
                        <li className="py-2">Microbús: Ruta 1 Metro Pantitlán a Tacubac y Ruta 17 Metro Hidalgo a Tacuba</li>
                    </ul>
                </div>
        },
        {
            id: 5,
            question: "¿Cuánto tardan en dar una cita aproximadamente?",
            answer:
                <div>
                    <p>
                        De acuerdo a la disponibilidad en la agenda.
                    </p>
                </div>
        },
        {
            id: 6,
            question: "¿Qué tengo que llevar el día de mi cita?",
            answer:
                <div>
                    <p>
                        Un acompañante que sea mayor de edad, identificación oficial del paciente y comprobante de pago.
                    </p>
                </div>
        },
        {
            id: 7,
            question: "¿A qué teléfono debo marcar para mayor información?",
            answer:
                <div>
                    <p>
                        (01) 613 9292
                    </p>
                </div>
        },
        {
            id: 8,
            question: "¿E la Clinica  cuenta con estacionamiento?",
            answer:
                <div>
                    <p>
                        E la Clinica  no cuenta con estacionamiento para visitantes pero en la zona existen varias opciones.
                    </p>
                </div>
        },
        {
            id: 9,
            question: "¿Cómo cambiar la fecha de mi cita?",
            answer:
                <div>
                    <p>
                        Llamar al teléfono 55 5128-1140 ext. 615 o ext. 616 en un horario de 7:00 a 17:00 hrs. Le sugerimos tener a la mano su número de expediente
                        y/o carnet y realizar la llamada al menos 4 días antes de su cita para respetar su pago, de lo contrario tendrá que pagar de nuevo.
                    </p>
                </div>
        },
        {
            id: 9,
            question: "¿Cuánto cuesta una cirugía?",
            answer:
                <div>
                    <p>
                        La información sobre el precio de las cirugías es personalizada pues tiene que ver directamente con el padecimiento y
                        con la técnica quirúrgica que el médico utilizará. Esta información se le proporciona al paciente al momento de su consulta.
                    </p>
                </div>
        },
        {
            id: 10,
            question: "¿Cuál es el costo de la consulta?",
            answer:
                <div>
                    <p>
                        Las consultas de especialidad y alta especialidad oftalmológicas tienen una cuota de recuperación de $220
                    </p>
                </div>
        },
        {
            id: 11,
            question: "¿E la Clinica  trabaja con aseguradoras?",
            answer:
                <div>
                    <p>
                        Trabajamos con las siguientes aseguradoras:
                    </p>
                    <ul className="list-disc pt-2">
                        <li>Mapfre</li>
                        <li>Rimac seguros</li>
                    </ul>
                </div>
        },
        {
            id: 12,
            question: "¿E la Clinica  cuenta con planes de pago para sus procedimientos quirúrgicos?",
            answer:
                <div>
                    <p>
                        Debido a que somos una institución sin fines de lucro que no cobra el precio real del mercado, sino cuotas de recuperación, no ofrecemos
                        planes de financiamiento. No obstante contamos con el servicio de cobro a tarjeta de crédito, las cuales pueden ofrecer estos servicios.
                    </p>
                </div>
        },
        {
            id: 13,
            question: "¿Cómo puedo corregir mis datos personales registrados para la atención médica en Clinica la Luz?",
            answer:
                <div>
                    <p>
                        Deberá presentarse en el área de Informes con un documento oficial que avale el cambio que solicita. Para este cambio el horario
                        de atención es de lunes a viernes de 8:00 a 16:00 hrs.
                    </p>
                </div>
        },
        {
            id: 14,
            question: "¿Cómo puedo cancelar mi consulta?",
            answer:
                <div>
                    <p>
                        Deberá presentarse con su recibo de pago en el área de cajas y solicitar la cancelación de la misma. Recuerde que si usted pierde su
                        cita, no se hará la devolución de su cuota. En caso de ser necesario, llamar al 55 1234567 ext. 0 para reprogramar su cita,
                        la cual se programará dependiendo de la disponibilidad de agenda.
                    </p>
                </div>
        },
        {
            id: 15,
            question: "¿Atienden pacientes de convenios?",
            answer:
                <div>
                    <p>
                        Gracias a su amplio reconocimiento com la Clinica  de especialidad, diversas organizaciones han celebrado convenios de atención médica
                        con e la Clinica  de la Luz. Actualmente, brindamos servicios a pacientes referidos de:
                    </p>
                    <ul className="list-disc px-2">
                        <li>opcion 1</li>
                        <li>opcion 2</li>
                        <li>opcion 3</li>
                    </ul>
                </div>
        },
    ]

    return (
        // <div className="flex flex-col justify-center items-center md:pt-32 md:mx-60 p-10 rounded-xl h-auto py-20 bg-gray-50 border-2 border-red-600">
        <div className="flex flex-col justify-center items-center rounded-xl h-auto bg-transparent ">
            {/* map data */}
            {
                data.map((data) => {
                    return (
                        // need accordion IU
                        <AccordionUI
                            title={data.question}
                            id={data.id}
                            children={data.answer}
                            index={index}
                            setIndex={setIndex}
                        ></AccordionUI>
                    );
                })
            }
        </div>
    )

}

export default PreguntasFrecuentes;