import { datos } from '../00-Datos/Datos'
import './proyecto.css'
export const project = () => {
  const titulo = document.createElement('h2')
  titulo.textContent = 'Proyectos'
  const projectSection = document.createElement('section')
  projectSection.id = 'Proyectos'
  projectSection.appendChild(titulo)
  for (const elemento of datos.Proyectos) {
    const divContainer = document.createElement('div')
    const titulo2 = document.createElement('h3')
    titulo2.textContent = 'Titulo: ' + elemento.title
    const description = document.createElement('p')
    description.textContent = 'Descripción: ' + elemento.description
    const link = document.createElement('a')
    link.textContent = 'Link: ' + elemento.link
    const preview = document.createElement('a')
    preview.textContent = 'Preview: ' + elemento.preview

    divContainer.appendChild(titulo2)
    divContainer.appendChild(description)
    divContainer.appendChild(link)
    divContainer.appendChild(preview)
    projectSection.appendChild(divContainer)
  }

  return projectSection
}
