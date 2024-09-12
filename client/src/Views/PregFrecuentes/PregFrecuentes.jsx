import React, { useState } from "react";
import styles from "./PregFrecuentes.module.css"
import { Link } from "react-router-dom";
import { motion } from "framer-motion";


const PregFrecuentes = () => {

    return (
        <>
            <div data-layer="1e6b203f-b968-42bb-9873-a47c980bd220" className={styles.web19201}>        
              <div data-layer="9e15b1ea-c201-4b95-ac8f-d15f2390c8e9" className={styles.componente11}>            
                <div data-layer="5ccd37cc-9866-4891-8137-c2bc85cbc671" className={styles.ae5b230d7cace6746a04af6865527bcb}></div>
                <div data-layer="95b3cbb0-7b74-49fe-b197-31d8b76fad8a" className={styles.rectangulo1}></div>
                <div data-layer="c3ec0d7a-ff8a-4c9e-814d-29018e62ae16" className={styles.a424da88f75a3d81223c7351c3bb4c68}></div>
                <div data-layer="ab7440ae-5e3c-40ca-8ea7-75fb3d9853b5" className={styles.rectangulo2}></div>
                <div data-layer="48724486-4347-44ae-9459-57b174f4882e" className={styles.b88af2d9b6011ea4416a19c90bceead6}></div>
                <div data-layer="c7095f84-1799-4bb6-ab81-342f76490029" className={styles.preguntasYrespuestas}>
                  Preguntas y<br />Respuestas
                </div>
                <div data-layer="abe4e67b-1537-4573-bd26-a928004868be" className={styles.acercaDelPrecioYFechaspromocionales}>
                  Acerca del precio y fechas<br />promocionales
                </div>
                <div data-layer="68f5a774-2299-4607-bce8-5d9daf8bb8ee" className="dca969a508f87b27c4d54a82870a98c5"></div>
              </div>
              <div className={styles.PregFrecuentes}>
                <CortePromocionalComp></CortePromocionalComp>
                <RequisitosCIMAComp></RequisitosCIMAComp>
                <QueIncluyePartCIMA></QueIncluyePartCIMA>
                <CuandoEmpiezaFinalizaCIMA></CuandoEmpiezaFinalizaCIMA>
                <PuedoEntrarSalirCIMA></PuedoEntrarSalirCIMA>
                <DondeSeRealizaCIMA></DondeSeRealizaCIMA>
                <QueDebesLlevarCIMA></QueDebesLlevarCIMA>
                <MonedaPagoCIMA></MonedaPagoCIMA>
                <SiPagoYNoPuedoIrCIMA></SiPagoYNoPuedoIrCIMA>
              </div>
              <div data-layer="6f605798-c685-4143-8a63-e81b9017aa66" className="x70feaabea5248250ee1e329aaba602fc"></div>
          </div>

        </>
    )
};

const CortePromocionalComp = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleToggle = () => {
    setIsVisible(prevState => !prevState);
  };
  return (
    <>
      <div data-layer="07a85206-8d8b-4d7e-916d-b80d25d34501" className={styles.componente81}>
      <div data-layer="e60b2952-2492-4210-b83a-cf83b33c82cc" className={styles.rectangulo4}></div>
      <div data-layer="002caa57-6f09-4fdb-a04f-e75831477fa5" className={styles.cortesPromocionales}>
        ¡Cortes promocionales!😱
      </div>
      <div 
        data-layer="9a78d935-d3fa-4bf3-a8f1-1119fef8c29a" 
        className={styles.xIconNavArrowDown} 
        id="PF1" 
        onClick={handleToggle}
      >
        <svg
          data-layer="51988286-8188-4d4f-93d8-0015f4d01032"
          preserveAspectRatio="none"
          viewBox="-3 -3 51.571533203125 34.501708984375"
          className={styles.vector9bbeed45}
        >
          <path d="M 3 3 L 22.78574371337891 25.50173187255859 L 42.57148742675781 3" />
        </svg>
      </div>
      <motion.div
        id="BoxPF1"
        initial={{ opacity: 0, height: 0 }} // Estado inicial
        animate={{ opacity: isVisible ? 1 : 0, height: isVisible ? 'auto' : 0 }} // Estado animado
        transition={{ duration: 0.5 }} // Duración de la animación
      >
        <div data-layer="f989c569-384a-4d58-acba-a1e5fa829750" className={styles.rectangulo5}></div>
        <div data-layer="a5995492-54b9-446e-82fa-6d744a92f143" className={styles.senandoAbonandotuPrecioSeCongelaEn}>
          <span className={styles.senandoAbonandotuPrecioSeCongelaEn0}>Señando / Abonando<br /></span>
          <span className={styles.senandoAbonandotuPrecioSeCongelaEn19}>Tu precio se congela en:</span>
        </div>
        <div data-layer="ce90fc6a-bce7-4b5b-b790-4de88cee66eb" className={styles.x25Usd}>25 USD</div>
        <div data-layer="5a95594f-a4ec-4221-a1f5-66bda7353716" className={styles.individual}>Individual</div>
        <div data-layer="1a2c3e32-1e17-422d-b5c7-94d6dad714e9" className={styles.x127Usd}>127 USD</div>
        <div data-layer="c92c6d4d-88f4-46ec-8d46-ae0b5ba745dc" className={styles.x140Usd}>140 USD</div>
        <div data-layer="56d82345-7982-4e66-96d7-7189ab00eee0" className={styles.x155Usd}>155 USD</div>
        <div data-layer="5b383b3a-250d-4d80-b606-0f38ccc8e8cf" className={styles.x165Usd}>165 USD</div>
        <div data-layer="f2f0b3f5-f566-42c8-8ccb-48ec3f5261db" className={styles.grupal10Personas}>
          <span className={styles.grupal10Personas0}>Grupal<br /></span>
          <span className={styles.grupal10Personas7}>(10 personas)</span>
        </div>
        <div data-layer="962faaf0-3a39-4014-99a0-85be54f51d99" className={styles.x115Usd}>115 USD</div>
        <div data-layer="dd71ddbc-5158-4184-a8bc-77066ed0593c" className={styles.x130Usd}>130 USD</div>
        <div data-layer="a723a1a1-d46b-49a1-b4d7-2ed42a867911" className={styles.x145Usd}>145 USD</div>
        <div data-layer="c5bbc660-a9a3-4b1c-8f72-9d8390f7d0a7" className={styles.x165Usd533bc741}>165 USD</div>
        <div data-layer="391dc51f-d49b-4c51-a789-65e32e867153" className={styles.fechasLimite}>Fechas límite</div>
        <div data-layer="8e0aa0c9-52b5-4136-9534-0abcbfe2746e" className={styles.hastaEl15DeJulio}>Hasta el 15 de Julio</div>
        <div data-layer="369697a5-af18-46cf-a536-cb0014b85f7a" className={styles.hastaEl15DeSeptiembre}>Hasta el 15 de Septiembre</div>
        <div data-layer="0c3ad0f1-d0bc-44e6-941f-942a8ade0cf8" className={styles.hastaEl15DeNoviembre}>Hasta el 15 de Noviembre</div>
        <div data-layer="0da93fa3-de2a-45ac-b4e9-b9d987f2acf6" className={styles.hastaEl15DeDiciembre}>Hasta el 15 de Diciembre</div>
        <div data-layer="4f2c9936-f019-481e-b350-84e1b9781ef4" className={styles.losQueAccedanAUnPrecioPromocionalDebencompletarSuPagoHastaEl151224SiNoLoHacenSuPrecioPasaraASerDe165}>
          Los que accedan a un precio promocional, deben<br />
          completar su pago hasta el 15/12/24, si no lo hacen, <br />
          su precio pasará a ser de 165$
        </div>
      </motion.div>
    </div>
    </>
  )
}

