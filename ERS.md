## Especificación de Requisitos de Software
### Prototipo mx_C

	Versión 0.1, aprobada
	
	Desarrollada por Eduardo Ortiz Ramírez @ We Are The Robots Inc S de RL de CV
	
	27 de octubre, 2015


####Propósito
En el presente documento revisaremos la Especificación de Requisitos de Software relativos al prototipo mx_C, considerando una primera Version estable para efectos de presentar el potencial que tiene nuestra visión para el desarrollo de la aplicación #HechoenMexico. 

Definimos que el alcance de este documento abarcará: el stack de tecnología y la solución utilizada para el desarrollo del prototipo, sus características fundamentales, los elementos de valor agregado y el caso de uso para el actor denominado como Innovador, es decir, una ruta critica posible que puede seguir un emprendedor o PyME desde la primera vez que visita la plataforma y realiza las principales interacciones que demuestran la funcionalidad propuesta para el desarrollo final.


####Audiencia y recomendaciones
Hemos preparado el documento para su fácil lectura e interpretación por los distintos involucrados en la toma de decisiones sobre #HechoenMX, incluyendo a desarrolladores, gestores de proyecto, directores de tecnología, consultores, asesores y analistas, limitando el uso de lenguaje técnico a las secciones donde es estrictamente necesario.

La organización del documento abarca cuatro grandes rubros: Introducción, Descripción General, Requerimientos Funcionales y Especificaciones No Funcionales, sugerimos comenzar la lectura con la sección introductoria y la descripción general y posteriormente revisar la sección mas relevante para los intereses del lector de acuerdo a su perfil.

####Visión del producto
Crear una comunidad digital de empresas, organizaciones y profesionales de las TIC que promueva la vinculación de los diversos actores del sector, para generar oportunidades de crecimiento profesional, transferencia de conocimiento, desarrollo de competencias laborales, alianzas comerciales y estratégicas y fomento al desarrollo de negocios.

Ser la comunidad de empresas de TIC más representativa a nivel nacional, convirtiéndose en el espacio obligado de pertenencia para cualquier empresa del sector, detonando la profesionalización, vinculación y apoyo de la industria.

Existir como una plataforma digital libre y gratuita que posibilite y provea las herramientas tecnológicas necesarias para la autorregulación y crecimiento de una red especializada, que siempre fomente el desarrollo económico y profesional de sus miembros.


####Alcance del prototipo
mx_C es el prototipo funcional de la aplicación web #HechoEnMX cuyo eje nodal es un mapa geocodificado interactivo que presenta de forma intuitiva y certera para los usuarios, los resultados de sus búsquedas de apoyos y convocatorias, capacitaciones, incubadoras, aceleradoras, emprendedores y PyMES del ecosistema TIC a nivel nacional.

El prototipo presenta el frontend de la aplicación en el cual podemos interactuar con las funciones principales que hemos desarrollado e implementado para transmitir la experiencia de usuario y el diseño de interfaz propuesto. 

Presentamos una selección de módulos, comenzando con el denominado on boarding que permite aproximar a los usuarios que visitan la aplicación por primera vez, a la experiencia interactiva y dinámica de #HechoEnMX invitándolos a identificarse de acuerdo a su tipo de perfil y posteriormente invitándolos a seleccionar una categoría de búsqueda general, a continuación, invitarlos a escribir una palabra clave que integrada a los dos filtros previos, le generaran un primer juego de resultados personalizados, presentados en el mapa y con los cuales podrá realizar diversas interacciones.

Las interacciones que se pueden realizar sobre los resultados de búsqueda, son elementos que facilitaran la vinculación entre los diversos actores por ejemplo consultar los resultados de forma geolocalizada en el mapa o en listados de forma paralela, organizar los resultados con filtros de proximidad, popularidad o actualidad, y utilizar elementos de interacción social como agregar a red de contactos o enviar mensajes, dichos elementos de interacción están implementados en el prototipo sin embargo no trabajan sobre datos reales ni realizan modificaciones en la base de datos. 

En el caso del prototipo, los perfiles presentados, Gobierno, Asociaciones, Academia, Industria, Aceleradoras e Incubadoras, se complementarán con el modulo de cartera que permitirá mostrar eventos, programas, convocatorias y/o apoyos ya que son los elementos.
 
Consideramos que el alcance del prototipo exhibe de manera concisa las funcionalidades mas relevantes que proponemos desarrollar para el el Reto #HechoEnMexico y aproximan al usuario a una experiencia útil, fácil y proactiva.


####Funcionalidades

- Registro

- Login

- On boarding

- Buscar de forma global para usuarios, apoyos, eventos, convocatorias, formación, etc.

- Geolocalizar en mapa los resultados de búsqueda a nivel nacional la ubicación y perfil de los diversos tipos de usuarios.

- Filtrar resultados: Cercanos, Populares o Recientes

- Mostrar Detalle de perfil con información general

- Agregar usuarios

- Enviar Mensajes directos entre usuarios cuando son contactos agregados.
- Consultar cartera de eventos/convocatorias o apoyos
- Listar la red de contactos (Seguidores y Siguiendo)


####Workflow del prototipo
- La primera vez que se visita el aplicativo nos pregunta ¿Quién eres? de tal forma podemos determinar el tipo de perfil de entre dos posibles: Innovador o Dinamizador.

