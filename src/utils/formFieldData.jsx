
 export  function getCountrysAndProvinces(){

    const location = {
        countries:[
            'Argentina',
            'Bolivia',
            'Brasil',
            'Chile',
            'Colombia',
            'Costa Rica',
            'Ecuador',
            'Estados Unidos',
            'Panamá',
            'Paraguay',
            'Perú',
            'Uruguay',
            'Venezuela',
            'Europa',
            'Otro'
          ],
        Argentina: [
          'Buenos Aires',
          'Catamarca',
          'Chaco',
          'Chubut',
          'Córdoba',
          'Corrientes',
          'Entre Ríos',
          'Formosa',
          'Jujuy',
          'La Pampa',
          'La Rioja',
          'Mendoza',
          'Misiones',
          'Neuquén',
          'Río Negro',
          'Salta',
          'San Juan',
          'San Luis',
          'Santa Cruz',
          'Santa Fe',
          'Santiago del Estero',
          'Tierra del Fuego',
          'Tucumán'
        ],
        Chile: [
          'Región de Arica y Parinacota',
          'Región de Tarapacá',
          'Región de Antofagasta',
          'Región de Atacama',
          'Región de Coquimbo',
          'Región de Valparaíso',
          'Región Metropolitana de Santiago',
          'Región del Libertador General Bernardo O’Higgins',
          'Región del Maule',
          'Región del Ñuble',
          'Región del Biobío',
          'Región de La Araucanía',
          'Región de Los Ríos',
          'Región de Los Lagos',
          'Región de Aysén del General Carlos Ibáñez del Campo',
          'Región de Magallanes y la Antártica Chilena'
        ],
        Bolivia: [
          'La Paz',
          'Oruro',
          'Potosí',
          'Cochabamba',
          'Chuquisaca',
          'Tarija',
          'Beni',
          'Pando',
          'Santa Cruz'
        ],
        Paraguay: [
          'Alto Paraguay',
          'Alto Paraná',
          'Amambay',
          'Boquerón',
          'Caaguazú',
          'Caazapá',
          'Canindeyú',
          'Central',
          'Concepción',
          'Guairá',
          'Itapúa',
          'Cordillera',
          'Misiones',
          'Ñeembucú',
          'Paraguarí',
          'Presidente Hayes',
          'San Pedro',
          'Capital (Asunción)'
        ],
        Uruguay: [
          'Artigas',
          'Canelones',
          'Cerro Largo',
          'Colonia',
          'Durazno',
          'Flores',
          'Florida',
          'Lavalleja',
          'Maldonado',
          'Montevideo',
          'Paysandú',
          'Rio Negro',
          'Rivera',
          'Rocha',
          'Salto',
          'San José',
          'Soriano',
          'Tacuarembó',
          'Treinta y Tres'
        ],
        Perú: [
          'Amazonas',
          'Ancash',
          'Apurimac',
          'Arequipa',
          'Ayacucho',
          'Cajamarca',
          'Callao',
          'Cusco',
          'Huancavelica',
          'Huanuco',
          'Ica',
          'Junín',
          'La Libertad',
          'Lambayeque',
          'Lima',
          'Loreto',
          'Madre de Dios',
          'Moquegua',
          'Pasco',
          'Piura',
          'Puno',
          'San Martín',
          'Tacna',
          'Tumbes',
          'Ucayali'
        ]
      };

      return location;
 }

 export function getCheckListItemsCima(){
 const checklistItemsCima = [
  "Cima Day",
  "Prisma",
  "Eurovoluntariado",
  "Cimay",
  "Hice el curso Storyline o Vaya a Movilizar",
  "Ninguno",
];
return checklistItemsCima;
 }

 export function getCheckListItemsFeeding(){
  const checklistItemsFeeding = [
   "Soy celiaco/a",
   "Soy vegetariano/a",
   "Soy diabetico/a",
   "Ninguna",
   "Otra"
 ];
 return checklistItemsFeeding;
  }