const RequisitosCIMAComp = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleBox = () => setIsOpen(!isOpen);

  return (
    <div data-layer="3d452c34-d407-47b1-84a8-55014ab050fd" className={styles.componente61}>
      <div data-layer="e9101d2b-3bc7-415e-9b56-a7641ceefb9b" className={styles.rectangulo4cc2c7bc5}></div>
      <div data-layer="bbc4c5e6-cf36-459f-9159-fb207c5d42ab" className={styles.cualesSonLosRequisitosParaParticiparDeCimaRegional2025}>
        ¿Cuales son los requisitos para <br />participar de CIMA REGIONAL 2025?
      </div>
      <div
        data-layer="06487df4-f3e0-4d03-a478-2893e709ef5c"
        className={styles.xIconNavArrowDown1ebfa2f9}
        id="PF2"
        onClick={toggleBox}
      >
        <svg data-layer="cb979a9f-4cff-4a70-af3c-8e43740dbe64" preserveAspectRatio="none" viewBox="-3 -3 51.571533203125 34.501708984375" className={styles.vector3c9aa97a}>
          <path d="M 3 3 L 22.78574371337891 25.50173187255859 L 42.57148742675781 3" />
        </svg>
      </div>
      <motion.div
        id="boxPF2"
        initial={{ opacity: 0, height: 0, overflow: 'hidden' }}
        animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? 'auto' : 0 }}
        transition={{ duration: 0.3 }}
        className={styles.boxPF2}
      >
        <div data-layer="a05fbd5b-d41f-471b-8e40-e0713a4a30dc" className={styles.rectangulo5773e5213}></div>
        <div data-layer="0b1208d2-0faa-4abd-879f-52af7c575a5a" className={styles.paraParticiparEnUnCimaDebes}>
          Para participar en un cima debes:
        </div>
        <div data-layer="9e7dd288-3594-4b29-ab03-852f45aae09b" className={styles.serMayorDe15Anos}>
          Ser mayor de 15 años
        </div>
        <svg data-layer="ebd1945c-9f55-4bd7-9f0b-a5636b12bf7d" preserveAspectRatio="none" viewBox="0 0.9259054660797119 22 28.875732421875" className={styles.vector567c6cac}>
          <path d="M 0 27.19391250610352 C 0 29.30355834960938 2.37776517868042 30.53696441650391 4.102408885955811 29.32204055786133 L 20.89596939086914 17.49200820922852 C 22.36801147460938 16.45504570007324 22.36801147460938 14.27261066436768 20.89596939086914 13.23564624786377 L 4.102408885955811 1.405481576919556 C 2.377762317657471 0.1905759274959564 0 1.424068689346313 0 3.533689498901367 L 0 27.19391250610352 Z" />
        </svg>
        <div data-layer="0cae5ed0-0f45-40d4-8c82-5f31a6a5e682" className={styles.caraDeRecomendacionFirmadaPorElPastoroLiderNosotrosTeBrindamosUnModelo}>
          Cara de recomendación firmada por el pastor<br />o líder (Nosotros te brindamos un modelo)
        </div>
        <svg data-layer="1f66bb7c-47f1-42cc-b4e6-23d485e24f11" preserveAspectRatio="none" viewBox="0 0.9259054660797119 22 28.875732421875" className={styles.vectordf76fcb3}>
          <path d="M 0 27.19391250610352 C 0 29.30355834960938 2.37776517868042 30.53696441650391 4.102408885955811 29.32204055786133 L 20.89596939086914 17.49200820922852 C 22.36801147460938 16.45504570007324 22.36801147460938 14.27261066436768 20.89596939086914 13.23564624786377 L 4.102408885955811 1.405481576919556 C 2.377762317657471 0.1905759274959564 0 1.424068689346313 0 3.533689498901367 L 0 27.19391250610352 Z" />
        </svg>
        <div data-layer="eacbc1d8-9da1-4176-afe5-a5071e1a04df" className={styles.completarElFormularioDeInscripcion}>
          Completar el formulario de inscripción
        </div>
        <svg data-layer="c75335c9-f9cb-47e6-921f-b7b474ed435d" preserveAspectRatio="none" viewBox="0 0.9259054660797119 22 28.875732421875" className={styles.vector9ea8a5d2}>
          <path d="M 0 27.19391250610352 C 0 29.30355834960938 2.37776517868042 30.53696441650391 4.102408885955811 29.32204055786133 L 20.89596939086914 17.49200820922852 C 22.36801147460938 16.45504570007324 22.36801147460938 14.27261066436768 20.89596939086914 13.23564624786377 L 4.102408885955811 1.405481576919556 C 2.377762317657471 0.1905759274959564 0 1.424068689346313 0 3.533689498901367 L 0 27.19391250610352 Z" />
        </svg>
        <div data-layer="19bd8d2e-0f52-4270-b125-a4eac45ed1f8" className={styles.realizarLosPagosCorrespondientes}>
          Realizar los pagos correspondientes
        </div>
        <svg data-layer="151f57a7-ed8f-4a9b-b7a2-6a2bc1e64c79" preserveAspectRatio="none" viewBox="0 0.9259054660797119 22 28.875732421875" className={styles.vectordd0ca12a}>
          <path d="M 0 27.19391250610352 C 0 29.30355834960938 2.37776517868042 30.53696441650391 4.102408885955811 29.32204055786133 L 20.89596939086914 17.49200820922852 C 22.36801147460938 16.45504570007324 22.36801147460938 14.27261066436768 20.89596939086914 13.23564624786377 L 4.102408885955811 1.405481576919556 C 2.377762317657471 0.1905759274959564 0 1.424068689346313 0 3.533689498901367 L 0 27.19391250610352 Z" />
        </svg>
      </motion.div>
    </div>
  );
};

