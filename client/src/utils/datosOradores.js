const oradoresCristianos = [
    {
        nombre: "Zuli",
        apellido:"Arias",
        nacionalidad: "Argentina",
        ministerio: " Psicóloga, Lic. en Teología y Filosofía, Coach Ontológica intercultural.",
        descripcion:"Misionera en India por 15 años. Fundadora y directora del Instituto Online: “Neuroaprendizaje de idiomas” en donde se enseña diferentes idiomas para poder salir al campo."
    },
    {
        nombre: "Yonathan",
        apellido:"Adamchuk",
        nacionalidad: "Argentina",
        ministerio: "Fotógrafo documentalista",
        descripcion:"Fotógrafo documentalista. Su obra ‘El Cristo de las favelas’ fue seleccionada por National Geographic y formó parte del equipo del documental ‘Misioneros’, ganador del premio Martín Fierro."
    },
    {
        nombre: "Yassir",
        apellido:"Eric",
        nacionalidad: "Sudan",
        ministerio: "Doctor en teología, Ex musulmán radical.",
        descripcion:"Experto en Islam. Conferencista en Alemania, Europa y Oriente Medio. Se desempeñó como profesor y pastor de iglesias migrantes en Alemania. Dirige el Instituto Europeo de Migración, Integración y Asuntos Islámicos (EIMI) en AWM desde 2013."
    },
    {
        nombre: "Walter",
        apellido:"Altare",
        nacionalidad: "Argentina",
        ministerio: "Pastor y conferencista. Miembro de Conexión Oriental.",
        descripcion:"Pastor de la iglesia Brazos Abiertos en Santa Fe, Argentina. Forma parte del equipo de Conexión Oriental con el viejó a Medio Oriente. Casado con Fabiana y padre de dos hijos."
    },
    {
        nombre: "Vanesa",
        apellido:"Cali de Leder",
        nacionalidad: "Argentina",
        ministerio: "Facilitadora de cuidado integral de OM Latino America.",
        descripcion:"Facilitadora de cuidado integral de OM Latino America. Empezó en las misiones abordo del Logos 2 y sirvió en los Países Bajos. Es parte del equipo de cuidado de los hijos de misioneros de Comibam, donde sirve con CTC (chicos de la tercera cultura) latinos."
    },
    {
        nombre: "Thomas",
        apellido:"Vögelin",
        nacionalidad:"Suiza",
        ministerio: "Fundador y director internacional de Movida.",
        descripcion:" Desde hace más de 35 años sirve en la movilización de jóvenes latinos. Vivió en Chile, Argentina y Alemania, y hace 7 años están instalados en Walzenhausen, Suiza. Casado con Mechthild y tiene 4 hijos."
    },
    {
        nombre: "Steve",
        apellido:"Moore",
        nacionalidad: "Estados Unidos",
        ministerio: "Conciliador Cristiano. Tercera generación de misioneros",
        descripcion:"Posee una Maestría en Comunicación Intercultural y está certificado como Conciliador Cristiano. Casado con Kathryn y con tres hijos."
    },
    {
        nombre: "Soon",
        apellido:"Im",
        nacionalidad: "Corea",
        ministerio: "Coordinadora de Wec en Argentina.",
        descripcion:"Misionera de largo plazo en Asia, trabajando en la plantación de iglesias y desarrollo comunitario desde 1994. Hoy es coordinadora de Wec en Argentina."
    },
    {
        nombre: "Samuel",
        apellido:"Andrade",
        nacionalidad: "Argentina",
        ministerio: "Coordinador de la Escuela Misionera del IBRP y misionero en Cabo Verde.",
        descripcion:". Misionero por 14 años en Cabo Verde, África Occidental. Trabajó en la fundación de iglesias y formación de obreros. Es ministro ordenado de la Unión de las Asambleas de Dios. Coordina la Escuela de Formación Misionera del Instituto Bíblico del Río de la Plata"
    },
    {
        nombre: "Roberto",
        apellido:"Dominguez",
        nacionalidad: "Argentina",
        ministerio: "Pastor capellán y Técnico Superior en Ciencias Penales. ",
        descripcion:"Técnico en Tratamiento Correlacional de Menores y Jóvenes Adultos. Técnico en Tratamiento Correccional de Droga-Dependencia. Técnico en Criminología. Coordinador regional de Perspectivas. Miembro de la Red de Apoyo Integral al Misionero (RAIM). Docente de Capellanías del Instituto FIET."
    },
    {
        nombre: "Ramiro",
        apellido:"Martinez",
        nacionalidad: "Mexico",
        ministerio: "Director de ILI Latinoamérica y Director de Movilización COMIMEX.",
        descripcion:"Pastor y Plantador de iglesias por mas de 40 años. Actuario (UNAM - México). Diplomado en Orientación Familiar Integral (La Salle). Director de ILI Latinoamérica. Director de Movilización COMIMEX. Profesor de Perspectivas."
    },
    {
        nombre: "Rafael",
        apellido:"Canada",
        nacionalidad: "Mexico",
        ministerio: "Director de Connect Globa",
        descripcion:"Desde Connect Global ayuda a las iglesias locales a movilizar a sus miembros hacia la misión a través del mentoreo. Casado con Xochitl, con quien tiene una hija que es misionera en el sudeste asiático."
    },
    {
        nombre: "Pedro",
        apellido:"Pinto ",
        nacionalidad: "peru",
        ministerio:"LAC Regional Strategy Leader del Jesus Film Project.",
        descripcion:"Más de 24 años sirviendo como misionero en Cru. Forma parte del equipo Global de Jesus Film Project. LAC Regional Strategy Leader. Apasionado por llevar el evangelio a las brechas misionales. Casado con Jorgelina, sus hijos Mateo y Jeremías"
    },
    {
        nombre: "Nio Jong Tae",
        apellido:"Hwang",
        nacionalidad: "Corea",
        ministerio: "Misionero de Negocio como Misión y Miembro de la Agencia Misionera Global Partners.",
        descripcion:"Técnico de audio. Formado en el Seminario Bautista de São Paulo. Fundador de 3 empresas importadoras en Brasil. Misionero de Negocio como Misión y miembro de la Agencia Misionera Global Partners. Discipulado y mentoreo de jovenes empresarios de startups."
    },
    {
        nombre: "Sara y",
        apellido:"Emilio",
        nacionalidad: "Argentina",
        ministerio: "Dos argentinos por el mundo",
        descripcion:"Sara y Emilio, un matrimonio que sirve a Dios a través de sus locuras (Arte). El ministerio se formó en 2019 con el objetivo de llevar el Evangelio a niños, jóvenes y adultos a través de payasos, títeres, magia, malabares, maquillaje, etc."
    },
    {
        nombre: "Mika",
        apellido:"Yrjola",
        nacionalidad: "Finlandia",
        ministerio: "Pastor misioneroen la iglesia Living Word International Church.",
        descripcion:"Nacido en Singapur, nieto de misioneros en China. Estudió en el Instituto Bíblico Elim, Nueva York. Ha servido en Indonesia, Canadá y Australia. Lidera una iglesia con enfoque misionero llamada Living Word International Church, en Washington. Está casado y tiene seis hijos"
    },
    {
        nombre: "Matzi",
        apellido:"Vogelin",
        nacionalidad: "Alemania",
        ministerio: "Director de TeenStreet Europa.",
        descripcion:"Creció en Chile y Argentina. Cursó sus estudios formales en el seminario bíblico Brake (Alemania). Director TeenStreet Europa. Casado y papá de cuatro hijos."
    },
    {
        nombre: "Matias",
        apellido:"Kornetz",
        nacionalidad: "Argentina",
        ministerio: "Director de la ONG Prevenir es Amar, escritor y conferencista",
        descripcion:"Suicidólogo (UFLO). Técnico en drogradependencia (USAL). Diplomado en prevención integral de los consumos problemáticos (UNRE y Sedronar). Diplomado en primera infancia y familia (UCA). Diplomado en liderazgo y coaching (E625). Estudiante del SITB. Director y fundador de la ONG Prevenir es Amar. Escritor, conferencista y educador popular."
    },
    {
        nombre: "Markus",
        apellido:"Leder",
        nacionalidad: "Alemania",
        ministerio: "Director asociado de OM Latinoamerica.",
        descripcion:"Conoció a su esposa Vanesa, de Argentina, en el barco Logos 2. Pasó algunos años en Países Bajos trabajando en un Centro para Conferencias cristiano. Desde 2015 hasta 2023 fue director de OM Argentina. Moviliza a los cristianos a los menos alcanzados por medio de talleres y predicaciones."
    },
    {
        nombre: "Lucas",
        apellido:"Magnin",
        nacionalidad: "Argentina",
        ministerio: "Editor de Clie. Escritor, teólogo, cantautor, gestor cultural y youtuber.",
        descripcion:"Escritor, teólogo, cantautor y gestor cultural. Máster en Teología, Licenciado en Letras Modernas y en Ciencias de la Comunicación. Autor de varios libros como ‘95 tesis para la nueva generación’ (2022). Como cantautor, publicó dos discos. Editor de Editorial CLIE y publica videos en su canal YouTube (#TeologíaPop)"
    },
    {
        nombre: "Leo",
        apellido:"Vartanian",
        nacionalidad: "Argentina",
        ministerio: "Arts Worker con Wycliffe América",
        descripcion:"Es guitarrista y docente. Presta servicios como Arts Worker con Wycliffe América, brindando talleres junto a músicos de iglesias indígenas. Fue director de LETRA Argentina y actualmente integra la junta directiva. Es profesor del IBRP, ECEA y el Seminario Bautista."
    },
    {
        nombre: "Julio",
        apellido:"Rodriguez",
        nacionalidad:"Argentina",
        ministerio: "Encargado de la gestión de la Organización Mundial de Scouts Cristianos.",
        descripcion:"Docente de educación física. Con 59 años, desde los 10 es Scout, hace 20 años está con Scout Cristianos y, hace 6 años, se encarga de la Gestión de la Organización Mundial de Scouts Cristianos."
    },
    {
        nombre: "Jojie",
        apellido:"Wong",
        nacionalidad: "Filipina",
        ministerio: "Coordinadora Internacional de Movilización de OMF.",
        descripcion:"Coordinadora Internacional de Movilización de OMF. Sirvió como movilizadora de OMF en Filipinas por 19 años. Maestría en divinidad, en misiones globales y doctorado en ministerio. Mentora de misioneros y consultora de iglesias. Autora de múltiples libros de misiones para niños."
    },
    {
        nombre: "Helder",
        apellido:"Favarin",
        nacionalidad: "Brazil",
        ministerio: "CEO en Community Bible Study y Miembro de la junta de SEPAL.",
        descripcion:"Misionero y cofundador de la Iglesia C29 Granada (España), de la RedTimoteo, un programa que nutre a jóvenes evangelistas en España, y de la Red EYE (Jóvenes Evangelistas Europeos). Doctor en predicación"
    },
    {
        nombre: "Fede",
        apellido:"Tempra",
        nacionalidad: "Argentina",
        ministerio: "Director de Fronteras en Argentina.",
        descripcion:"Forma parte del equipo directivo de Fronteras Argentina, agencia misionera internacional que trabaja para alcanzar a los musulmanes. Sirvió en MAIN durante varios años. Trabajó con jóvenes y adolescentes y estudió en el Seminario Bíblico de Fe. Congrega en Centro Cristiano Ciudadela."
    },
    {
        nombre: "David",
        apellido:"Cardenas",
        nacionalidad: "Colombia",
        ministerio: "Director en América de Wycliffe y ex presidente de COMIBAM.",
        descripcion:" Pastor del Departamento Global de la Iglesia Vida en Acción Cruzada Cristiana en Bogotá y Director del Area de las Américas Alianza Global Wycliffe. Sirvió como presidente de COMIBAM Internacional entre los años 2015 a 2021. Doctor en ministerio y Magíster en misiones."
    },
    {
        nombre: "Daniel y",
        apellido:"Denise",
        nacionalidad: "Argentina",
        ministerio: "Miembros de la Fundación Sierra Dorada y coordinadores de UNA.",
        descripcion:" Los moviliza la niñez y adolescencia en situación de vulnerabilidad. Pertenecen a la Fundación Sierra Dorada y coordinan un programa llamado UNA (Una vida, Una familia, Una Comunidad de fe) con el objetivo de que cada chico pueda contar con una familia."
    },
    {
        nombre: "Daniel",
        apellido:"Velazquez",
        nacionalidad: "Argentina",
        ministerio: "Licenciado en enfermería y payaso de hospital.",
        descripcion:"Lic en enfermería y payaso de hospital. Lleva adelante la misión de Dios con su profesión en el hospital. Dicta cursos de payaso cristiano y de hospital. Es parte del equipo Selah Latinoamérica que evangeliza en hospitales a través de cartas evangelisticas."
    },
    {
        nombre: "Andrew",
        apellido:"Brunson",
        nacionalidad: "Argentina",
        ministerio: "Pastor y misionero. Fue preso en Turquía por el Evangelio.",
        descripcion:"Posee un doctorado en Nuevo Testamento. Involucrado en la plantación de iglesias y en la ayuda a refugiados en Turquía por 23 años hasta ser falsamente acusado de terrorista en 2016, por lo que estuvo dos años preso."
    },
    {
        nombre: "Alex",
        apellido:"Gulart",
        nacionalidad: "Uruguay",
        ministerio: "Pastor y plantador de iglesias. Miembro de World Team. ",
        descripcion:"Vive en Ciudad del Este, sirviendo entre musulmanes. Recorrió más de 60 países predicando el Evangelio. Es parte de World Team, que planta iglesias entre no alcanzados. Sirvió en OM Uruguay, el barco Logos 2 y en la Universidad Teológica de Puerto Rico."
    },
    {
        nombre: "Alejandro",
        apellido:"Taboada",
        nacionalidad: "Peru",
        ministerio: "Pastor de misiones y director en Latinoamérica de Crossover Global",
        descripcion:"Pastor de Misiones en la Alianza Cristiana Y misionera de Miraflores. Entrenador acreditado del curso Perspectivas. Profesor de SEBAP. Pastor y capellán juvenil por muchos años. Casado con Martha y padre de tres hijos."
    }
];

export default oradoresCristianos;