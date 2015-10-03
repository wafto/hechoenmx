## Soy Emprendedor
Desarrollar una plataforma para promover la presencia de empresas emergentes de TIC y ofrecer mayores oportunidades de negocio para éstas.

### Notas importantes de desarrollo

- **No hacer fork del proyecto.**
- No se permitiran commits directamente en las branches de develop y master ya que estas serán administradas por el RM (Release Manager), solo casos especiales a criterio del equipo de trabajo y del RM.
- Se debe usar el modelo de branching de [git-flow](http://danielkummer.github.io/git-flow-cheatsheet/).
- Cada vez que se trabaje en algo se debe crear una branch a partir de develop y posteriormente al finalizar los cambios en vez de hacer un ```git flow feature finish nombre``` se subirá la branch al repo y de esa branch enviar el Pull Request a develop para que a su momento y después de que alguien más revise el código haga el merge a develop.
- El nombre de los commits debe ser en inglés empezando con letra mayúscula y bien explicado de lo que se trata el commit.
- El nombre de las feature branch debe ser también en inglés y al estilo ```feature/cursos-api-implementation```.
- Cuando se agregue alguna dependencia tanto en [NPM](https://www.npmjs.com) o [Bower](http://bower.io), usar versiones exactas sin anteponer tilde en la versión.

### Autores
- Aftab Hussain Miranda (wafto.mx@gmail.com)
- Eduardo Ortiz Ramírez (edbr.or@gmail.com)