const QueIncluyePartCIMA = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleBoxPF3 = () => setIsOpen(!isOpen);

  return (
    <>
      <div data-layer="b9357b0d-4ae9-41fb-99d6-05de09ab2c8a" className={styles.componente101}>
        <div data-layer="090ed0fb-0240-4c1b-b0be-325c1a32ae17" className={styles.rectangulo4faa0576d}></div>
        <div data-layer="e6b156ef-a322-4be3-ac89-29f3e31b56dc" className={styles.queIncluyeTuParticipacionEncimaRegional2025}>
          ¿Que incluye tu participación en <br/>CIMA REGIONAL 2025?
        </div>
        <div
          data-layer="2de325da-8d4a-4cec-ac0d-cd990c5a7a46"
          className={styles.xIconNavArrowDowne844014f}
          id="PF3"
          onClick={toggleBoxPF3}
        >
          <svg data-layer="dc52e965-0f3b-47c2-95a1-4311ac5d30ad" preserveAspectRatio="none" viewBox="-3 -3 51.571533203125 34.501708984375" className={styles.vectorf7ad355e}>
            <path d="M 3 3 L 22.78574371337891 25.50173187255859 L 42.57148742675781 3" />
          </svg>
        </div>
        <motion.div
          id="boxPF3"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? 'auto' : 0 }}
          transition={{ duration: 0.3 }}
          className={styles.boxPF3}
        >
          <div data-layer="0a4b9708-188f-4d39-a33b-5b484ac14a60" className={styles.rectangulo5ef16c514}></div>
          <div data-layer="505b7df6-be60-4bd4-b287-c77cd2596241" className={styles.accesoAPlenariasGeneralesPlenariasParalelastalleresYTodasLasInstanciasDeCapacitacionbrindadasPorElEvento}>
            Acceso a plenarias generales, plenarias paralelas,<br />talleres y todas las instancias de capacitación<br />brindadas por el evento
          </div>
          <div data-layer="82b21ea8-8e62-419a-b7cc-afe72e1a7294" className={styles.cena19DeEnero}>Cena 19 de enero</div>
          <div data-layer="9f5db931-659b-4852-a28b-2b3eb9944422" className={styles.comidas}>Comidas</div>
          <svg data-layer="5517891b-05c5-4937-a01e-a4445ab4e2df" preserveAspectRatio="none" viewBox="0 0.9259054660797119 22 28.875732421875" className={styles.vector9f6301ab}>
            <path d="M 0 27.19391250610352 C 0 29.30355834960938 2.37776517868042 30.53696441650391 4.102408885955811 29.32204055786133 L 20.89596939086914 17.49200820922852 C 22.36801147460938 16.45504570007324 22.36801147460938 14.27261066436768 20.89596939086914 13.23564624786377 L 4.102408885955811 1.405481576919556 C 2.377762317657471 0.1905759274959564 0 1.424068689346313 0 3.533689498901367 L 0 27.19391250610352 Z" />
          </svg>
          <div data-layer="65e423a8-ec31-41cd-8c77-0f0ec45adc2a" className={styles.desayunoAlmuerzoYCena20Al24Enero}>
            Desayuno, almuerzo y cena 20 al 24 enero
          </div>
          <svg data-layer="27a867f6-ecae-4a36-b0d9-632974f6fc98" preserveAspectRatio="none" viewBox="0 0.9259054660797119 22 28.875732421875" className={styles.vector57109782}>
            <path d="M 0 27.19391250610352 C 0 29.30355834960938 2.37776517868042 30.53696441650391 4.102408885955811 29.32204055786133 L 20.89596939086914 17.49200820922852 C 22.36801147460938 16.45504570007324 22.36801147460938 14.27261066436768 20.89596939086914 13.23564624786377 L 4.102408885955811 1.405481576919556 C 2.377762317657471 0.1905759274959564 0 1.424068689346313 0 3.533689498901367 L 0 27.19391250610352 Z" />
          </svg>
          <div data-layer="d085f9ee-f1c2-4c48-a011-6baeb4b9a2ff" className={styles.desayuno25DeEnero}>Desayuno 25 de enero</div>
          <svg data-layer="8b6b8395-86d0-40d0-9bbd-821e14553ded" preserveAspectRatio="none" viewBox="0 0.9259054660797119 22 28.875732421875" className={styles.vector0a222538}>
            <path d="M 0 27.19391250610352 C 0 29.30355834960938 2.37776517868042 30.53696441650391 4.102408885955811 29.32204055786133 L 20.89596939086914 17.49200820922852 C 22.36801147460938 16.45504570007324 22.36801147460938 14.27261066436768 20.89596939086914 13.23564624786377 L 4.102408885955811 1.405481576919556 C 2.377762317657471 0.1905759274959564 0 1.424068689346313 0 3.533689498901367 L 0 27.19391250610352 Z" />
          </svg>
          <div data-layer="7814abdd-708b-4941-9c38-dec0c94cf3c0" className={styles.desdeLaNocheDel19HastaLaMananaDel25DeEnero}>
            Desde la noche del 19 hasta la mañana del 25 de enero
          </div>
          <div data-layer="d5c9bbad-5de4-445b-92d1-77e001072a14" className={styles.alojamiento}>Alojamiento</div>
          <svg data-layer="3c461e5a-d4dc-4d3d-804e-a395ce171266" preserveAspectRatio="none" viewBox="0 0.9259054660797119 22 28.875732421875" className={styles.vectore2a21c4c}>
            <path d="M 0 27.19391250610352 C 0 29.30355834960938 2.37776517868042 30.53696441650391 4.102408885955811 29.32204055786133 L 20.89596939086914 17.49200820922852 C 22.36801147460938 16.45504570007324 22.36801147460938 14.27261066436768 20.89596939086914 13.23564624786377 L 4.102408885955811 1.405481576919556 C 2.377762317657471 0.1905759274959564 0 1.424068689346313 0 3.533689498901367 L 0 27.19391250610352 Z" />
          </svg>
          <div data-layer="4cbb7a0d-b958-49c9-995d-de689d5429e9" className={styles.libroDeRegalo}>Libro de regalo</div>
          <svg data-layer="d6c991e6-9dff-42ca-8670-0d02af0df398" preserveAspectRatio="none" viewBox="0 0.9259054660797119 22 28.875732421875" className={styles.vectora254e3ff}>
            <path d="M 0 27.19391250610352 C 0 29.30355834960938 2.37776517868042 30.53696441650391 4.102408885955811 29.32204055786133 L 20.89596939086914 17.49200820922852 C 22.36801147460938 16.45504570007324 22.36801147460938 14.27261066436768 20.89596939086914 13.23564624786377 L 4.102408885955811 1.405481576919556 C 2.377762317657471 0.1905759274959564 0 1.424068689346313 0 3.533689498901367 L 0 27.19391250610352 Z" />
          </svg>
        </motion.div>
      </div>
    </>
  );
};