- A continuación presentamos una vista donde preguntamos ¿Qué estás buscando? donde el usuario podrá seleccionar opciones de acuerdo a su perfil, por ejemplo para un Innovador mostraremos: Incubadoras/Aceleradoras, Convocatorias/Apoyos, Capacitación, para poder elaborar el primer query que mostrará resultados en el mapa.

- Mostramos una vista donde se pueden ingresar términos o palabras clave para ejecutar la primer búsqueda

- Presentamos los resultados de la búsqueda en el mapa mediante geocodificación, los resultados se organizaron en listados con las fichas y se podrán realizar filtros de forma dinámica.

- Al querer enviar un mensaje o agregar a su red alguna de las fichas mostradas como resultado, se le pedirá al usuario hacer un registro inicial con su email y contraseña.

- A continuación se le permitirá interactuar con su selección y podrá continuar utilizando la plataforma libremente.


####Valor Agregado

- Integración de tags en los perfiles para encontrar resultados y ofrecer sugerencias

- Cartera de apoyos, convocatorias, programas, eventos y capacitación de gobierno, organizaciones e industria. 


####Actores

El prototipo presenta el caso de uso para el tipo de perfil Innovador realizando búsquedas cuyos resultados le arrojen perfiles de tipo Dinamizador.

- Innovador
	- Emprendedor/Persona Física con Actividad Empresarial
	- Empresario/Persona Moral (PyME)

- Dinamizador
	- Oficina de Gobierno
	- Incubadora/Aceleradora
	- Fondo de Inversión/Inversionista
	- Cámara, Asociación/Fundación
	- Centros de Investigación/Academia


####Ambiente productivo

Para el prototipo mx_C utilizamos un VPS con las siguientes características:

Intel(R) Xeon(R) CPU E5-2650L v3 @ 1.80GHz
512 MB RAM
20 GB SSD
1 TB Bandwidtch

Dicho servidor está provisto con la siguiente tecnología (Stack LEMP)

- Ubuntu 14.04
- NGINX 1.8
- MySQL 5.5
- PHP 5.6

Adicionalmente se requiere la instalación de los siguientes manejadores y herramientas

- Composer 1.0
- Node 0.12
- NPM 2.11
- Bower 1.5.3
- Gulp 3.9.0


####Desarrollo e implementación

mx_C es un prototipo de aplicación web HTML5 desarrollado sobre stack LEMP, utilizando el Framework Laravel 5 apegados al patrón MVC (Modelo-Vista-Controlador), implementando Map Box (Leaflet + OpenStretMaps),  presentando las vistas en frontend con Angular.js exhibiendo funcionalidad de tipo Single Page Application para buscar y presentar los resultados (fichas de empresas, convocatorias, eventos, entre otros), y permitir la interacción con ellos. 


####Interfaces de usuario
La interfaz del prototipo mx_C cuenta con tres elementos fundamentales, en la parte superior presentamos un Header con un buscador general y los botones para la interacción de registro y acceso.

Debajo del header presentamos el mapa geolocalizado que exhibirá los resultados, finalmente, en la parte izquierda contamos con el listado de fichas de resultado de búsqueda con tres tipos de filtro (proximidad, actualidad y popularidad), la posibilidad de consultar el detalle de la ficha, agregar la ficha a la red del usuario y enviar mensaje.

La interfaz de mx_C es concisa y directa, presentando las interacciones de forma lógica para el usuario.


####Funciones por tipo de usuario

mx_C implementa el tipo de usuario Innovador, sin embargo presentamos las funcionalidades propuestas para su contraparte, en este caso el perfil Dinamizador.

- Innovador
	- Realizar búsquedas y visualizarlas en el mapa.
	- Filtrar resultados de búsqueda (empresas, apoyos y programas; tipo de proyectos, sector).
	- Consultar el detalle de los resultados de búsqueda.
	- Agregar usuarios a su red.
	- Marcar convocatorias, apoyos, eventos, programas como favoritos.
	- Crear y administrar su perfil de usuario.
	- Enviar mensajes entre usuarios agregados a su red.
	- Recibir sugerencias de usuarios afines.
	- Publicar proyectos en su portafolios.

- Dinamizador
	- Crear y administrar su perfil de usuario.
	- Publicar convocatorias, apoyos, eventos, programas  en su cartera.
	- Agregar usuarios a su red.
	- Enviar mensajes entre usuarios agregados a su red.
	- Marcar PyMEs o Emprendedores como favoritos.
	- Recibir sugerencias de usuarios que le pueden interesar.
	- Realizar búsquedas y visualizarlas en el mapa.
	- Filtrar resultados de búsqueda
	- Consultar el detalle de los resultados de búsqueda.


####Escalabilidad
La aplicación cuenta con una arquitectura que permite ser desplegada fácilmente a partir del repositorio base mediante un deploy script y está desarrollada de tal forma que puede escalar de forma horizontal, con autenticación mediante JWT, preservando la sesión de cada usuario mediante local storage y además es una Aplicación desarrollada utilizando software libre sin incurrir en costos de licenciamiento.


####Reportes y Analíticas



####Soporte Tecnológico

