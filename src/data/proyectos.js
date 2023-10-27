export const proyectos = [
    {
        id: 9,
        nombre: 'StarWars-DataBank',
        imagen: './starwars.jpg',
        descripcion: [
            'Base de Datos Star Wars',
          
            'App, en la que puedes consultar personajes, naves, localizaciones, y mucho más...',
            '** Se trata de un desarrollo para movil y tablet, por tanto la vista para pc no es lo ideal. ',
            'Al abrirlo desde un dispositivo Android pulsando en las opciones del navegador, tenemos la opcion de instalar la aplicación. Una vez instalada se verá y comportará como una app nativa de Android'
            
        ],
        tecnologias: [
            'IONIC',
            'ANGULAR'
        ],
        librerias: [
            
            'Material',
            'Ionic',
            'Rxjs',
            'Capacitor'
            

        ],
        url: {
            urlBackGit: null,
            urlFrontGit:'https://github.com/jaelEspinosa/ionic_StarsWars/tree/main/src',
            urlDeploy:'https://ionic-star-wars-56f70.web.app'
        }

        
    },
    {
        id: 0,
        nombre: 'BudgetApp',
        imagen: './budgetapp2.jpg',
        descripcion: [
            'Gestion de Presupuestos',
          
            'App, para empresa de reformas y/o construcción para gestionar presupuestos.',
            'Los presupuestos estan divididos en capitulos y éstos a su vez en lotes.'
        ],
        tecnologias: [
            'REACT',
            'NODEJS'
        ],
        librerias: [
            
            'Axios',
            'Tailwind',
            'Redux',
            'Redux Toolkit',
            'NodeMailer',
            'Express',
            'Mongoose'

        ],
        url: {
            urlBackGit:'https://github.com/jaelEspinosa/budgetApp_back.git',
            urlFrontGit:'https://github.com/jaelEspinosa/budgetApp_front.git',
            urlDeploy:'https://budget-app-front.vercel.app'
        }

        
    },
    {
        id: 1,
        nombre: 'TesloShop',
        imagen: './tesloclon1.jpg',
        descripcion: [
            'Ecommerce de ropa',
            'Tiene dos entornos, cliente y admin.',
            'En el entorno cliente tiene las funciones propias de un ecommerce. En el entorno admin, se pueden ver todas las ordenes usuarios y productos, pudiendo editar y añadir nuevos productos',
            'Tanto el Back como el Front van en el mismo proyecto.'
        ],
        tecnologias: [
            'NEXT JS',
            'MATERIAL UI',
            'NODEJS'
        ],
        librerias: [
            'Next Auth',
            'Axios',
            'Material Ui',
            'React Hook Form',
            'Paypal',
            'Js-Cookie',
            'Mongoose'

        ],
        url: {
            urlBackGit:'',
            urlFrontGit:'https://github.com/jaelEspinosa/tesloShopClon',
            urlDeploy:'https://tesloshopclonjael.vercel.app/'
        }

        
    },
    {
        id: 2,
        nombre: 'upTask',
        imagen: './upTask.jpg',
        descripcion: [
            'Gestión de Proyectos',
            'Es una Spa en la que los usuarios de un proyecto ven las tareas asignadas y los plazos de realización de las mismas.',
            'El creador del proyecto es el único que puede editar las tareas, los colaboradores solo las pueden ver y poner si están finalizadas'
        ],
        tecnologias: [
            'REACT JS',
            'EXPRESS',
            'MONGO',
            'NODEJS',
            '(MERN).'
        ],
        librerias: [
            'Tailwind',
            'Axios',
            'React Hook Form',
            'React Router Dom',
            'Socket IO',
            'NodeMailer',
            'Mongoose'

        ],
        url: {
            urlBackGit:'https://github.com/jaelEspinosa/uptask_backend',
            urlFrontGit:'https://github.com/jaelEspinosa/uptasck_frontend',
            urlDeploy:'https://uptask-mern.netlify.app/'
        }

        
    },
    {
        id: 3,
        nombre: 'Product-Hunt-Clon',
        imagen: './productHunt.jpg',
        descripcion: [
            'Aplicación web en la que puedes publicar tus proyectos o productos. Los usuarios registrados podrán votar y comentar dichos proyectos.',
            
        ],
        tecnologias: [
            'NEXT-JS',
            'FIREBASE'
            ],
        librerias: [          
            '@Emotion Styled Comonents'
       ],
        url: {
            urlBackGit:'',
            urlFrontGit:'https://github.com/jaelEspinosa/ProductHunt',
            urlDeploy:'https://product-hunt-flame.vercel.app/'
        }

        
    },
    {
        id: 4,
        nombre: 'GuitarLa',
        imagen: './guitarLa.jpg',
        descripcion: [
            'Emulación Ecommerce. Se trata de una tienda de guitarras y cursos de guitarra.',
            
        ],
        tecnologias: [
            'NEXT-JS',
            'CSS'
            ],
        librerias: [          
            'strapi'
       ],
        url: {
            urlBackGit:'https://github.com/jaelEspinosa/guitarLa_strapi',
            urlFrontGit:'https://github.com/jaelEspinosa/guitarla_next',
            urlDeploy:'https://guitar-la-sin-ss-props.vercel.app/'
        }

        
    },
    {
        id: 5,
        nombre: 'Quiosco App',
        imagen: './quiosco.jpg',
        descripcion: [
            'Aplicación de quiosco para cafeteria. Es una app para gestionar pedidos de bebida o comida.',
            
        ],
        tecnologias: [
            'NEXT-JS',
            
            ],
        librerias: [          
            'Toastify',
            'React-Modal',
            'Prisma',
            'Tailwind'
       ],
        url: {
            urlBackGit:'',
            urlFrontGit:'https://github.com/jaelEspinosa/Quioscoapp_nextJs',
            urlDeploy:'https://quiosco-app-deploy.vercel.app/'
        }

        
    },
    {
        id: 6,
        nombre: 'weather App',
        imagen: './weather.jpg',
        descripcion: [
            'App meteorológica. Si das permisos de ubicación, consulta a la api wheather y renderiza la predicción meteorológica en las horas y dias próximos. También tiene un buscador para encontrar la ciudad deseada y consultar el clima de ésta.',
            
        ],
        tecnologias: [
            'REACT',
            'CSS'
            
            ],
        librerias: [          
            
            'React-Router-Dom',
            'Axios',
         
       ],
        url: {
            urlBackGit:'',
            urlFrontGit:'https://github.com/jaelEspinosa/React_weather',
            urlDeploy:'https://react-weather-omega.vercel.app/'
        }

        
    },
    {
        id: 7,
        nombre: 'Paises App',
        imagen: './paises.jpg',
        descripcion: [
            'Aplicación web, que consumiendo una Api, nos da información y ubicación de todos los paises del mundo. Los puedes buscar por Nombre, por Capital, o por Región',
            
        ],
        tecnologias: [
            'ANGULAR',
            'TypeScript',
            'CSS',
            
            ],
        librerias: [          
            
            'Leaflet',
            'RxJs',
            'Animate.css',
            'Bootstrap'
            
         
       ],
        url: {
            urlBackGit:'',
            urlFrontGit:'https://github.com/jaelEspinosa/Angular-paisApp.git',
            urlDeploy:'https://ngpaisesapp.netlify.app'
        }
    },
    {
        id: 8,
        nombre: 'Mapas App',
        imagen: './mapas_angular.jpg',
        descripcion: [
            'Aplicación web, que consumiendo la Api Mapbox, nos ofrece posibilidades para manipular y representar los mapas, marcadores, ubicaciones y mucho más...',
            
        ],
        tecnologias: [
            'ANGULAR',
            'TypeScript',
            'CSS',
            
            ],
        librerias: [          
            
            'Mapbox',
            'RxJs',
            'Bootstrap'
            
         
       ],
        url: {
            urlBackGit:'',
            urlFrontGit:'https://github.com/jaelEspinosa/maps_Angular.git',
            urlDeploy:'https://angularmapsjael.netlify.app'
        }
    }
]