const CuandoEmpiezaFinalizaCIMA = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleBoxPF4 = () => setIsOpen(!isOpen);

  return (
    <>
      <div data-layer="6b349a61-0d86-4d9f-bc03-70424f014cd7" className={styles.componente111}>
        <div data-layer="fc4c37af-b622-4b75-b28f-c50fed646b96" className={styles.rectangulo495f7a7cb}></div>
        <div data-layer="e2fe2d80-ab0f-45f8-ab86-f90bd2d90cf8" className={styles.cuandoEmpiezaYFinalizaCima}>
          ¿Cuando empieza y finaliza CIMA?
        </div>
        <svg 
          data-layer="0b7357b8-f1ce-4c10-b8f6-421a3a101f95" 
          preserveAspectRatio="none" 
          viewBox="-3 -3 51.571533203125 34.501708984375" 
          className={styles.vector0fa9f166} 
          id="PF4"
          onClick={toggleBoxPF4}
        >
          <path d="M 3 3 L 22.78574371337891 25.50173187255859 L 42.57148742675781 3" />
        </svg>
        <motion.div
          id="boxPF4"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? 'auto' : 0 }}
          transition={{ duration: 0.3 }}
          className={styles.boxPF4}
        >
          <div data-layer="8d71dade-8f19-49f3-808d-09487c80a6ca" className={styles.rectangulo52c54462b}></div>
          <div data-layer="6bfa67da-25dd-4af7-a01b-fdea4f79223e" className={styles.seHabilitaraElIngresoACimaRegional2025ElDomingo19DeEneroAPartirDeLas13hsParaRegistrarteEInstalarteenElLugarelProgramaIniciaALas1900hsConLaCenaeseDiaNoSeBrindaAlmuerzofinalizamosConElDesayunoElSabado25D}>
            Se habilitara el ingreso a CIMA regional 2025 el domingo <br />19 de enero a partir de las 13hs para registrarte e instalarte<br />en el lugar.<br /><br />El programa inicia a las 19:00hs con la cena<br />(Ese día no se brinda almuerzo).<br /><br />Finalizamos con el desayuno el sábado 25 de enero <br />a las 10 hs.
          </div>
          
          <svg data-layer="c3a9948b-3372-4c11-afb9-cb034eeed1ed" preserveAspectRatio="none" viewBox="0 0.9259054660797119 22 28.875732421875" className={styles.vectorf871063c}>
            <path d="M 0 27.19391250610352 C 0 29.30355834960938 2.37776517868042 30.53696441650391 4.102408885955811 29.32204055786133 L 20.89596939086914 17.49200820922852 C 22.36801147460938 16.45504570007324 22.36801147460938 14.27261066436768 20.89596939086914 13.23564624786377 L 4.102408885955811 1.405481576919556 C 2.377762317657471 0.1905759274959564 0 1.424068689346313 0 3.533689498901367 L 0 27.19391250610352 Z" />
          </svg>
          <svg data-layer="1ec80f05-df0d-4113-be79-6d2a088bbd21" preserveAspectRatio="none" viewBox="0 0.9259054660797119 22 28.875732421875" className={styles.vector33156deb}>
            <path d="M 0 27.19391250610352 C 0 29.30355834960938 2.37776517868042 30.53696441650391 4.102408885955811 29.32204055786133 L 20.89596939086914 17.49200820922852 C 22.36801147460938 16.45504570007324 22.36801147460938 14.27261066436768 20.89596939086914 13.23564624786377 L 4.102408885955811 1.405481576919556 C 2.377762317657471 0.1905759274959564 0 1.424068689346313 0 3.533689498901367 L 0 27.19391250610352 Z" />
          </svg>
          <svg data-layer="41eaf4dc-b535-4f6e-83ed-c46e6dac82ac" preserveAspectRatio="none" viewBox="0 0.9259054660797119 22 28.875732421875" className={styles.vector3eb76b09}>
            <path d="M 0 27.19391250610352 C 0 29.30355834960938 2.37776517868042 30.53696441650391 4.102408885955811 29.32204055786133 L 20.89596939086914 17.49200820922852 C 22.36801147460938 16.45504570007324 22.36801147460938 14.27261066436768 20.89596939086914 13.23564624786377 L 4.102408885955811 1.405481576919556 C 2.377762317657471 0.1905759274959564 0 1.424068689346313 0 3.533689498901367 L 0 27.19391250610352 Z" />
          </svg>
        </motion.div>
      </div>
    </>
  );
};

