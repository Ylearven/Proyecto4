import { datos } from '../00-Datos/Datos'
import { boton2 } from '../Boton/boton'
import './edu_expe.css'

export const experiencia = (addEvents = false) => {
  const titulos = document.createElement('h2')
  titulos.innerHTML = `${boton2('Estudios', 'btnEstudios')}
  ${boton2('Experiencia', 'btnExperiencia')}`
  const experienciaSection = document.createElement('section')
  experienciaSection.id = 'Experiencia'
  experienciaSection.appendChild(titulos)
  for (const element of datos.Experiencia) {
    const divContainer = document.createElement('div')
    const posicion = document.createElement('h3')
    posicion.textContent = 'Posición: ' + element.position
    const company = document.createElement('h3')
    company.textContent = 'Compañía: ' + element.company
    const start = document.createElement('h3')
    start.textContent = 'Fecha de inicio: ' + element.startDate
    const descripcion = document.createElement('p')
    descripcion.textContent = 'Descripción del puesto: ' + element.description

    divContainer.appendChild(posicion)
    divContainer.appendChild(company)
    divContainer.appendChild(start)
    divContainer.appendChild(descripcion)
    experienciaSection.appendChild(divContainer)
  }
  if (addEvents) {
    experienciaSection
      .querySelector('.btnEstudios')
      .addEventListener('click', () => {
        updateContent('estudios')
      })
    experienciaSection
      .querySelector('.btnExperiencia')
      .addEventListener('click', () => {
        updateContent('experiencia')
      })
  }
  return experienciaSection
}
export const estudios = (addEvents = false) => {
  const titulos = document.createElement('h2')
  titulos.innerHTML = `${boton2('Estudios', 'btnEstudios')}
  ${boton2('Experiencia', 'btnExperiencia')}`
  const estudiosSection = document.createElement('section')
  estudiosSection.id = 'Estudios'
  estudiosSection.appendChild(titulos)
  const divContainer = document.createElement('div')

  const grado = document.createElement('h3')
  grado.textContent = 'Grado: ' + datos.Educacion.grado
  const universidad = document.createElement('h3')
  universidad.textContent = 'Universidad: ' + datos.Educacion.universidad
  const year = document.createElement('h3')
  year.textContent = 'Año de graduación: ' + datos.Educacion.añograduacion
  const cursos = document.createElement('p')
  cursos.textContent = 'Cursos: ' + datos.Educacion.Cursos

  divContainer.appendChild(grado)
  divContainer.appendChild(universidad)
  divContainer.appendChild(year)
  divContainer.appendChild(cursos)
  estudiosSection.appendChild(divContainer)
  if (addEvents) {
    estudiosSection
      .querySelector('.btnEstudios')
      .addEventListener('click', () => {
        updateContent('estudios')
      })
    estudiosSection
      .querySelector('.btnExperiencia')
      .addEventListener('click', () => {
        updateContent('experiencia')
      })
  }
  return estudiosSection
}
const updateContent = (section) => {
  const dynamic = document.getElementById('dynamicContainer')
  dynamic.innerHTML = ''
  if (section === 'estudios') {
    dynamic.appendChild(estudios(true))
  } else if (section === 'experiencia') {
    dynamic.appendChild(experiencia(true))
  }
}
