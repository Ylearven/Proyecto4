import { datos } from '../00-Datos/Datos'
import './sobremi.css'
export const sobremi = () => {
  // Sobre Mi container
  const SMContainer = document.createElement('div')
  SMContainer.id = 'SMContainer'
  const tituloSM = document.createElement('h2')
  tituloSM.textContent = 'About Me'
  const parrafoSM = document.createElement('p')
  parrafoSM.textContent = datos.AboutMe.aboutme
  SMContainer.appendChild(tituloSM)
  SMContainer.appendChild(parrafoSM)

  //Skils container
  const SkContainer = document.createElement('div')
  SkContainer.id = 'SkContainer'
  const tituloSk = document.createElement('h2')
  tituloSk.textContent = 'Skills'
  const parrafoSk = document.createElement('p')
  parrafoSk.textContent = datos.AboutMe.skills
  SkContainer.appendChild(tituloSk)
  SkContainer.appendChild(parrafoSk)

  const AboutmeSection = document.createElement('section')
  AboutmeSection.id = 'AboutMe'
  AboutmeSection.appendChild(SMContainer)
  AboutmeSection.appendChild(SkContainer)
  return AboutmeSection
}