const PuedoEntrarSalirCIMA = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleBoxPF5 = () => setIsOpen(!isOpen);

  return (
    <>
      <div data-layer="5a290e42-10a3-419e-92af-b819ec23c54a" className={styles.componente121}>
        <div data-layer="8b0185ad-28ac-4675-a1cf-44c65ce147e2" className={styles.rectangulo441836409}></div>
        <div data-layer="f15d0494-2566-4580-a90f-c55a8a1fcd09" className={styles.podreEntrarYSalirDelPredioDeCima}>
          ¿Podré entrar y salir del predio de CIMA?
        </div>
        <svg 
          data-layer="b19045ac-99cb-49d2-a542-75d43379b491" 
          preserveAspectRatio="none" 
          viewBox="-3 -3 51.571533203125 34.501708984375" 
          className={styles.vector0a28cf6c} 
          id="PF5"
          onClick={toggleBoxPF5}
        >
          <path d="M 3 3 L 22.78574371337891 25.50173187255859 L 42.57148742675781 3" />
        </svg>
        <motion.div
          id="boxPF5"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? 'auto' : 0 }}
          transition={{ duration: 0.3 }}
          className={styles.boxPF5}
        >
          <div data-layer="e5f8ece6-e27e-45c2-b78e-73c52b0cc0e6" className={styles.rectangulo5b2b37e79}></div>
          <div data-layer="d1d63a83-0351-40dc-924f-770d8708b3f9" className={styles.losAsistentesAEsteProgramaNoPodranSalirDelPredioSoloExcepcionalmentePorMotivosMedicosOCriticosQueDeberaInformarDebidamenteEnEleStandDeMovidaParadejarRegistradasTantOlasSalidasComoLosIngresos}>
            Los asistentes a este programa no podrán salir del predio, <br />solo excepcionalmente por motivos médicos o críticos, que <br />deberá informar debidamente en el stand de Movida para<br />dejar registradas tanto las salidas como los ingresos
          </div>
          
          <svg data-layer="ebc055ec-05fe-49c2-b79a-f454ed502463" preserveAspectRatio="none" viewBox="0 0.9259054660797119 22 28.8759765625" className={styles.vector44d4fdcd}>
            <path d="M 0 27.19391250610352 C 0 29.30355834960938 2.37776517868042 30.53696441650391 4.102408885955811 29.32204055786133 L 20.89596939086914 17.49200820922852 C 22.36801147460938 16.45504570007324 22.36801147460938 14.27261066436768 20.89596939086914 13.23564624786377 L 4.102408885955811 1.405481576919556 C 2.377762317657471 0.1905759274959564 0 1.424068689346313 0 3.533689498901367 L 0 27.19391250610352 Z" />
          </svg>
          <svg data-layer="f7ce07d1-c6c2-40ee-944e-dc77deebd5ce" preserveAspectRatio="none" viewBox="0 0.9259054660797119 22 28.8759765625" className={styles.vectorff8cbac8}>
            <path d="M 0 27.19391250610352 C 0 29.30355834960938 2.37776517868042 30.53696441650391 4.102408885955811 29.32204055786133 L 20.89596939086914 17.49200820922852 C 22.36801147460938 16.45504570007324 22.36801147460938 14.27261066436768 20.89596939086914 13.23564624786377 L 4.102408885955811 1.405481576919556 C 2.377762317657471 0.1905759274959564 0 1.424068689346313 0 3.533689498901367 L 0 27.19391250610352 Z" />
          </svg>
          <div data-layer="07aa960b-69ae-4ff6-8544-5470ad36e8c8" className={styles.siTendranLaPosibilidadDeSalirDelPredio}>Si tendrán la posibilidad de salir del predio</div>
          <div data-layer="e387658d-93ca-412c-8634-399841edcf6e" className={styles.programaGeneral}>Programa general:</div>
          <div data-layer="59f25610-fb9e-4481-9689-fa388ca23ecf" className={styles.programaParaPastoresYLideres}>Programa para pastores y líderes</div>
        </motion.div>
      </div>
    </>
  );
};

