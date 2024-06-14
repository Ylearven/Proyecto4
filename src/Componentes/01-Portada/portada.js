import './portada.css'
import { avatar } from '../Avatar/avatar'
import { boton } from '../Boton/boton'

export const portada = () => {
  //Barra de navegación
  const barraNav = document.createElement('nav')
  barraNav.innerHTML = `${boton('Home', '#Portada', 'btnHome')}
      ${boton('Sobre mi', '#AboutMe', 'btnAboutMe')}
      ${boton('Estudios', '#Estudios', 'btnEstudios')}
      ${boton('Experiencia', '#Experiencia', 'btnExperiencia')}
      ${boton('Proyectos', '#Proyectos', 'btnProjects')}
      ${boton('Contacto', '#Contacto', 'btnContact')}`
  //Section container
  const divContainer = document.createElement('div')
  divContainer.id = 'ContenedorPrincipal'
  const divTexto = document.createElement('div')
  divTexto.id = 'ContenedorTexto'
  divTexto.classList.add = 'texto'
  const titulo1 = document.createElement('h1')
  titulo1.textContent = 'Hola'
  const titulo2 = document.createElement('h2')
  titulo2.textContent = 'Soy Ylenia'
  const parrafo1 = document.createElement('p')
  parrafo1.textContent = 'Aquí te dejo mi CV'
  const divImagen = document.createElement('div')
  divImagen.id = 'ContenedorImagen'
  divImagen.classList.add = 'imagen'
  const imagenPerfil = avatar('./assets/dan-farrell-fT49QnFucQ8-unsplash.jpg')
  divTexto.appendChild(titulo1)
  divTexto.appendChild(titulo2)
  divTexto.appendChild(parrafo1)
  divImagen.appendChild(imagenPerfil)
  divContainer.appendChild(divTexto)
  divContainer.appendChild(divImagen)

  const portadaContainer = document.createElement('section')
  portadaContainer.id = 'Portada'
  portadaContainer.appendChild(barraNav)
  portadaContainer.appendChild(divContainer)

  return portadaContainer
}