const DondeSeRealizaCIMA = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleBoxPF8 = () => setIsOpen(!isOpen);

  return (
    <>
      <div className={styles.componente122}>
        <div className={styles.rectangulo4a67e0473}></div>
        <div className={styles.dondeSeRealizaraElCimaRegional2025}>
          ¿Dónde se realizará el CIMA Regional 2025?
        </div>
        <svg 
          preserveAspectRatio="none" 
          viewBox="-3 -3 51.571533203125 34.501953125" 
          className={styles.vector371ffeba} 
          id="PF8"
          onClick={toggleBoxPF8}
        >
          <path d="M 3 3 L 22.78574371337891 25.50173187255859 L 42.57148742675781 3" />
        </svg>
        <motion.div
          id="boxPF8"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? 'auto' : 0 }}
          transition={{ duration: 0.3 }}
          className={styles.boxPF8}
        >
          <div className={styles.rectangulo52f8410b9}></div>
          <div className={styles.laSedeDelCimaSeraEnLaCiudadDeCordobaEnElcentroDeConvencionesCordobaComplejoFerialCordobaramonCarcano}>
            <span className={styles.laSedeDelCimaSeraEnLaCiudadDeCordobaEnElcentroDeConvencionesCordobaComplejoFerialCordobaramonCarcano0}>
              La sede del CIMA será en la ciudad de Córdoba en el<br />
            </span>
            <span className={styles.laSedeDelCimaSeraEnLaCiudadDeCordobaEnElcentroDeConvencionesCordobaComplejoFerialCordobaramonCarcano52}>
              <br />
            </span>
            <span className={styles.laSedeDelCimaSeraEnLaCiudadDeCordobaEnElcentroDeConvencionesCordobaComplejoFerialCordobaramonCarcano53}>
              Centro de Convenciones Córdoba <br />
              (Complejo Ferial Córdoba)<br />
              Ramón Cárcano<br />
            </span>
            <span className={styles.laSedeDelCimaSeraEnLaCiudadDeCordobaEnElcentroDeConvencionesCordobaComplejoFerialCordobaramonCarcano125}>
              <br />
            </span>
          </div>
          <div className={styles.paperplaneSvgrepoCom}></div>
        </motion.div>
      </div>
    </>
  );
};

const QueDebesLlevarCIMA = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleBoxPF7 = () => setIsOpen(!isOpen);

  return (
    <>
      <div className={styles.componente131}>
        <div className={styles.rectangulo4eec8956a}></div>
        <div className={styles.queDebesLlevarACimaregional2025}>
          ¿Qué debes llevar a CIMA<br />REGIONAL 2025?
        </div>
        <div className={styles.xIconNavArrowDowne2d86f6c}>
          <svg
            preserveAspectRatio="none"
            viewBox="-3 -3 51.571533203125 34.501953125"
            className={styles.vector91f87b0b}
            id="PF7"
            onClick={toggleBoxPF7} // Maneja el clic para mostrar/ocultar
          >
            <path d="M 3 3 L 22.78574371337891 25.50173187255859 L 42.57148742675781 3" />
          </svg>
        </div>
        <motion.div
          id="boxPF7"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? 'auto' : 0 }}
          transition={{ duration: 0.3 }}
          className={styles.boxPF7}
        >
          <div className={styles.rectangulo591cde4fa}></div>
          <div className={styles.biblia}>Biblia</div>
          <svg
            preserveAspectRatio="none"
            viewBox="0 0.9259054660797119 22 28.8759765625"
            className={styles.vectord0864864}
          >
            <path d="M 0 27.19391250610352 C 0 29.30355834960938 2.37776517868042 30.53696441650391 4.102408885955811 29.32204055786133 L 20.89596939086914 17.49200820922852 C 22.36801147460938 16.45504570007324 22.36801147460938 14.27261066436768 20.89596939086914 13.23564624786377 L 4.102408885955811 1.405481576919556 C 2.377762317657471 0.1905759274959564 0 1.424068689346313 0 3.533689498901367 L 0 27.19391250610352 Z" />
          </svg>
          <div className={styles.botellaDeAgua}>Botella de agua</div>
          <svg
            preserveAspectRatio="none"
            viewBox="0 0.9259054660797119 22 28.8759765625"
            className={styles.vector06130766}
          >
            <path d="M 0 27.19391250610352 C 0 29.30355834960938 2.37776517868042 30.53696441650391 4.102408885955811 29.32204055786133 L 20.89596939086914 17.49200820922852 C 22.36801147460938 16.45504570007324 22.36801147460938 14.27261066436768 20.89596939086914 13.23564624786377 L 4.102408885955811 1.405481576919556 C 2.377762317657471 0.1905759274959564 0 1.424068689346313 0 3.533689498901367 L 0 27.19391250610352 Z" />
          </svg>
          <div className={styles.ropaDeCamaOBolsaDeDormir}>
            Ropa de cama o Bolsa de dormir
          </div>
          <svg
            preserveAspectRatio="none"
            viewBox="0 0.9259054660797119 22 28.8759765625"
            className={styles.vectord708b217}
          >
            <path d="M 0 27.19391250610352 C 0 29.30355834960938 2.37776517868042 30.53696441650391 4.102408885955811 29.32204055786133 L 20.89596939086914 17.49200820922852 C 22.36801147460938 16.45504570007324 22.36801147460938 14.27261066436768 20.89596939086914 13.23564624786377 L 4.102408885955811 1.405481576919556 C 2.377762317657471 0.1905759274959564 0 1.424068689346313 0 3.533689498901367 L 0 27.19391250610352 Z" />
          </svg>
          <div className={styles.elementosDeHigienePersonal}>
            Elementos de higiene personal
          </div>
          <svg
            preserveAspectRatio="none"
            viewBox="0 0.9259054660797119 22 28.8759765625"
            className={styles.vectora2adae24}
          >
            <path d="M 0 27.19391250610352 C 0 29.30355834960938 2.37776517868042 30.53696441650391 4.102408885955811 29.32204055786133 L 20.89596939086914 17.49200820922852 C 22.36801147460938 16.45504570007324 22.36801147460938 14.27261066436768 20.89596939086914 13.23564624786377 L 4.102408885955811 1.405481576919556 C 2.377762317657471 0.1905759274959564 0 1.424068689346313 0 3.533689498901367 L 0 27.19391250610352 Z" />
          </svg>
          <div className={styles.repelenteYBloqueadorSolarmuyImportante}>
            Repelente y Bloqueador solar (muy importante)
          </div>
          <svg
            preserveAspectRatio="none"
            viewBox="0 0.9259054660797119 22 28.8759765625"
            className={styles.vectorefee5e60}
          >
            <path d="M 0 27.19391250610352 C 0 29.30355834960938 2.37776517868042 30.53696441650391 4.102408885955811 29.32204055786133 L 20.89596939086914 17.49200820922852 C 22.36801147460938 16.45504570007324 22.36801147460938 14.27261066436768 20.89596939086914 13.23564624786377 L 4.102408885955811 1.405481576919556 C 2.377762317657471 0.1905759274959564 0 1.424068689346313 0 3.533689498901367 L 0 27.19391250610352 Z" />
          </svg>
          <div className={styles.ropaComodaParaLosTiemposDeEsparcimientoQueNoIncomodeaLosDemasCuidaDeNoUsarShortspollerasMuyCortasORemerasmusculosasMuyDescubiertas}>
            Ropa cómoda para los tiempos de esparcimiento que no incomode<br />
            a los demás (cuida de no usar shorts/polleras muy cortas, o<br />
            remeras/musculosas muy descubiertas).
          </div>
          <svg
            preserveAspectRatio="none"
            viewBox="0 0.9259054660797119 22 28.8759765625"
            className={styles.vectorfe011e3e}
          >
            <path d="M 0 27.19391250610352 C 0 29.30355834960938 2.37776517868042 30.53696441650391 4.102408885955811 29.32204055786133 L 20.89596939086914 17.49200820922852 C 22.36801147460938 16.45504570007324 22.36801147460938 14.27261066436768 20.89596939086914 13.23564624786377 L 4.102408885955811 1.405481576919556 C 2.377762317657471 0.1905759274959564 0 1.424068689346313 0 3.533689498901367 L 0 27.19391250610352 Z" />
          </svg>
          <div className={styles.siTomasMedicamentosNoOlvidesLlevarlos}>
            Si tomas medicamentos, no olvides llevarlos.
          </div>
          <svg
            preserveAspectRatio="none"
            viewBox="0 0.9259054660797119 22 28.8759765625"
            className={styles.vector9e311584}
          >
            <path d="M 0 27.19391250610352 C 0 29.30355834960938 2.37776517868042 30.53696441650391 4.102408885955811 29.32204055786133 L 20.89596939086914 17.49200820922852 C 22.36801147460938 16.45504570007324 22.36801147460938 14.27261066436768 20.89596939086914 13.23564624786377 L 4.102408885955811 1.405481576919556 C 2.377762317657471 0.1905759274959564 0 1.424068689346313 0 3.533689498901367 L 0 27.19391250610352 Z" />
          </svg>
          <div className={styles.teInformamosQueNosotrosTeProveemosDeUnaColchonetadeCampingPorElloSiQuieresDormirMasComodoaPuedestraerTuColchonetaInflableDe1Plaza}>
            <span className={styles.teInformamosQueNosotrosTeProveemosDeUnaColchonetadeCampingPorElloSiQuieresDormirMasComodoaPuedestraerTuColchonetaInflableDe1Plaza0}>
              Te informamos
            </span>
            <span className={styles.teInformamosQueNosotrosTeProveemosDeUnaColchonetadeCampingPorElloSiQuieresDormirMasComodoaPuedestraerTuColchonetaInflableDe1Plaza13}>
              , que nosotros te proveemos de una colchoneta<br />
              de camping. (Por ello si quieres dormir más cómodo(a) puedes<br />
              traer tu colchoneta inflable de 1 plaza)
            </span>
          </div>
          <div className={styles.tenEnCuentaQueEnElStandDeMovidaTendremosMaterialmisioneroRemerasYOtrasCositasALaVentaparaTuTranquilidadVamosATenerUnKioscoADisposicion}>
            Ten en cuenta que en el stand de Movida tendremos material<br />
            misionero, remeras y otras cositas a la venta.<br />
            Para tu tranquilidad, vamos a tener un kiosco a disposición.
          </div>
        </motion.div>
      </div>
    </>
  );
}

const MonedaPagoCIMA = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleBoxPF6 = () => setIsOpen(!isOpen);

  return (
    <>
      <div data-layer="cc562829-54d5-42b8-90db-6a06bab49efd" className={styles.componente132}>
        <div data-layer="7f8bf9aa-084d-4128-893f-1a626715737b" className={styles.rectangulo457e9ef3d}></div>
        <div data-layer="b152a8e8-951c-4b69-8815-563341fe11ce" className={styles.enQueMonedaTengoQueRealizarElPago}>
          ¿En qué moneda tengo que <br />realizar el pago?
        </div>
        <div
          data-layer="f1c58704-c974-4b84-80af-07630d3beb00"
          className={styles.xIconNavArrowDownd6450250}
          id="PF6"
          onClick={toggleBoxPF6}
        >
          <svg
            data-layer="a2bb0471-8246-4f5b-b657-9799b1393159"
            preserveAspectRatio="none"
            viewBox="-3 -3 51.571533203125 34.501953125"
            className={styles.vectorf330b934}
          >
            <path d="M 3 3 L 22.78574371337891 25.50173187255859 L 42.57148742675781 3" />
          </svg>
        </div>
        <motion.div
          id="boxPF6"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? 'auto' : 0 }}
          transition={{ duration: 0.3 }}
          className={styles.boxPF6}
        >
          <div data-layer="ef605b9d-4859-4f6b-8216-322be7e91928" className={styles.rectangulo5314e51d5}></div>
          <div data-layer="7391a93b-6b9f-4fdf-97c8-b8e3a67e0681" className={styles.elValorDeCimaRegional2024}>
            El valor de CIMA REGIONAL 2024
          </div>
          <div data-layer="68ed68ad-d3c7-42d0-a7a8-07d0ce2482fa" className={styles.estaEstablecidoEDolaresPeroLaMonedaDePagoPodesConcretarlaConLaOficinaDeMovidaDeTuPaisenLaMayoriaDeLosCasosPodrasRealizarTuPagoEnLaMonedanacionalAlTipoDeCambioVigenteAlDiaQueRealicesElPago}>
            está establecido en dólares, pero la moneda de pago puedes <br />concretarla con la oficina de Movida de tu país.<br />En la mayoría de los casos podrás realizar tu pago en la moneda<br />nacional al tipo de cambio vigente al día que realices el pago
          </div>
        </motion.div>
      </div>
    </>
  );
};

const SiPagoYNoPuedoIrCIMA = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleBoxPF9 = () => setIsOpen(!isOpen);

  return (
    <>
      <div data-layer="996d3b54-6ec4-41c7-b2d3-a3ce8699253a" className={styles.componente133}>
        <div data-layer="7e766950-64cc-4025-9a23-e42ec673eac5" className={styles.rectangulo43289c0a7}></div>
        <div data-layer="bd8c9871-a0dc-4eee-bc49-fc6b8018bf31" className={styles.siPagoYLuegoNoPuedoIrpuedoRecuperarLoQuePague}>
          Si pago y luego no puedo ir.<br />¿Puedo recuperar lo que pagué?
        </div>
        <div data-layer="e308e7ca-a1a5-4cde-be23-789844f025fc" className={styles.xIconNavArrowDown412a3c85}>
          <svg
            data-layer="f115fb22-95e2-47d8-8101-8d6a1568a076"
            preserveAspectRatio="none"
            viewBox="-3 -3 51.571533203125 34.501953125"
            className={styles.vector4df97b7e}
            id="PF9"
            onClick={toggleBoxPF9}
          >
            <path d="M 3 3 L 22.78574371337891 25.50173187255859 L 42.57148742675781 3" />
          </svg>
        </div>
        <motion.div
          id="boxPF9"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? 'auto' : 0 }}
          transition={{ duration: 0.3 }}
          className={styles.boxPF9}
        >
          <div data-layer="15a9d1f8-8cef-4ab4-8da4-8b55b3b344fc" className={styles.rectangulo58427fa51}></div>
          <div data-layer="47eb675a-84aa-4f70-81ca-bd7b3e01aa99" className={styles.sena}>Seña:</div>
          <div data-layer="ae427682-3cbe-4465-b71b-dfdda47b3a0a" className={styles.laSenaNoEsReembolsablePeroSiSePermiteElTraspasoAOtraPersonaelCualSeDebeInformarAntesDel15122024ElTraspasoSoloPuederealizarseAUnaPersonaQueNoHayaAbonadoLaSena}>
            La seña no es reembolsable, pero sí se permite el traspaso a otra persona,<br />el cual se debe informar antes del 15/12/2024. El traspaso sólo puede<br />realizarse a una persona que no haya abonado la seña.
          </div>
          <div data-layer="c10220f0-504b-4f6d-9499-dca5048bffbe" className={styles.valorExcedenteALaSena}>Valor excedente a la seña:</div>
          <div data-layer="3d312533-29ac-4b2a-9e8d-e21107029b93" className={styles.siEsReembolsableElReembolsoSeRealizaraPosteriorAlEventoEntreel20YEl28DeFebreroDe2025SeAbonaraEnLaMonedaLocadeCadaPais}>
            Sí es reembolsable. El reembolso se realizará posterior al evento, entre<br />el 20 y el 28 de febrero de 2025, se abonará en la moneda loca<br />de cada país.
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default PregFrecuentes;